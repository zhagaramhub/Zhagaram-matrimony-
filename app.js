import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
const SUPABASE_URL="https://gpyufzuuvupkvyrvuixw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY="sb_publishable_JLyb6hy1OcMacRYzPK2gWw_aPMNbcJW";
const supabase=createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY);
const $=id=>document.getElementById(id);
const toast=t=>{const el=$("toast");if(!el)return;el.textContent=t;el.classList.add("show");clearTimeout(window.__toastTimer);window.__toastTimer=setTimeout(()=>el.classList.remove("show"),2800)};
const setMessage=(id,t,error=false)=>{const el=$(id);if(el){el.textContent=t;el.classList.toggle("error",error)}};
if($("year"))$("year").textContent=new Date().getFullYear();
if($("menuToggle"))$("menuToggle").addEventListener("click",()=>$("mainNav")?.classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>$("mainNav")?.classList.remove("open")));
if($("searchForm"))$("searchForm").addEventListener("submit",e=>{e.preventDefault();const g=$("lookingFor").value,a=$("ageRange").value,r=$("religion").value;let n=0;document.querySelectorAll(".profile-card").forEach(card=>{const age=Number(card.dataset.age),ageOk=a==="all"||(a==="20-25"&&age>=20&&age<=25)||(a==="26-30"&&age>=26&&age<=30)||(a==="31-35"&&age>=31&&age<=35);const show=ageOk&&(g==="all"||card.dataset.gender===g)&&(r==="all"||card.dataset.religion===r);card.hidden=!show;if(show)n++});if($("emptyState"))$("emptyState").hidden=n!==0;toast(n?n+" sample profile(s) found":"No sample profiles match")});
if($("registerForm"))$("registerForm").addEventListener("submit",async e=>{e.preventDefault();const btn=e.submitter,email=$("regEmail").value.trim(),password=$("regPassword").value;if(password.length<8){setMessage("authMessage","Password must be at least 8 characters.",true);return}btn.disabled=true;setMessage("authMessage","Creating your account...");try{const {data,error}=await supabase.auth.signUp({email,password});if(error)throw error;if(data.session){setMessage("authMessage","Account created. Opening your profile...");location.href="profile.html"}else setMessage("authMessage","Registration request successful. Verify your email, then login.")}catch(err){setMessage("authMessage",err.message||"Registration failed.",true)}finally{btn.disabled=false}});
if($("loginForm"))$("loginForm").addEventListener("submit",async e=>{e.preventDefault();const btn=e.submitter;btn.disabled=true;setMessage("authMessage","Signing in...");try{const {data,error}=await supabase.auth.signInWithPassword({email:$("loginEmail").value.trim(),password:$("loginPassword").value});if(error)throw error;const {data:roles}=await supabase.from("user_roles").select("role").eq("user_id",data.user.id).eq("role","admin");if(roles?.some(row=>row.role==="admin")){location.href="admin.html";return}const {data:profile}=await supabase.from("profiles").select("id").eq("id",data.user.id).maybeSingle();location.href=profile?"dashboard.html":"profile.html"}catch(err){setMessage("authMessage",err.message||"Login failed.",true)}finally{btn.disabled=false}});
async function getUser(){const {data:{user},error}=await supabase.auth.getUser();if(error)throw error;if(!user){location.href="login.html";return null}return user}
async function loadProfile(){const user=await getUser();if(!user)return;const {data,error}=await supabase.from("profiles").select("id,full_name,date_of_birth,gender,religion,community,sub_community,height_cm,marital_status,education,occupation,city,district,state,profile_status").eq("id",user.id).maybeSingle();if(error){setMessage("profileMessage","Could not load profile: "+error.message,true);return}if($("dashboardHeading")){if(!data){location.href="profile.html";return}const name=data.full_name||"Zhagaram Member";$("dashboardHeading").textContent="வணக்கம், "+name+"!";$("memberName").textContent=name;$("memberInitial").textContent=name.trim().charAt(0).toUpperCase();$("memberId").textContent=user.email||"Member";$("dashStatus").textContent=data.profile_status||"Pending Review";const {data:roles}=await supabase.from("user_roles").select("role").eq("user_id",user.id).eq("role","admin");if(roles?.some(row=>row.role==="admin")&&$("adminNavLink"))$("adminNavLink").hidden=false}if($("profileForm")){if(data){$("fullName").value=data.full_name||"";$("dateOfBirth").value=data.date_of_birth||"";$("gender").value=data.gender||"";$("profileReligion").value=data.religion||"";$("community").value=data.community||"";$("subCommunity").value=data.sub_community||"";$("heightCm").value=data.height_cm??"";$("maritalStatus").value=data.marital_status||"";$("education").value=data.education||"";$("occupation").value=data.occupation||"";$("city").value=data.city||"";$("district").value=data.district||"";$("state").value=data.state||""}const {data:privateData}=await supabase.from("profile_private").select("mobile_number").eq("user_id",user.id).maybeSingle();$("mobile").value=privateData?.mobile_number||""}} 
if($("dashboardHeading")||$("profileForm"))loadProfile().catch(err=>{setMessage("profileMessage",err.message,true)});
if($("profileForm"))$("profileForm").addEventListener("submit",async e=>{e.preventDefault();const btn=e.submitter;btn.disabled=true;setMessage("profileMessage","Saving your profile...");try{const user=await getUser();if(!user)return;const profile={id:user.id,full_name:$("fullName").value.trim(),date_of_birth:$("dateOfBirth").value,gender:$("gender").value,religion:$("profileReligion").value.trim()||null,community:$("community").value.trim()||null,sub_community:$("subCommunity").value.trim()||null,height_cm:$("heightCm").value?Number($("heightCm").value):null,marital_status:$("maritalStatus").value||null,education:$("education").value.trim()||null,occupation:$("occupation").value.trim()||null,city:$("city").value.trim()||null,district:$("district").value.trim()||null,state:$("state").value.trim()||null};const {error}=await supabase.from("profiles").upsert(profile,{onConflict:"id"});if(error)throw error;const {error:privateError}=await supabase.from("profile_private").upsert({user_id:user.id,mobile_number:$("mobile").value.trim()},{onConflict:"user_id"});if(privateError)throw privateError;setMessage("profileMessage","Profile saved successfully.");toast("Profile saved");setTimeout(()=>location.href="dashboard.html",700)}catch(err){setMessage("profileMessage",err.message||"Could not save profile.",true)}finally{btn.disabled=false}});
async function logout(){const {error}=await supabase.auth.signOut();if(error){toast(error.message);return}location.href="index.html"}
$("dashboardLogout")?.addEventListener("click",logout);
supabase.auth.onAuthStateChange((event,session)=>{if(event==="SIGNED_OUT"&&(location.pathname.endsWith("dashboard.html")||location.pathname.endsWith("profile.html")))location.href="login.html"});

