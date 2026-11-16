const $ = (id) => document.getElementById(id);
const toast = (message) => {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");
  window.clearTimeout(window.__toastTimer);
  window.__toastTimer = window.setTimeout(() => el.classList.remove("show"), 2800);
};
$("year").textContent = new Date().getFullYear();
$("menuToggle").addEventListener("click", () => $("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(link => link.addEventListener("click", () => $("mainNav").classList.remove("open")));

$("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const gender = $("lookingFor").value;
  const age = $("ageRange").value;
  const religion = $("religion").value;
  let visible = 0;
  document.querySelectorAll(".profile-card").forEach(card => {
    const cardAge = Number(card.dataset.age);
    const ageMatch = age === "all" || (age === "20-25" && cardAge >= 20 && cardAge <= 25) || (age === "26-30" && cardAge >= 26 && cardAge <= 30) || (age === "31-35" && cardAge >= 31 && cardAge <= 35);
    const genderMatch = gender === "all" || card.dataset.gender === gender;
    const religionMatch = religion === "all" || card.dataset.religion === religion;
    const show = ageMatch && genderMatch && religionMatch;
    card.hidden = !show;
    if (show) visible++;
  });
  $("emptyState").hidden = visible !== 0;
  $("profiles").scrollIntoView({behavior:"smooth"});
  toast(visible ? visible + " sample profile(s) found" : "பொருத்தமான மாதிரி Profile இல்லை");
});

document.querySelectorAll(".profile-visual i").forEach(button => {
  button.setAttribute("role","button");
  button.setAttribute("tabindex","0");
  button.setAttribute("aria-label","Save sample profile");
  const toggle = () => {
    button.classList.toggle("saved");
    button.textContent = button.classList.contains("saved") ? "♥" : "♡";
    toast("இது மாதிரி Profile மட்டுமே. உண்மையான சேமிப்பு Login வசதிக்குப் பிறகு.");
  };
  button.addEventListener("click",toggle);
  button.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();toggle();}});
});

$("languageToggle").addEventListener("click", () => {
  toast("English content will be enabled in the next language update.");
});
document.querySelectorAll('a[href="#login"], a[href="#register"]').forEach(link => {
  link.addEventListener("click",event=>{
    event.preventDefault();
    toast("Login / Registration வசதி Supabase இணைப்புக்குப் பிறகு செயல்படுத்தப்படும்.");
  });
});