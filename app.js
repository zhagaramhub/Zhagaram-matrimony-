import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
const SUPABASE_URL = "https://gpyufzuuvupkvyrvuixw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_JLyb6hy1OcMacRYzPK2gWw_aPMNbcJW";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
const $ = (id) => document.getElementById(id);
const message = (text, isError=false) => { const el=$("authMessage"); el.textContent=text; el.classList.toggle("error",isError); };
const profileMessage = (text, isError=false) => { const el=$("profileMessage"); if(el){el.textContent=text;el.classList.toggle("error",isError);} };
const toast = (text) => { const el=$("toast"); el.textContent=text; el.classList.add("show"); window.clearTimeout(window.__toastTimer); window.__toastTimer=window.setTimeout(()=>el.classList.remove("show"),3000); };
$("year").textContent=new Date().getFullYear();
$("menuToggle").addEventListener("click",()=>$("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>$("mainNav").classList.remove("open")));
$("searchForm").addEventListener("submit",event=>{event.preventDefault();const g=$("lookingFor").value,a=$("ageRange").value,r=$("religion").value;let n=0;document.querySelectorAll(".profile-card").forEach(card=>{const age=Number(card.dataset.age);const am=a==="all"||(a==="20-25"&&age>=20&&age<=25)||(a==="26-30"&&age>=26&&age<=30)||(a==="31-35"&&age>=31&&age<=35);const show=am&&(g==="all"||card.dataset.gender===g)&&(r==="all"||card.dataset.religion===r);card.hidden=!show;if(show)n++;});$("emptyState").hidden=n!==0;$("profiles").scrollIntoView({behavior:"smooth"});toast(n?n+" sample profile(s) found":"பொருத்தமான மாதிரி Profile இல்லை");});
document.querySelectorAll(".profile-visual i").forEach(el=>{el.setAttribute("role","button");el.setAttribute("tabindex","0");const toggle=()=>{el.classList.toggle("saved");el.textContent=el.classList.contains("saved")?"♥":"♡";toast("இது மாதிரி Profile மட்டுமே.");};el.addEventListener("click",toggle);el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();toggle();}});});
$("languageToggle").addEventListener("click",()=>toast("English interface update விரைவில்."));
function setTab(register){$("registerForm").hidden=!register;$("loginForm").hidden=register;$("showRegister").classList.toggle("active",register);$("showLogin").classList.toggle("active",!register);message(register?"புதிய Email கணக்கை உருவாக்குங்கள்.":"உங்கள் Email மற்றும் Password மூலம் உள்நுழையுங்கள்.");}
$("showRegister").addEventListener("click",()=>setTab(true));$("showLogin").addEventListener("click",()=>setTab(false));
$("registerForm").addEventListener("submit",async e=>{e.preventDefault();const email=$("regEmail").value.trim(),password=$("regPassword").value;if(password.length<8){message("கடவுச்சொல் குறைந்தது 8 எழுத்துகள் இருக்க வேண்டும்.",true);return;}const btn=e.submitter;btn.disabled=true;message("பதிவு செய்கிறது...");try{const {data,error}=await supabase.auth.signUp({email,password});if(error)throw error;if(data.session){message("கணக்கு உருவானது. இப்போது உங்கள் Profile விவரங்களை நிரப்புங்கள்.");await refreshSession(data.session.user);}else{message("பதிவு கோரிக்கை வெற்றி. உங்கள் Email-க்கு வந்த verification link-ஐ திறந்து, பின்னர் Login செய்யுங்கள்.");}}catch(err){message(err.message||"பதிவு செய்ய முடியவில்லை.",true);}finally{btn.disabled=false;}});
$("loginForm").addEventListener("submit",async e=>{e.preventDefault();const btn=e.submitter;btn.disabled=true;message("உள்நுழைகிறது...");try{const {data,error}=await supabase.auth.signInWithPassword({email:$("loginEmail").value.trim(),password:$("loginPassword").value});if(error)throw error;await refreshSession(data.user);message("வெற்றிகரமாக உள்நுழைந்துள்ளீர்கள்.");}catch(err){message(err.message||"Login தோல்வியடைந்தது.",true);}finally{btn.disabled=false;}});
async function refreshSession(user){
 const activeUser=user||(await supabase.auth.getUser()).data.user;
 const dashboard=$("memberDashboard"),auth=$("login"),create=$("createProfile");
 if(!activeUser){$("sessionBar").hidden=true;create.hidden=true;dashboard.hidden=true;auth.hidden=false;return;}
 $("sessionBar").hidden=false;$("sessionEmail").textContent=activeUser.email||"Logged in";
 const {data,error}=await supabase.from("profiles").select("id,full_name,date_of_birth,gender,religion,community,education,occupation,city,profile_status").eq("id",activeUser.id).maybeSingle();
 if(error){message("Login ஆனது. Profile விவரங்களைப் பெற முடியவில்லை: "+error.message,true);return;}
 auth.hidden=true;
 if(!data){dashboard.hidden=true;create.hidden=false;create.scrollIntoView({behavior:"smooth",block:"start"});return;}
 create.hidden=true;dashboard.hidden=false;
 const name=data.full_name||"Zhagaram Member";
 $("memberName").textContent=name;$("memberInitial").textContent=name.trim().charAt(0).toUpperCase();
 $("memberId").textContent=activeUser.email||"Member";
 $("dashboardHeading").textContent="வணக்கம், "+name+"!";
 $("dashStatus").textContent=data.profile_status||"Pending Review";
 const fields=[["பெயர்",data.full_name],["பிறந்த தேதி",data.date_of_birth],["பாலினம்",data.gender],["மதம்",data.religion],["சமூகம்",data.community],["கல்வி",data.education],["வேலை",data.occupation],["நகரம்",data.city]];
 $("profileDetails").replaceChildren(...fields.map(([label,value])=>{const item=document.createElement("div");item.className="profile-detail";const b=document.createElement("b");b.textContent=label;const span=document.createElement("span");span.textContent=value||"—";item.append(b,span);return item;}));
 dashboard.scrollIntoView({behavior:"smooth",block:"start"});
}
$("dashboardLogout").addEventListener("click",async()=>{const {error}=await supabase.auth.signOut();if(error){toast(error.message);return;}await refreshSession(null);toast("வெற்றிகரமாக Logout செய்துள்ளீர்கள்.");});
$("logoutButton").addEventListener("click",async()=>{const {error}=await supabase.auth.signOut();if(error){message(error.message,true);return;}await refreshSession(null);message("வெற்றிகரமாக Logout செய்துள்ளீர்கள்.");});
$("profileForm").addEventListener("submit",async e=>{e.preventDefault();const btn=e.submitter;btn.disabled=true;profileMessage("Profile சேமிக்கிறது...");try{const {data:{user},error:userError}=await supabase.auth.getUser();if(userError||!user)throw new Error("முதலில் Login செய்யுங்கள்.");const profile={id:user.id,full_name:$("fullName").value.trim(),date_of_birth:$("dateOfBirth").value,gender:$("gender").value,religion:$("profileReligion").value.trim()||null,community:$("community").value.trim()||null,education:$("education").value.trim()||null,occupation:$("occupation").value.trim()||null,city:$("city").value.trim()||null,profile_status:"pending"};const {error}=await supabase.from("profiles").upsert(profile,{onConflict:"id"});if(error)throw new Error("Profile விவரங்கள் சேமிக்கப்படவில்லை: "+error.message);const {error:privateError}=await supabase.from("profile_private").upsert({user_id:user.id,mobile_number:$("mobile").value.trim()},{onConflict:"user_id"});if(privateError)throw new Error("அடிப்படை Profile சேமிக்கப்பட்டது; ஆனால் மொபைல் விவரம் சேமிக்கப்படவில்லை: "+privateError.message);$("createProfile").hidden=true;profileMessage("வெற்றி! உங்கள் Profile மற்றும் தனிப்பட்ட மொபைல் விவரம் சேமிக்கப்பட்டது. நிர்வாகச் சரிபார்ப்புக்குப் பிறகு Profile செயல்படுத்தப்படும்.");message("Profile சேமிக்கப்பட்டது.");toast("Profile வெற்றிகரமாக சேமிக்கப்பட்டது.");}catch(err){profileMessage(err.message||"Profile சேமிக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",true);}finally{btn.disabled=false;}});
document.querySelectorAll("[data-view]").forEach(button=>button.addEventListener("click",()=>{const view=button.dataset.view;document.querySelectorAll(".dashboard-view").forEach(el=>el.hidden=el.id!==view+"View");document.querySelectorAll(".dash-link").forEach(el=>el.classList.toggle("active",el.dataset.view===view));const headings={overview:"வணக்கம்!",profile:"My Profile",matches:"Matches",interests:"Interests",messages:"Messages",preferences:"Partner Preference"};$("dashboardHeading").textContent=headings[view]||"Dashboard";}));
$("editProfileButton").addEventListener("click",()=>{toast("Profile editing வசதி அடுத்த கட்டத்தில் இணைக்கப்படும்.");});
const {data:{session}}=await supabase.auth.getSession();if(session)await refreshSession(session.user);
supabase.auth.onAuthStateChange((_event,session)=>{if(session)refreshSession(session.user);else refreshSession(null);});