// Register the Zhagaram installable web app service worker.
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Zhagaram offline support could not be enabled:", error);
    });
  });
}


// Secure administrator dashboard: role is verified from the database, never from user metadata.
const adminPage = $("memberRows");
if (adminPage) {
  let adminMembers = [];
  const statusLabels = { pending: "சரிபார்ப்பு நிலுவை", active: "அங்கீகரிக்கப்பட்டது", rejected: "நிராகரிக்கப்பட்டது", suspended: "நிறுத்தப்பட்டது" };
  const safeText = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  const showAdminMessage = (message, type="") => {
    const el = $("adminMessage");
    if (!el) return;
    el.textContent = message;
    el.className = "admin-alert" + (type ? " " + type : "");
  };
  const formatDate = value => value ? new Date(value).toLocaleDateString("ta-IN", {year:"numeric",month:"short",day:"numeric"}) : "—";
  const requireAdmin = async () => {
    const {data:{user},error:userError} = await supabase.auth.getUser();
    if (userError) throw userError;
    if (!user) { location.href = "login.html"; return null; }
    const {data:roles,error:roleError} = await supabase.from("user_roles").select("role").eq("user_id",user.id).eq("role","admin");
    if (roleError) throw roleError;
    if (!roles || !roles.some(row => row.role === "admin")) {
      showAdminMessage("இந்தப் பக்கத்தைப் பார்க்க நிர்வாக அனுமதி தேவை.", "error");
      setTimeout(() => { location.href = "dashboard.html"; }, 1800);
      return null;
    }
    $("adminEmail").textContent = user.email || "Admin";
    showAdminMessage("நிர்வாக அனுமதி சரிபார்க்கப்பட்டது.", "success");
    return user;
  };
  const renderMembers = () => {
    const term = ($("memberSearch")?.value || "").trim().toLocaleLowerCase();
    const status = $("statusFilter")?.value || "all";
    const rows = adminMembers.filter(p => (status === "all" || p.profile_status === status) &&
      [p.full_name,p.city,p.district,p.state,p.education,p.occupation].some(v => String(v || "").toLocaleLowerCase().includes(term)));
    $("memberRows").innerHTML = rows.length ? rows.map(p => {
      const current = p.profile_status || "pending";
      const actions = current === "pending"
        ? '<button class="action-btn action-approve" data-status="active">அங்கீகரி</button><button class="action-btn action-reject" data-status="rejected">நிராகரி</button>'
        : current === "active"
          ? '<button class="action-btn action-suspend" data-status="suspended">நிறுத்து</button>'
          : '<button class="action-btn action-restore" data-status="active">மீண்டும் செயல்படுத்து</button>';
      return '<tr data-id="' + safeText(p.id) + '" data-current="' + safeText(current) + '">' +
        '<td><div class="member-cell"><b>' + safeText(p.full_name || "பெயர் குறிப்பிடப்படவில்லை") + '</b><small>' + safeText(p.gender || "—") + ' · ' + safeText(formatDate(p.created_at)) + '</small></div></td>' +
        '<td>' + safeText([p.city,p.district,p.state].filter(Boolean).join(", ") || "—") + '</td>' +
        '<td>' + safeText([p.education,p.occupation].filter(Boolean).join(" · ") || "—") + '</td>' +
        '<td><span class="status-pill ' + safeText(current) + '">' + safeText(statusLabels[current] || current) + '</span></td>' +
        '<td><div class="action-group">' + actions + '</div></td></tr>';
    }).join("") : '<tr><td colspan="5" class="table-empty">பொருத்தமான உறுப்பினர்கள் இல்லை.</td></tr>';
    $("totalCount").textContent = adminMembers.length;
    $("pendingCount").textContent = adminMembers.filter(p => p.profile_status === "pending").length;
    $("activeCount").textContent = adminMembers.filter(p => p.profile_status === "active").length;
    $("otherCount").textContent = adminMembers.filter(p => ["rejected","suspended"].includes(p.profile_status)).length;
  };
  const loadMembers = async () => {
    showAdminMessage("உறுப்பினர் விவரங்கள் ஏற்றப்படுகின்றன...");
    const {data,error} = await supabase.from("profiles")
      .select("id,full_name,gender,city,district,state,education,occupation,profile_status,created_at")
      .order("created_at",{ascending:false}).limit(500);
    if (error) throw error;
    adminMembers = data || [];
    renderMembers();
    showAdminMessage("உறுப்பினர் பட்டியல் புதுப்பிக்கப்பட்டது.", "success");
  };
  const loadAudit = async () => {
    const {data,error} = await supabase.rpc("get_admin_profile_audit",{p_limit:30});
    if (error) throw error;
    const el = $("auditRows");
    el.innerHTML = data && data.length ? data.map(item =>
      '<div class="audit-item"><div><b>' + safeText(item.old_status) + ' → ' + safeText(item.new_status) + '</b><small>Profile: ' + safeText(String(item.profile_id || "நீக்கப்பட்டது").slice(0,8)) + ' · ' + safeText(formatDate(item.changed_at)) + '</small></div><span class="audit-change">நிர்வாக மாற்றம்</span></div>'
    ).join("") : '<p class="table-empty">இதுவரை நிர்வாக மாற்றங்கள் எதுவும் இல்லை.</p>';
  };
  const updateMemberStatus = async (row, nextStatus, button) => {
    const id = row.dataset.id;
    const oldStatus = row.dataset.current;
    if (!id || !nextStatus || nextStatus === oldStatus) return;
    const confirmText = "இந்த உறுப்பினரின் நிலையை “" + (statusLabels[nextStatus] || nextStatus) + "” என மாற்றவா?";
    if (!window.confirm(confirmText)) return;
    button.disabled = true;
    try {
      const {data,error} = await supabase.from("profiles").update({profile_status:nextStatus})
        .eq("id",id).eq("profile_status",oldStatus).select("id,profile_status").maybeSingle();
      if (error) throw error;
      if (!data) throw new Error("இந்தப் பதிவு ஏற்கனவே மாறியிருக்கலாம். பட்டியலைப் புதுப்பித்து மீண்டும் முயற்சிக்கவும்.");
      toast("உறுப்பினர் நிலை புதுப்பிக்கப்பட்டது.");
      await Promise.all([loadMembers(),loadAudit()]);
    } catch (error) {
      showAdminMessage(error.message || "நிலையை மாற்ற முடியவில்லை.", "error");
    } finally { button.disabled = false; }
  };
  (async () => {
    try {
      const user = await requireAdmin();
      if (!user) return;
      await Promise.all([loadMembers(),loadAudit()]);
    } catch (error) {
      showAdminMessage(error.message || "Admin Dashboard ஏற்றப்படவில்லை.", "error");
    }
  })();
  $("memberSearch")?.addEventListener("input",renderMembers);
  $("statusFilter")?.addEventListener("change",renderMembers);
  $("refreshMembers")?.addEventListener("click",()=>loadMembers().catch(e=>showAdminMessage(e.message,"error")));
  $("refreshAudit")?.addEventListener("click",()=>loadAudit().catch(e=>showAdminMessage(e.message,"error")));
  $("memberRows")?.addEventListener("click",event => {
    const button = event.target.closest("button[data-status]");
    if (!button) return;
    const row = button.closest("tr[data-id]");
    if (row) updateMemberStatus(row,button.dataset.status,button);
  });
  $("adminLogout")?.addEventListener("click",logout);
}
