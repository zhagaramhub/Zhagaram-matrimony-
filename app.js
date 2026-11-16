import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// Zhagaram bilingual interface: one language at a time, saved on this device.
const zhTranslations = {
"Home":"முகப்பு","Search":"தேடல்","Membership":"உறுப்பினர் திட்டம்","Login":"உள்நுழைவு","Register Free":"இலவசமாகப் பதிவு செய்க","Open menu":"மெனுவைத் திறக்கவும்",
"நம்பிக்கையில் தொடங்கும் ஓர் அழகிய பயணம்":"A beautiful journey that begins with trust",
"உறவுகள் ஆயிரம் இருந்தாலும்,":"Even with a thousand relationships,",
"வாழ்க்கையைப் பகிர ஒரு மனம் போதும்.":"one heart is enough to share a life.",
"Get Started Free":"இலவசமாகத் தொடங்குங்கள்","Explore Profiles":"சுயவிவரங்களைப் பாருங்கள்","Begin your journey with confidence":"நம்பிக்கையுடன் உங்கள் பயணத்தைத் தொடங்குங்கள்","A safe and privacy-first experience":"பாதுகாப்பும் தனியுரிமையும் முதன்மையான அனுபவம்",
"A SIMPLE EXPERIENCE":"எளிய அனுபவம்","The Right Beginning.":"சரியான தொடக்கம்.","A Journey Built on Trust.":"நம்பிக்கையில் உருவாகும் பயணம்.","Start your search with clarity and confidence.":"தெளிவுடனும் நம்பிக்கையுடனும் தேடலைத் தொடங்குங்கள்.",
"பதிவு செய்யுங்கள்":"Create your profile","உங்கள் அடிப்படை விவரங்களுடன் இலவசமாக Profile உருவாக்குங்கள்.":"Create a free profile with your basic details.",
"பொருத்தத்தைத் தேடுங்கள்":"Find a match","வயது, இடம் மற்றும் விருப்பங்களின் அடிப்படையில் தேடுங்கள்.":"Search by age, location and preferences.",
"தொடர்பைத் தொடங்குங்கள்":"Start connecting","உங்களுக்கு ஏற்ற Profiles-ஐ தேர்ந்தெடுத்து அடுத்த படிக்குச் செல்லுங்கள்.":"Choose suitable profiles and take the next step.",
"YOUR NEXT CHAPTER":"உங்கள் அடுத்த அத்தியாயம்","Begin with a profile.":"ஒரு சுயவிவரத்துடன் தொடங்குங்கள்.","Move forward with confidence.":"நம்பிக்கையுடன் முன்னேறுங்கள்.","Create Free Profile →":"இலவச சுயவிவரத்தை உருவாக்குங்கள் →",
"Respect · Trust · Privacy":"மரியாதை · நம்பிக்கை · தனியுரிமை","All rights reserved.":"அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
"FREE REGISTRATION":"இலவசப் பதிவு","Create Your Account":"உங்கள் கணக்கை உருவாக்குங்கள்","Start your matrimony journey with a free account.":"இலவசக் கணக்குடன் உங்கள் திருமணப் பயணத்தைத் தொடங்குங்கள்.",
"A thoughtful beginning.":"அர்த்தமுள்ள தொடக்கம்.","Your account gives you a private space to create and manage your matrimony profile.":"உங்கள் திருமணச் சுயவிவரத்தை உருவாக்கவும் நிர்வகிக்கவும் உங்கள் கணக்கில் தனிப்பட்ட இடம் கிடைக்கும்.",
"Email":"மின்னஞ்சல்","Password":"கடவுச்சொல்","At least 8 characters":"குறைந்தது 8 எழுத்துகள்","Already registered?":"ஏற்கனவே பதிவு செய்துவிட்டீர்களா?","New to Zhagaram?":"Zhagaram-க்கு புதியவரா?","Register free":"இலவசமாகப் பதிவு செய்க",
"MEMBER ACCESS":"உறுப்பினர் உள்நுழைவு","Welcome Back":"மீண்டும் வரவேற்கிறோம்","Login to continue to your member dashboard.":"உங்கள் உறுப்பினர் பக்கத்திற்குச் செல்ல உள்நுழையுங்கள்.",
"Your journey continues here.":"உங்கள் பயணம் இங்கிருந்து தொடர்கிறது.","YOUR DETAILS":"உங்கள் விவரங்கள்","My Profile":"எனது சுயவிவரம்","View and update your basic profile information.":"உங்கள் அடிப்படை விவரங்களைப் பார்த்து புதுப்பிக்கவும்.",
"Your details, your control.":"உங்கள் விவரங்கள், உங்கள் கட்டுப்பாட்டில்.","Your mobile number is stored separately and is not shown in public profile search.":"உங்கள் கைபேசி எண் தனியாகச் சேமிக்கப்படும்; பொதுத் தேடலில் காட்டப்படாது.",
"← Back to Dashboard":"← உறுப்பினர் பக்கத்திற்குத் திரும்பு","முழுப் பெயர் / Full name":"முழுப் பெயர்","பிறந்த தேதி / Date of birth":"பிறந்த தேதி","பாலினம் / Gender":"பாலினம்","தேர்வு செய்க":"தேர்வு செய்க","ஆண் / Groom":"மணமகன்","பெண் / Bride":"மணமகள்","Other":"மற்றவை","Prefer not to say":"குறிப்பிட விரும்பவில்லை","மதம் / Religion":"மதம்","சமூகம் / Community":"சமூகம்","உள் சமூகம் / Sub-community":"உள் சமூகம்","உயரம் (செ.மீ.) / Height":"உயரம் (செ.மீ.)","திருமண நிலை / Marital status":"திருமண நிலை","திருமணம் ஆகாதவர்":"திருமணம் ஆகாதவர்","விவாகரத்து பெற்றவர்":"விவாகரத்து பெற்றவர்","துணையை இழந்தவர்":"துணையை இழந்தவர்","விவாகரத்து நடைமுறையில்":"விவாகரத்து நடைமுறையில்","கல்வி / Education":"கல்வி","வேலை / Occupation":"வேலை","நகரம் / City":"நகரம்","மாவட்டம் / District":"மாவட்டம்","மாநிலம் / State":"மாநிலம்","மொபைல் எண் / Mobile":"கைபேசி எண்","Save Profile":"சுயவிவரத்தைச் சேமிக்கவும்","மொபைல் எண் profile_private அட்டவணையில் தனியாக சேமிக்கப்படும்.":"கைபேசி எண் தனிப்பட்ட அட்டவணையில் பாதுகாப்பாகச் சேமிக்கப்படும்.",
"உறுப்பினர் பகுதி · MEMBER AREA":"உறுப்பினர் பகுதி","உங்கள் வாழ்க்கைத் துணை தேடலை நம்பிக்கையுடன் தொடருங்கள்.":"உங்கள் வாழ்க்கைத் துணை தேடலை நம்பிக்கையுடன் தொடருங்கள்.",
"Dashboard":"முகப்பு","My Profile":"எனது சுயவிவரம்","Search Profiles":"சுயவிவரங்களைத் தேடுங்கள்","Edit Profile":"சுயவிவரத்தைத் திருத்துங்கள்","Admin Dashboard":"நிர்வாகப் பக்கம்","Logout":"வெளியேறு","உங்கள் கணக்கு · YOUR ACCOUNT":"உங்கள் கணக்கு","உங்கள் Dashboard":"உங்கள் கணக்கு","FREE MEMBER":"இலவச உறுப்பினர்","உங்கள் சுயவிவரத்தையும் திருமணத் தேடலையும் ஒரே இடத்தில் நிர்வகிக்கலாம்.":"உங்கள் சுயவிவரத்தையும் திருமணத் தேடலையும் ஒரே இடத்தில் நிர்வகிக்கலாம்.",
"PROFILE STATUS":"சுயவிவர நிலை","Pending Review":"சரிபார்ப்பு நிலுவையில்","நிர்வாகச் சரிபார்ப்பு நிலை":"நிர்வாகச் சரிபார்ப்பு நிலை","சுயவிவரத்தைப் பார்க்க →":"சுயவிவரத்தைப் பார்க்க →","MY PROFILE":"எனது சுயவிவரம்","சுயவிவரம்":"சுயவிவரம்","உங்கள் விவரங்களைப் பார்க்கவும் புதுப்பிக்கவும்":"உங்கள் விவரங்களைப் பார்க்கவும் புதுப்பிக்கவும்","விவரங்களைத் திருத்த →":"விவரங்களைத் திருத்த →","MEMBERSHIP":"உறுப்பினர் திட்டம்","Free":"இலவசம்","தற்போதைய உறுப்பினர் திட்டம்":"தற்போதைய உறுப்பினர் திட்டம்","திட்டங்களைப் பார்க்க →":"திட்டங்களைப் பார்க்க →","திருமணத் தேடல் வசதிகள்":"திருமணத் தேடல் வசதிகள்","பொருத்தமான சுயவிவரங்களைத் தேடுங்கள்":"பொருத்தமான சுயவிவரங்களைத் தேடுங்கள்","உங்கள் துணை விருப்பங்களை அமைக்கவும்":"உங்கள் துணை விருப்பங்களை அமைக்கவும்","விருப்பங்கள் (Interests)":"விருப்பங்கள்","விரைவில் கிடைக்கும்":"விரைவில் கிடைக்கும்","செய்திகள் (Messages)":"செய்திகள்","தினசரி பரிந்துரைகள்":"தினசரி பரிந்துரைகள்","தனியுரிமை அமைப்புகள்":"தனியுரிமை அமைப்புகள்","உங்கள் மொபைல் எண் பொதுச் சுயவிவரத்தில் காட்டப்படாது. தனிப்பட்ட விவரங்கள் பாதுகாப்பாக வைக்கப்பட வேண்டும்.":"உங்கள் கைபேசி எண் பொதுச் சுயவிவரத்தில் காட்டப்படாது. தனிப்பட்ட விவரங்கள் பாதுகாப்பாகப் பாதுகாக்கப்படும்.",
"FIND YOUR MATCH":"உங்களுக்கான பொருத்தத்தைத் தேடுங்கள்","Explore profiles using your preferred criteria.":"உங்கள் விருப்பங்களின் அடிப்படையில் சுயவிவரங்களைப் பாருங்கள்.","Looking For":"தேடுவது","All Profiles":"அனைத்து சுயவிவரங்களும்","Bride":"மணமகள்","Groom":"மணமகன்","Age Range":"வயது வரம்பு","Any Age":"எந்த வயதானாலும்","Religion":"மதம்","All":"அனைத்தும்","Hindu":"இந்து","Christian":"கிறிஸ்தவர்","Muslim":"முஸ்லிம்","Search Profiles →":"சுயவிவரங்களைத் தேடுங்கள் →","The profiles shown below are sample data only.":"கீழே காட்டப்படும் சுயவிவரங்கள் மாதிரி விவரங்கள் மட்டுமே.","MEMBER PREVIEWS":"உறுப்பினர் முன்னோட்டம்","Featured Profiles":"சிறப்புச் சுயவிவரங்கள்","SAMPLE DATA":"மாதிரி விவரங்கள்","SAMPLE":"மாதிரி","Graduate":"பட்டதாரி","Engineer":"பொறியாளர்","Professional":"தொழில்முறைப் பணியாளர்","No sample profiles match these filters.":"இந்தத் தேர்வுகளுக்குப் பொருத்தமான மாதிரி சுயவிவரங்கள் இல்லை.","இவை மாதிரி விவரங்கள் மட்டுமே; உண்மையான உறுப்பினர் Profiles அல்ல.":"இவை மாதிரி விவரங்கள் மட்டுமே; உண்மையான உறுப்பினர் சுயவிவரங்கள் அல்ல.",
"MEMBERSHIP PLANS":"உறுப்பினர் திட்டங்கள்","Choose how you begin":"உங்கள் பயணத்தை எப்படித் தொடங்க விரும்புகிறீர்கள்?","Start with free registration. Premium services will be introduced after launch.":"இலவசப் பதிவுடன் தொடங்குங்கள். பிரீமியம் சேவைகள் பின்னர் அறிமுகப்படுத்தப்படும்.",
"A SIMPLE START":"எளிய தொடக்கம்","Your Journey Starts Free.":"உங்கள் பயணம் இலவசமாகத் தொடங்குகிறது.","More features, as we grow.":"வளர்ச்சிக்கேற்ப கூடுதல் வசதிகள்.","Create your profile and begin exploring. We will clearly announce premium features and pricing before they become available.":"உங்கள் சுயவிவரத்தை உருவாக்கி தேடலைத் தொடங்குங்கள். பிரீமியம் வசதிகளும் கட்டணங்களும் அறிமுகத்திற்கு முன் தெளிவாக அறிவிக்கப்படும்.",
"Free Registration":"இலவசப் பதிவு","Basic Membership":"அடிப்படை உறுப்பினர் திட்டம்","Premium Membership":"பிரீமியம் உறுப்பினர் திட்டம்","Coming Soon":"விரைவில்","Register Now →":"இப்போதே பதிவு செய்க →",
"பாதுகாப்பான நிர்வாகப் பகுதி · ADMIN ONLY":"பாதுகாப்பான நிர்வாகப் பகுதி","உறுப்பினர் நிர்வாகம்":"உறுப்பினர் நிர்வாகம்","சுயவிவரங்களைச் சரிபார்த்து, தகுந்த நிலையை வழங்குங்கள்.":"சுயவிவரங்களைச் சரிபார்த்து, தகுந்த நிலையை வழங்குங்கள்.","சரிபார்க்கப்படுகிறது...":"சரிபார்க்கப்படுகிறது...","நிர்வாக அனுமதி சரிபார்க்கப்படுகிறது...":"நிர்வாக அனுமதி சரிபார்க்கப்படுகிறது...","மொத்த உறுப்பினர்கள்":"மொத்த உறுப்பினர்கள்","சரிபார்ப்புக்காக காத்திருப்பவை":"சரிபார்ப்புக்காகக் காத்திருப்பவை","அங்கீகரிக்கப்பட்டவை":"அங்கீகரிக்கப்பட்டவை","நிராகரிக்கப்பட்டவை / நிறுத்தப்பட்டவை":"நிராகரிக்கப்பட்டவை / நிறுத்தப்பட்டவை","MEMBER DIRECTORY":"உறுப்பினர் பட்டியல்","உறுப்பினர் சுயவிவரங்கள்":"உறுப்பினர் சுயவிவரங்கள்","↻ புதுப்பிக்க":"↻ Refresh","தேடல்":"தேடல்","பெயர் / ஊர் / கல்வி":"பெயர் / ஊர் / கல்வி","நிலை":"நிலை","அனைத்தும்":"அனைத்தும்","சரிபார்க்கப்படாதவை":"சரிபார்க்கப்படாதவை","நிராகரிக்கப்பட்டவை":"நிராகரிக்கப்பட்டவை","நிறுத்தப்பட்டவை":"நிறுத்தப்பட்டவை","தகவல்கள் ஏற்றப்படுகின்றன...":"தகவல்கள் ஏற்றப்படுகின்றன...","உறுப்பினர்":"உறுப்பினர்","இடம்":"இடம்","கல்வி / பணி":"கல்வி / பணி","நிர்வாக நடவடிக்கை":"நிர்வாக நடவடிக்கை","தனியுரிமைக்காக மொபைல் எண், தனிப்பட்ட மின்னஞ்சல் மற்றும் வருமான விவரங்கள் இங்கு காட்டப்படுவதில்லை.":"தனியுரிமைக்காக கைபேசி எண், தனிப்பட்ட மின்னஞ்சல் மற்றும் வருமான விவரங்கள் இங்கு காட்டப்படுவதில்லை.","ACTIVITY HISTORY":"செயல்பாட்டு வரலாறு","சமீபத்திய நிர்வாக மாற்றங்கள்":"சமீபத்திய நிர்வாக மாற்றங்கள்","பதிவுகள் ஏற்றப்படுகின்றன...":"பதிவுகள் ஏற்றப்படுகின்றன...","சரிபார்ப்பு நிலுவை":"சரிபார்ப்பு நிலுவை","அங்கீகரிக்கப்பட்டது":"அங்கீகரிக்கப்பட்டது","நிராகரிக்கப்பட்டது":"நிராகரிக்கப்பட்டது","நிறுத்தப்பட்டது":"நிறுத்தப்பட்டது","அங்கீகரி":"அங்கீகரி","நிராகரி":"நிராகரி","நிறுத்து":"நிறுத்து","மீண்டும் செயல்படுத்து":"மீண்டும் செயல்படுத்து","பெயர் குறிப்பிடப்படவில்லை":"பெயர் குறிப்பிடப்படவில்லை","பொருத்தமான உறுப்பினர்கள் இல்லை.":"பொருத்தமான உறுப்பினர்கள் இல்லை.","நிர்வாக மாற்றம்":"நிர்வாக மாற்றம்","இதுவரை நிர்வாக மாற்றங்கள் எதுவும் இல்லை.":"இதுவரை நிர்வாக மாற்றங்கள் எதுவும் இல்லை.","இந்த உறுப்பினரின் நிலையை மாற்றவா?":"இந்த உறுப்பினரின் நிலையை மாற்றவா?","உறுப்பினர் நிலை புதுப்பிக்கப்பட்டது.":"உறுப்பினர் நிலை புதுப்பிக்கப்பட்டது.","இந்தப் பதிவு ஏற்கனவே மாறியிருக்கலாம். பட்டியலைப் புதுப்பித்து மீண்டும் முயற்சிக்கவும்.":"இந்தப் பதிவு ஏற்கனவே மாறியிருக்கலாம். பட்டியலைப் புதுப்பித்து மீண்டும் முயற்சிக்கவும்.","இந்தப் பக்கத்தைப் பார்க்க நிர்வாக அனுமதி தேவை.":"இந்தப் பக்கத்தைப் பார்க்க நிர்வாக அனுமதி தேவை.","நிர்வாக அனுமதி சரிபார்க்கப்பட்டது.":"நிர்வாக அனுமதி சரிபார்க்கப்பட்டது.","உறுப்பினர் விவரங்கள் ஏற்றப்படுகின்றன...":"உறுப்பினர் விவரங்கள் ஏற்றப்படுகின்றன...","உறுப்பினர் பட்டியல் புதுப்பிக்கப்பட்டது.":"உறுப்பினர் பட்டியல் புதுப்பிக்கப்பட்டது.","நிர்வாக மாற்றங்கள்":"நிர்வாக மாற்றங்கள்","பெயர் / ஊர் / கல்வி":"பெயர் / ஊர் / கல்வி",
"Account created. Opening your profile...":"கணக்கு உருவாக்கப்பட்டது. உங்கள் சுயவிவரம் திறக்கப்படுகிறது...","Registration request successful. Verify your email, then login.":"பதிவு வெற்றிகரமாகப் பெறப்பட்டது. மின்னஞ்சலைச் சரிபார்த்த பிறகு உள்நுழையுங்கள்.","Creating your account...":"உங்கள் கணக்கு உருவாக்கப்படுகிறது...","Password must be at least 8 characters.":"கடவுச்சொல் குறைந்தது 8 எழுத்துகள் இருக்க வேண்டும்.","Registration failed.":"பதிவு தோல்வியடைந்தது.","Signing in...":"உள்நுழைகிறது...","Profile saved successfully.":"சுயவிவரம் வெற்றிகரமாகச் சேமிக்கப்பட்டது.","Profile saved":"சுயவிவரம் சேமிக்கப்பட்டது","Could not save profile.":"சுயவிவரத்தைச் சேமிக்க முடியவில்லை.","No sample profiles match":"பொருத்தமான மாதிரி சுயவிவரங்கள் இல்லை","sample profile(s) found":"மாதிரி சுயவிவரங்கள் கிடைத்தன"
};
const zhReverse = Object.fromEntries(Object.entries(zhTranslations).map(([ta,en])=>[en,ta]));
let zhLanguage = localStorage.getItem("zhagaram-language") || "ta";
const zhTranslate = value => {
  const key = String(value ?? "").trim();
  const dict = zhLanguage === "en" ? zhReverse : zhTranslations;
  return dict[key] ? String(value).replace(key,dict[key]) : value;
};
function zhApplyLanguage(){
  document.documentElement.lang = zhLanguage;
  const walker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  let node;
  while((node=walker.nextNode())){
    if(!node.parentElement?.closest("script,style,input,textarea,select,option[data-value],.brand")) {
      const before=node.nodeValue, after=zhTranslate(before);
      if(after!==before) node.nodeValue=after;
    }
  }
  document.querySelectorAll("[placeholder],[aria-label],[title]").forEach(el=>{
    ["placeholder","aria-label","title"].forEach(attr=>{if(el.hasAttribute(attr))el.setAttribute(attr,zhTranslate(el.getAttribute(attr)))});
  });
  const title=document.title;
  document.title=zhTranslate(title);
  const switcher=document.getElementById("zhLanguageSwitch");
  if(switcher) switcher.textContent=zhLanguage==="ta"?"English":"தமிழ்";
}
function zhSetLanguage(next){
  zhLanguage=next;localStorage.setItem("zhagaram-language",next);zhApplyLanguage();
}
function zhInstallLanguageSwitch(){
  const nav=document.querySelector(".site-header nav");
  if(!nav||document.getElementById("zhLanguageSwitch"))return;
  const button=document.createElement("button");
  button.id="zhLanguageSwitch";button.type="button";button.className="language-btn";
  button.style.cssText="border:1px solid #d9cfb8;background:#fffdf8;border-radius:8px;padding:9px 12px;color:#173d35;font-weight:700;cursor:pointer";
  button.addEventListener("click",()=>zhSetLanguage(zhLanguage==="ta"?"en":"ta"));
  nav.append(button);
}
zhInstallLanguageSwitch();
zhApplyLanguage();
const zhLanguageObserver = new MutationObserver(()=>zhApplyLanguage());
zhLanguageObserver.observe(document.body,{childList:true,subtree:true,characterData:true});

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
