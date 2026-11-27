import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
const pages=["index.html","register.html","login.html","reset-password.html","profile.html","admin.html","search.html","dashboard.html"];
const results=[];
function test(name,fn){try{fn();results.push({name,ok:true})}catch(e){results.push({name,ok:false,error:e.message})}}
function html(file){assert.ok(existsSync(file),`Missing page: ${file}`);return readFileSync(file,"utf8")}
const app=readFileSync("app.js","utf8");
test("Core launch pages exist",()=>pages.forEach(html));
test("Registration form and required controls exist",()=>{const s=html("register.html");for(const id of ["registerForm","regEmail","regPassword","authMessage"])assert.ok(s.includes(`id="${id}"`),`missing ${id}`)});
test("Registration uses Supabase Auth and minimum password length",()=>{assert.ok(app.includes("supabase.auth.signUp({email,password"));assert.ok(app.includes("password.length<8"));assert.ok(app.includes('emailRedirectTo:new URL("profile.html"'))});
test("Forgot-password redirect points to the deployed reset page",()=>{assert.ok(app.includes('redirectTo:"https://zhagaramhub.github.io/Zhagaram-matrimony-/reset-password.html"'));assert.ok(html("reset-password.html").includes("resetPasswordForm"));assert.ok(existsSync("reset-password.js"))});
test("Login form includes email/password controls",()=>{const s=html("login.html");for(const id of ["loginForm","loginEmail","loginPassword"])assert.ok(s.includes(`id="${id}"`),`missing ${id}`);assert.ok(app.includes("supabase.auth.signInWithPassword"))});
test("Profile form includes required controls",()=>{const s=html("profile.html");for(const id of ["profileForm","fullName","dateOfBirth","gender","profileMessage"])assert.ok(s.includes(`id="${id}"`),`missing ${id}`)});
test("Profile submit enforces minimum age rule",()=>{assert.ok(app.includes('minimumAge=$("gender").value==="male"?21:18'));assert.ok(app.includes("chosenAge<minimumAge"))});
test("Profile photo validates format and size before upload",()=>{assert.ok(app.includes('["image/jpeg","image/png","image/webp"].includes(photoFile.type)'));assert.ok(app.includes("photoFile.size>5*1024*1024"));assert.ok(app.includes('from("profile-photos").upload'))});
test("Profile submit handler writes to profiles table",()=>{const start=app.indexOf('$("profileForm").addEventListener');assert.ok(start>=0,"profile submit handler missing");const handler=app.slice(start,start+5000);assert.ok(handler.includes('from("profiles")'),"profiles write missing");assert.ok(handler.includes("upsert(")||handler.includes("insert("),"insert/upsert missing")});
test("Live search query restricts to active profiles",()=>assert.ok(app.includes('.eq("profile_status","active")')));
test("Search results exclude the currently signed-in member",()=>{assert.ok(app.includes("p=>p.id!==liveSearchUserId"));assert.ok(app.includes("liveSearchUserId=user.id;liveSearchProfiles=data||[]"));});
test("Logout and protected-page session guard are present",()=>{for(const id of ["dashboardLogout","adminLogout","ownerLogout","staffLogout"])assert.ok(app.includes(id));assert.ok(app.includes("supabase.auth.onAuthStateChange"));assert.ok(app.includes("SIGNED_OUT"))});
test("Validation workflow file exists",()=>assert.ok(existsSync(".github/workflows/validate.yml")));
const failed=results.filter(r=>!r.ok);console.log("Zhagaram Matrimony automated smoke QA");for(const r of results)console.log(`${r.ok?"PASS":"FAIL"} — ${r.name}${r.error?": "+r.error:""}`);console.log(`RESULT: ${results.length-failed.length}/${results.length} passed`);if(failed.length)process.exit(1);
