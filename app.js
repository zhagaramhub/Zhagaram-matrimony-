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
"Account created. Opening your profile...":"கணக்கு உருவாக்கப்பட்டது. உங்கள் சுயவிவரம் திறக்கப்படுகிறது...","Registration request successful. Verify your email, then login.":"பதிவு வெற்றிகரமாகப் பெறப்பட்டது. மின்னஞ்சலைச் சரிபார்த்த பிறகு உள்நுழையுங்கள்.","Creating your account...":"உங்கள் கணக்கு உருவாக்கப்படுகிறது...","Password must be at least 8 characters.":"கடவுச்சொல் குறைந்தது 8 எழுத்துகள் இருக்க வேண்டும்.","Registration failed.":"பதிவு தோல்வியடைந்தது.","Signing in...":"உள்நுழைகிறது...","Profile saved successfully.":"சுயவிவரம் வெற்றிகரமாகச் சேமிக்கப்பட்டது.","Profile saved":"சுயவிவரம் சேமிக்கப்பட்டது","Could not save profile.":"சுயவிவரத்தைச் சேமிக்க முடியவில்லை.","No sample profiles match":"பொருத்தமான மாதிரி சுயவிவரங்கள் இல்லை","sample profile(s) found":"மாதிரி சுயவிவரங்கள் கிடைத்தன",

"உறுப்பினர் பகுதி · MEMBER AREA":"MEMBER AREA",
"உங்கள் கணக்கு · YOUR ACCOUNT":"YOUR ACCOUNT",
"உங்கள் வாழ்க்கைத் துணை தேடலை நம்பிக்கையுடன் தொடருங்கள்.":"Continue your partner search with confidence.",
"Profile:":"சுயவிவரம்:",
"Zhagaram Admin":"Zhagaram நிர்வாகி",
"ஆண்":"ஆண்","பெண்":"பெண்",
"நிர்வாக அனுமதி சரிபார்க்கப்படுகிறது...":"Checking administrator access...",
"உறுப்பினர் விவரங்கள் ஏற்றப்படுகின்றன...":"Loading member details...",
"உறுப்பினர் பட்டியல் புதுப்பிக்கப்பட்டது.":"Member list refreshed.",
"பொருத்தமான உறுப்பினர்கள் இல்லை.":"No matching members found.",
"தகவல்கள் ஏற்றப்படுகின்றன...":"Loading information...",
"பெயர் குறிப்பிடப்படவில்லை":"Name not provided",
"நிர்வாக மாற்றம்":"Administrator change",
"சுயவிவரங்களைச் சரிபார்த்து, தகுந்த நிலையை வழங்குங்கள்.":"Review profiles and assign the appropriate status.",
"நிராகரிக்கப்பட்டவை / நிறுத்தப்பட்டவை":"Rejected / Suspended",
"சரிபார்ப்புக்காகக் காத்திருப்பவை":"Awaiting review",
"மொத்த உறுப்பினர்கள்":"Total members",
"அங்கீகரிக்கப்பட்டவை":"Approved",
"நிர்வாக நடவடிக்கை":"Admin action",
"உறுப்பினர் சுயவிவரங்கள்":"Member profiles",
"சமீபத்திய நிர்வாக மாற்றங்கள்":"Recent admin activity",
"தேடல்":"Search",
"நிலை":"Status",
"அனைத்தும்":"All",
"இடம்":"Location",
"உறுப்பினர்":"Member",
"கல்வி / பணி":"Education / Work",
"தனியுரிமைக்காக கைபேசி எண், தனிப்பட்ட மின்னஞ்சல் மற்றும் வருமான விவரங்கள் இங்கு காட்டப்படுவதில்லை.":"Mobile number, private email and income details are hidden here for privacy.",
"இதுவரை நிர்வாக மாற்றங்கள் எதுவும் இல்லை.":"There are no admin changes yet.",
"சரிபார்ப்பு நிலுவை":"Pending review",
"அங்கீகரிக்கப்பட்டது":"Approved",
"நிராகரிக்கப்பட்டது":"Rejected",
"நிறுத்தப்பட்டது":"Suspended",
"அங்கீகரி":"Approve",
"நிராகரி":"Reject",
"நிறுத்து":"Suspend",
"மீண்டும் செயல்படுத்து":"Reactivate",
"நிர்வாக அனுமதி சரிபார்க்கப்பட்டது.":"Administrator access verified.",
"இந்தப் பக்கத்தைப் பார்க்க நிர்வாக அனுமதி தேவை.":"Administrator access is required to view this page.",
"உறுப்பினர் நிலை புதுப்பிக்கப்பட்டது.":"Member status updated.",
"உங்கள் சுயவிவரத்தையும் திருமணத் தேடலையும் ஒரே இடத்தில் நிர்வகிக்கலாம்.":"Manage your profile and matrimony search in one place.",
"உங்கள் விவரங்களைப் பார்க்கவும் புதுப்பிக்கவும்":"View and update your details",
"தற்போதைய உறுப்பினர் திட்டம்":"Current membership plan",
"விரைவில் கிடைக்கும்":"Coming soon",
"மொபைல் எண் profile_private அட்டவணையில் தனியாக சேமிக்கப்படும்.":"Your mobile number is stored separately in a private table.",
"பதிவுக்கு Email சரிபார்ப்பு தேவைப்படலாம்.":"Email verification may be required for registration."

};
Object.assign(zhTranslations,{
"உரிமையாளர் கட்டுப்பாட்டு மையம்":"Owner Control Center",
"முழுமையான செயல்பாட்டு கண்காணிப்பு":"Complete operations overview",
"உரிமையாளர் அனுமதி சரிபார்க்கப்படுகிறது...":"Checking owner access...",
"நிர்வாகி / பணியாளர் கணக்குகள்":"Admin / Staff Accounts",
"பதிவு செய்யப்பட்ட Email":"Registered email",
"பணியாளர் (Staff)":"Staff",
"நிர்வாகி (Admin)":"Administrator",
"அனுமதி வழங்கு":"Grant access",
"முதலில் அந்த நபர் இணையதளத்தில் கணக்கு உருவாக்கியிருக்க வேண்டும். Owner அனுமதி இல்லாமல் யாரும் தங்கள் பங்கை மாற்ற முடியாது.":"The person must register first. Only the owner can change roles.",
"குழு கணக்குகள் இல்லை.":"No team accounts yet.",
"நீக்கு":"Remove",
"பணிகளை ஒதுக்குதல்":"Assign tasks",
"பணியாளரைத் தேர்வு செய்க":"Select a staff member",
"பணி தலைப்பு":"Task title",
"கடைசி தேதி":"Due date",
"விளக்கம்":"Description",
"பணிக்கான குறிப்புகள்":"Task notes",
"பணியை ஒதுக்கவும்":"Assign task",
"இன்னும் பணிகள் ஒதுக்கப்படவில்லை.":"No tasks have been assigned yet.",
"பணியாளர் பணிப்பலகை":"Staff workspace",
"உங்களுக்கு ஒதுக்கப்பட்ட பணிகளை இங்கே நிர்வகிக்கலாம்.":"Manage the tasks assigned to you here.",
"எனக்கு ஒதுக்கப்பட்ட பணிகள்":"My assigned tasks",
"மொத்தப் பணிகள்":"Total tasks",
"செய்ய வேண்டியவை":"To do",
"நிறைவடைந்தவை":"Completed",
"தொடங்கவில்லை":"Not started",
"நடைபெறுகிறது":"In progress",
"நிறைவு":"Completed",
"குறிப்பிடப்படவில்லை":"Not specified",
"உங்கள் பணிகள் புதுப்பிக்கப்பட்டன.":"Your tasks are up to date.",
"உங்களுக்கு இன்னும் பணிகள் ஒதுக்கப்படவில்லை.":"No tasks have been assigned to you yet.",
"பங்கு வெற்றிகரமாக வழங்கப்பட்டது.":"Role assigned successfully.",
"பங்கு வழங்க முடியவில்லை.":"Could not assign role.",
"அனுமதி நீக்கப்பட்டது.":"Access removed.",
"பணி ஒதுக்கப்பட்டது.":"Task assigned.",
"Owner CRM தகவல்கள் புதுப்பிக்கப்பட்டன.":"Owner CRM data refreshed.",
"மரியாதை · நம்பிக்கை · தனியுரிமை":"Respect · Trust · Privacy",
"உரிமையாளர் கட்டுப்பாட்டு மையம்":"Owner Control Center",
"நிர்வாகிகள்":"Administrators",
"பணியாளர்கள்":"Staff",
"திறந்த பணிகள்":"Open tasks",
"மொத்த உறுப்பினர்கள்":"Total members",
"சரிபார்ப்பு நிலுவை":"Pending review",
"அங்கீகரிக்கப்பட்டவை":"Approved",
"நிராகரிப்பு / நிறுத்தம்":"Rejected / Suspended",
"நிர்வாக அனுமதி தேவை.":"Administrator access required.",
"ZHAGARAM MEMBER ID":"ZHAGARAM MEMBER ID",
"Owner Panel":"உரிமையாளர் பகுதி",
"OWNER CONTROL CENTER":"உரிமையாளர் கட்டுப்பாட்டு மையம்",
"TEAM ACCESS":"குழு அணுகல்",
"TASK MANAGEMENT":"பணி நிர்வாகம்",
"MY TASKS":"எனது பணிகள்",
"STAFF WORKSPACE":"பணியாளர் பணியிடம்",
"OWNER ACCESS":"உரிமையாளர் அனுமதி",
"STAFF ACCESS":"பணியாளர் அனுமதி",
"மொத்த உறுப்பினர்கள்":"Total members",
"சரிபார்ப்பு நிலுவை":"Pending review",
"அங்கீகரிக்கப்பட்டவை":"Approved",
"நிராகரிப்பு / நிறுத்தம்":"Rejected / Suspended",
"Staff CRM":"பணியாளர் CRM",
"உறுப்பினர் ID:":"Member ID:",
"owner":"உரிமையாளர்",
"admin":"நிர்வாகி",
"staff":"பணியாளர்",
"open":"தொடங்கவில்லை",
"in_progress":"நடைபெறுகிறது",
"completed":"நிறைவு",
"cancelled":"ரத்து செய்யப்பட்டது",
"Admin CRM":"நிர்வாக CRM"
});
const zhEnglishToTamil = Object.fromEntries(Object.entries(zhTranslations).filter(([source])=>!/[அ-ஹ]/.test(source)).map(([en,ta])=>[en,ta]));
const zhTamilToEnglish = Object.fromEntries(Object.entries(zhTranslations).filter(([source])=>/[அ-ஹ]/.test(source)).map(([ta,en])=>[ta,en]));
let zhLanguage = localStorage.getItem("zhagaram-language-v2") || "en";
const zhTranslate = value => {
  const key = String(value ?? "").trim();
  const dict = zhLanguage === "en" ? zhTamilToEnglish : zhEnglishToTamil;
  return dict[key] ? String(value).replace(key,dict[key]) : value;
};
function zhApplyLanguage(){
  document.documentElement.lang = zhLanguage;
  const walker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  let node;
  while((node=walker.nextNode())){
    if(!node.parentElement?.closest("script,style,input,textarea,option[data-value],.brand,.poetry-heading")) {
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
  if(switcher){const label=zhLanguage==="ta"?"English":"தமிழ்";if(switcher.textContent!==label)switcher.textContent=label;}
}
function zhSetLanguage(next){
  zhLanguage=next;localStorage.setItem("zhagaram-language-v2",next);zhApplyLanguage();
}
function zhInstallLanguageSwitch(){
  const header=document.querySelector(".site-header");
  const menu=document.getElementById("menuToggle");
  if(!header||document.getElementById("zhLanguageSwitch"))return;
  const button=document.createElement("button");
  button.id="zhLanguageSwitch";button.type="button";button.className="language-btn";
  button.style.cssText="border:1px solid #d9cfb8;background:#fffdf8;border-radius:8px;padding:9px 12px;color:#173d35;font-weight:700;cursor:pointer";
  button.addEventListener("click",()=>zhSetLanguage(zhLanguage==="ta"?"en":"ta"));
  header.insertBefore(button,menu||null);
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
let liveSearchProfiles=[];
const searchEscape=value=>String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const profileAge=value=>{if(!value)return null;const birth=new Date(value+"T00:00:00");if(Number.isNaN(birth.getTime()))return null;const today=new Date();let age=today.getFullYear()-birth.getFullYear();const beforeBirthday=today.getMonth()<birth.getMonth()||(today.getMonth()===birth.getMonth()&&today.getDate()<birth.getDate());if(beforeBirthday)age--;return age>=18&&age<=100?age:null};
const renderLiveProfiles=()=>{
 const grid=$("profileGrid");if(!grid)return;
 const g=$("lookingFor")?.value||"all",range=$("ageRange")?.value||"all",religion=$("religion")?.value||"all";
 const filtered=liveSearchProfiles.filter(p=>{const age=profileAge(p.date_of_birth);const ageOk=range==="all"||(age!==null&&((range==="20-25"&&age>=20&&age<=25)||(range==="26-30"&&age>=26&&age<=30)||(range==="31-35"&&age>=31&&age<=35)));const genderOk=g==="all"||(g==="bride"&&p.gender==="female")||(g==="groom"&&p.gender==="male");const religionOk=religion==="all"||String(p.religion||"").toLowerCase()===religion.toLowerCase();return ageOk&&genderOk&&religionOk});
 grid.innerHTML=filtered.map(p=>{const name=searchEscape(p.full_name||"Zhagaram Member");const age=profileAge(p.date_of_birth);const place=[p.city,p.district,p.state].filter(Boolean).map(searchEscape).join(", ");const details=[p.religion,p.education,p.occupation].filter(Boolean).map(searchEscape);const initials=searchEscape((p.full_name||"Z").trim().charAt(0).toUpperCase());return '<a class="profile-card" href="view-profile.html?id='+encodeURIComponent(p.id)+'" aria-label="'+name+' விவரங்களைப் பார்க்க"><div class="profile-visual visual-a"><span>'+initials+'</span></div><div class="profile-info"><span class="profile-id">'+searchEscape(p.member_id||"ZHAGARAM MEMBER")+'</span><h3>'+name+'</h3><p>'+(age!==null?age+" வயது":"வயது விவரம் இல்லை")+(place?" · "+place:"")+'</p><div class="profile-meta">'+(details.length?details.join(" · "):"விவரங்கள் விரைவில்")+'</div><span class="profile-open-link">விவரங்களைப் பார்க்க →</span></div></a>'}).join("");
 if($("emptyState"))$("emptyState").hidden=filtered.length!==0;
};
const loadLiveProfiles=async()=>{
 const status=$("searchMessage");if(!status)return;
 try{const {data:{user},error:userError}=await supabase.auth.getUser();if(userError)throw userError;
  if(!user){status.innerHTML='உறுப்பினர் Profiles பார்க்க <a href="login.html">உள்நுழையுங்கள்</a>.';return}
  const {data,error}=await supabase.from("profiles").select("id,member_id,full_name,date_of_birth,gender,religion,community,sub_community,education,occupation,height_cm,marital_status,city,district,state").eq("profile_status","active").order("created_at",{ascending:false}).limit(100);
  if(error)throw error;liveSearchProfiles=data||[];status.hidden=true;renderLiveProfiles();
  if($("emptyState")&&liveSearchProfiles.length===0){$("emptyState").textContent="இன்னும் அங்கீகரிக்கப்பட்ட Profiles இல்லை.";$("emptyState").hidden=false}
 }catch(error){status.textContent="Profiles ஏற்ற முடியவில்லை: "+(error.message||"மீண்டும் முயற்சிக்கவும்.");}
};
if($("searchForm")){ 
 $("searchForm").addEventListener("submit",e=>{e.preventDefault();renderLiveProfiles()});
 const profileGrid=$("profileGrid");
 profileGrid?.addEventListener("click",event=>{
   const card=event.target.closest("a.profile-card[href]");
   if(!card)return;
   event.preventDefault();
   const destination=new URL(card.getAttribute("href"),document.baseURI);
   window.location.assign(destination.href);
 });
 loadLiveProfiles();
}
if($("registerForm"))$("registerForm").addEventListener("submit",async e=>{e.preventDefault();const btn=e.submitter,email=$("regEmail").value.trim(),password=$("regPassword").value;if(password.length<8){setMessage("authMessage","Password must be at least 8 characters.",true);return}btn.disabled=true;setMessage("authMessage","Creating your account...");try{const {data,error}=await supabase.auth.signUp({email,password});if(error)throw error;if(data.session){setMessage("authMessage","Account created. Opening your profile...");location.href="profile.html"}else setMessage("authMessage","Registration request successful. Verify your email, then login.")}catch(err){setMessage("authMessage",err.message||"Registration failed.",true)}finally{btn.disabled=false}});
if($("loginForm"))$("loginForm").addEventListener("submit",async e=>{e.preventDefault();const btn=e.submitter;btn.disabled=true;setMessage("authMessage","Signing in...");try{const {data,error}=await supabase.auth.signInWithPassword({email:$("loginEmail").value.trim(),password:$("loginPassword").value});if(error)throw error;const {data:roles,error:roleError}=await supabase.from("user_roles").select("role").eq("user_id",data.user.id);if(roleError)throw roleError;const roleSet=new Set((roles||[]).map(row=>row.role));if(roleSet.has("owner")){location.href="owner.html";return}if(roleSet.has("admin")){location.href="admin.html";return}if(roleSet.has("staff")){location.href="staff.html";return}const {data:profile}=await supabase.from("profiles").select("id").eq("id",data.user.id).maybeSingle();location.href=profile?"dashboard.html":"profile.html"}catch(err){setMessage("authMessage",err.message||"Login failed.",true)}finally{btn.disabled=false}});

if($("emailMode")&&$("phoneMode")){
  $("emailMode").addEventListener("click",()=>{$("emailMode").classList.add("active");$("phoneMode").classList.remove("active");$("loginForm").hidden=false;$("phoneLoginForm").hidden=true;});
  $("phoneMode").addEventListener("click",()=>{$("phoneMode").classList.add("active");$("emailMode").classList.remove("active");$("loginForm").hidden=true;$("phoneLoginForm").hidden=false;});
}
if($("forgotPassword"))$("forgotPassword").addEventListener("click",async()=>{
  const email=$("loginEmail").value.trim();
  if(!email){setMessage("authMessage","Enter your email address first.",true);$("loginEmail").focus();return;}
  setMessage("authMessage","Sending password reset link...");
  try{const {error}=await supabase.auth.resetPasswordForEmail(email,{redirectTo:location.origin+"/reset-password.html"});if(error)throw error;setMessage("authMessage","Password reset link sent. Please check your email.");}
  catch(error){setMessage("authMessage",error.message||"Could not send reset link.",true);}
});
if($("sendPhoneOtp"))$("sendPhoneOtp").addEventListener("click",async()=>{
  const phone=$("loginPhone").value.trim();
  if(!phone){setMessage("authMessage","Enter your mobile number with country code.",true);return;}
  const button=$("sendPhoneOtp");button.disabled=true;setMessage("authMessage","Sending OTP...");
  try{const {error}=await supabase.auth.signInWithOtp({phone,options:{shouldCreateUser:false}});if(error)throw error;$("otpLabel").hidden=false;$("verifyPhoneOtp").hidden=false;setMessage("authMessage","OTP sent. Enter the code received on your phone.");}
  catch(error){setMessage("authMessage",error.message||"Could not send OTP.",true);}
  finally{button.disabled=false;}
});
if($("phoneLoginForm"))$("phoneLoginForm").addEventListener("submit",async event=>{
  event.preventDefault();const button=$("verifyPhoneOtp");button.disabled=true;setMessage("authMessage","Verifying OTP...");
  try{const {data,error}=await supabase.auth.verifyOtp({phone:$("loginPhone").value.trim(),token:$("loginOtp").value.trim(),type:"sms"});if(error)throw error;
    const {data:roles,error:roleError}=await supabase.from("user_roles").select("role").eq("user_id",data.user.id);if(roleError)throw roleError;
    const roleSet=new Set((roles||[]).map(row=>row.role));if(roleSet.has("owner"))location.href="owner.html";else if(roleSet.has("admin"))location.href="admin.html";else if(roleSet.has("staff"))location.href="staff.html";else{const {data:profile}=await supabase.from("profiles").select("id").eq("id",data.user.id).maybeSingle();location.href=profile?"dashboard.html":"profile.html";}
  }catch(error){setMessage("authMessage",error.message||"OTP verification failed.",true);}finally{button.disabled=false;}
});

async function getUser(){const {data:{user},error}=await supabase.auth.getUser();if(error)throw error;if(!user){location.href="login.html";return null}return user}
async function loadNotificationBadge(userId){
 const badge=$("dashboardNotificationCount");
 if(!badge)return;
 try{
  const {count,error}=await supabase.from("notifications").select("id",{count:"exact",head:true}).eq("user_id",userId).eq("is_read",false);
  if(error)throw error;
  badge.textContent=count>99?"99+":String(count||0);
  badge.hidden=!count;
 }catch(error){badge.hidden=true;}
}
let currentProfilePhotoPath=null;
async function showProfilePhoto(path){const img=$("profilePhotoPreview");if(!img)return;if(!path){img.hidden=true;return}const {data,error}=await supabase.storage.from("profile-photos").createSignedUrl(path,3600);if(error)throw error;img.src=data.signedUrl;img.hidden=false}
async function loadProfile(){const user=await getUser();if(!user)return;const {data,error}=await supabase.from("profiles").select("id,member_id,full_name,date_of_birth,gender,religion,community,sub_community,height_cm,marital_status,education,occupation,city,district,state,profile_status,photo_path,father_name,mother_name,siblings_details,family_occupation").eq("id",user.id).maybeSingle();if(error){setMessage("profileMessage","Could not load profile: "+error.message,true);return}if($("dashboardHeading")){if(!data){location.href="profile.html";return}const name=data.full_name||"Zhagaram Member";$("dashboardHeading").textContent="வணக்கம், "+name+"!";$("memberName").textContent=name;$("memberInitial").textContent=name.trim().charAt(0).toUpperCase();$("memberId").textContent=data.member_id||"ZH —";$("dashStatus").textContent=data.profile_status||"Pending Review";loadNotificationBadge(user.id);const {data:roles}=await supabase.from("user_roles").select("role").eq("user_id",user.id);if(roles?.some(row=>row.role==="admin")&&$("adminNavLink"))$("adminNavLink").hidden=false;if(roles?.some(row=>row.role==="owner")&&$("ownerNavLink"))$("ownerNavLink").hidden=false}if($("profileForm")){if(data){$("fullName").value=data.full_name||"";$("dateOfBirth").value=data.date_of_birth||"";$("gender").value=data.gender||"";$("profileReligion").value=data.religion||"";$("community").value=data.community||"";$("subCommunity").value=data.sub_community||"";$("heightCm").value=data.height_cm??"";$("maritalStatus").value=data.marital_status||"";$("education").value=data.education||"";$("occupation").value=data.occupation||"";$("city").value=data.city||"";$("district").value=data.district||"";$("state").value=data.state||"";$("fatherName").value=data.father_name||"";$("motherName").value=data.mother_name||"";$("siblingsDetails").value=data.siblings_details||"";$("familyOccupation").value=data.family_occupation||"";currentProfilePhotoPath=data.photo_path||null;if(currentProfilePhotoPath)showProfilePhoto(currentProfilePhotoPath).catch(()=>{});}const {data:privateData}=await supabase.from("profile_private").select("mobile_number").eq("user_id",user.id).maybeSingle();$("mobile").value=privateData?.mobile_number||""}} 
if($("dashboardHeading")||$("profileForm"))loadProfile().catch(err=>{setMessage("profileMessage",err.message,true)});
if($("profilePhoto"))$("profilePhoto").addEventListener("change",()=>{const file=$("profilePhoto").files?.[0];const img=$("profilePhotoPreview");if(!file||!img)return;if(!["image/jpeg","image/png","image/webp"].includes(file.type)||file.size>5*1024*1024){setMessage("profileMessage","JPG, PNG அல்லது WEBP புகைப்படம் மட்டும். அதிகபட்சம் 5 MB.",true);$("profilePhoto").value="";return}img.src=URL.createObjectURL(file);img.hidden=false;});
if($("profileForm"))$("profileForm").addEventListener("submit",async e=>{e.preventDefault();const btn=e.submitter;btn.disabled=true;setMessage("profileMessage","Saving your profile...");try{const user=await getUser();if(!user)return;const photoFile=$("profilePhoto")?.files?.[0];if(photoFile){if(!["image/jpeg","image/png","image/webp"].includes(photoFile.type)||photoFile.size>5*1024*1024)throw new Error("JPG, PNG அல்லது WEBP புகைப்படம் மட்டும். அதிகபட்சம் 5 MB.");const ext=photoFile.type==="image/png"?"png":photoFile.type==="image/webp"?"webp":"jpg";const nextPhotoPath=user.id+"/profile-"+Date.now()+"."+ext;const {error:photoError}=await supabase.storage.from("profile-photos").upload(nextPhotoPath,photoFile,{cacheControl:"3600",contentType:photoFile.type,upsert:false});if(photoError)throw photoError;currentProfilePhotoPath=nextPhotoPath;}const profile={id:user.id,photo_path:currentProfilePhotoPath,father_name:$("fatherName").value.trim()||null,mother_name:$("motherName").value.trim()||null,siblings_details:$("siblingsDetails").value.trim()||null,family_occupation:$("familyOccupation").value.trim()||null,full_name:$("fullName").value.trim(),date_of_birth:$("dateOfBirth").value,gender:$("gender").value,religion:$("profileReligion").value.trim()||null,community:$("community").value.trim()||null,sub_community:$("subCommunity").value.trim()||null,height_cm:$("heightCm").value?Number($("heightCm").value):null,marital_status:$("maritalStatus").value||null,education:$("education").value.trim()||null,occupation:$("occupation").value.trim()||null,city:$("city").value.trim()||null,district:$("district").value.trim()||null,state:$("state").value.trim()||null};const {error}=await supabase.from("profiles").upsert(profile,{onConflict:"id"});if(error)throw error;const {error:privateError}=await supabase.from("profile_private").upsert({user_id:user.id,mobile_number:$("mobile").value.trim()},{onConflict:"user_id"});if(privateError)throw privateError;setMessage("profileMessage","Profile saved successfully.");toast("Profile saved");setTimeout(()=>location.href="dashboard.html",700)}catch(err){setMessage("profileMessage",err.message||"Could not save profile.",true)}finally{btn.disabled=false}});
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
  const formatDate = value => value ? new Date(value).toLocaleDateString(zhLanguage==="ta"?"ta-IN":"en-IN", {year:"numeric",month:"short",day:"numeric"}) : "—";
  const requireAdmin = async () => {
    const {data:{user},error:userError} = await supabase.auth.getUser();
    if (userError) throw userError;
    if (!user) { location.href = "login.html"; return null; }
    const {data:roles,error:roleError} = await supabase.from("user_roles").select("role").eq("user_id",user.id);
    if (roleError) throw roleError;
    if (!roles || !roles.some(row => ["admin","owner"].includes(row.role))) {
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
        '<td><div class="member-cell"><b>' + safeText(p.full_name || "பெயர் குறிப்பிடப்படவில்லை") + '</b><small>' + safeText(p.member_id || "—") + ' · ' + safeText(p.gender || "—") + ' · ' + safeText(formatDate(p.created_at)) + '</small></div></td>' +
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
      .select("id,member_id,full_name,gender,city,district,state,education,occupation,profile_status,created_at")
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


// Owner-only control center.
const ownerPage=$("ownerStats");
if(ownerPage){
 const safe=value=>String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
 const msg=(value,error=false)=>{const el=$("ownerMessage");if(el){el.textContent=value;el.style.background=error?"#fbeeee":"#edf5ef";el.style.color=error?"#9c3434":"#285b43"}};
 let roleRows=[];
 const ownerGuard=async()=>{const {data:{user},error}=await supabase.auth.getUser();if(error)throw error;if(!user){location.href="login.html";return null}const {data:roles,error:roleError}=await supabase.from("user_roles").select("role").eq("user_id",user.id);if(roleError)throw roleError;if(!(roles||[]).some(r=>r.role==="owner")){msg("இந்தப் பக்கத்தைப் பார்க்க Owner அனுமதி தேவை.",true);setTimeout(()=>location.href="dashboard.html",1600);return null}$("ownerEmail").textContent=user.email||"Owner";return user};
 const loadMetrics=async()=>{const {data,error}=await supabase.rpc("owner_dashboard_metrics");if(error)throw error;const m=Object.fromEntries((data||[]).map(x=>[x.metric,Number(x.metric_value)]));$("mTotal").textContent=m.total_members??0;$("mPending").textContent=m.pending_members??0;$("mActive").textContent=m.active_members??0;$("mOther").textContent=m.rejected_or_suspended??0;$("mAdmins").textContent=m.admin_count??0;$("mStaff").textContent=m.staff_count??0;$("mTasks").textContent=m.open_tasks??0};
 const loadRoles=async()=>{const {data,error}=await supabase.rpc("owner_list_role_assignments");if(error)throw error;roleRows=data||[];$("roleRows").innerHTML=roleRows.length?roleRows.map(r=>'<tr><td>'+safe(r.user_email)+'</td><td>'+safe(r.role_name)+'</td><td>'+safe(new Date(r.assigned_at).toLocaleDateString(zhLanguage==="ta"?"ta-IN":"en-IN"))+'</td><td>'+(["admin","staff"].includes(r.role_name)?'<button class="crm-action" data-remove-email="'+safe(r.user_email)+'" data-remove-role="'+safe(r.role_name)+'">நீக்கு</button>':"—")+'</td></tr>').join(""):'<tr><td colspan="4">குழு கணக்குகள் இல்லை.</td></tr>';
 const select=$("taskAssignee");select.innerHTML='<option value="">பணியாளரைத் தேர்வு செய்க</option>'+roleRows.filter(r=>r.role_name==="staff").map(r=>'<option value="'+safe(r.user_email)+'">'+safe(r.user_email)+'</option>').join("")};
 const loadTasks=async()=>{const {data,error}=await supabase.from("staff_tasks").select("id,title,status,due_at,assigned_to").order("created_at",{ascending:false}).limit(100);if(error)throw error;const ids=[...new Set((data||[]).map(t=>t.assigned_to))];let emails={};if(ids.length){const {data:rows}=await supabase.rpc("owner_list_role_assignments");(rows||[]).forEach(r=>{emails[r.user_email]=r.user_email})} $("taskRows").innerHTML=data?.length?data.map(t=>'<tr><td>'+safe(t.title)+'</td><td>'+safe((roleRows.find(r=>r.user_id===t.assigned_to)?.user_email)||"பணியாளர்")+'</td><td>'+safe(t.status)+'</td><td>'+safe(t.due_at?new Date(t.due_at).toLocaleDateString(zhLanguage==="ta"?"ta-IN":"en-IN"):"—")+'</td></tr>').join(""):'<tr><td colspan="4">இன்னும் பணிகள் ஒதுக்கப்படவில்லை.</td></tr>'};
 const refresh=async()=>{await Promise.all([loadMetrics(),loadRoles(),loadTasks()]);msg("Owner CRM தகவல்கள் புதுப்பிக்கப்பட்டன.")};
 (async()=>{try{if(await ownerGuard())await refresh()}catch(e){msg(e.message||"Owner Panel ஏற்றப்படவில்லை.",true)}})();
 $("refreshRoles")?.addEventListener("click",()=>refresh().catch(e=>msg(e.message,true)));
 $("roleForm")?.addEventListener("submit",async e=>{e.preventDefault();const btn=e.submitter;btn.disabled=true;try{const {error}=await supabase.rpc("owner_assign_staff_role",{p_email:$("roleEmail").value.trim(),p_role:$("roleType").value});if(error)throw error;$("roleEmail").value="";await refresh();msg("பங்கு வெற்றிகரமாக வழங்கப்பட்டது.")}catch(err){msg(err.message||"பங்கு வழங்க முடியவில்லை.",true)}finally{btn.disabled=false}});
 $("roleRows")?.addEventListener("click",async e=>{const b=e.target.closest("button[data-remove-role]");if(!b)return;if(!confirm(b.dataset.removeEmail+" — "+b.dataset.removeRole+" அனுமதியை நீக்கவா?"))return;b.disabled=true;try{const {error}=await supabase.rpc("owner_remove_staff_role",{p_email:b.dataset.removeEmail,p_role:b.dataset.removeRole});if(error)throw error;await refresh();msg("அனுமதி நீக்கப்பட்டது.")}catch(err){msg(err.message,true)}finally{b.disabled=false}});
 $("taskForm")?.addEventListener("submit",async e=>{e.preventDefault();const btn=e.submitter;btn.disabled=true;try{const staff=roleRows.find(r=>r.role_name==="staff"&&r.user_email===$("taskAssignee").value);if(!staff)throw new Error("முதலில் Staff கணக்கைத் தேர்வு செய்யுங்கள்.");const {error}=await supabase.from("staff_tasks").insert({title:$("taskTitle").value.trim(),description:$("taskDescription").value.trim()||null,assigned_to:staff.user_id,due_at:$("taskDue").value?new Date($("taskDue").value+"T23:59:00").toISOString():null});if(error)throw error;$("taskTitle").value="";$("taskDescription").value="";await refresh();msg("பணி ஒதுக்கப்பட்டது.")}catch(err){msg(err.message||"பணியை ஒதுக்க முடியவில்லை.",true)}finally{btn.disabled=false}});
 $("ownerLogout")?.addEventListener("click",logout);
}

// Staff workspace: staff can only see their assigned tasks and update task status.
const staffPage=$("staffTaskRows");
if(staffPage){
 const safe=value=>String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
 const msg=(value,error=false)=>{const el=$("staffMessage");if(el){el.textContent=value;el.style.background=error?"#fbeeee":"#edf5ef";el.style.color=error?"#9c3434":"#285b43"}};
 let currentUser;
 const load=async()=>{const {data,error}=await supabase.from("staff_tasks").select("id,title,description,status,due_at,created_at").order("created_at",{ascending:false});if(error)throw error;const tasks=data||[];$("staffTotal").textContent=tasks.length;$("staffOpen").textContent=tasks.filter(t=>["open","in_progress"].includes(t.status)).length;$("staffDone").textContent=tasks.filter(t=>t.status==="completed").length;$("staffTaskRows").innerHTML=tasks.length?tasks.map(t=>'<article class="crm-task"><div><h3>'+safe(t.title)+'</h3><p>'+safe(t.description||"")+'</p><small>கடைசி தேதி: '+safe(t.due_at?new Date(t.due_at).toLocaleDateString(zhLanguage==="ta"?"ta-IN":"en-IN"):"குறிப்பிடப்படவில்லை")+'</small></div><select data-task-id="'+safe(t.id)+'"><option value="open" '+(t.status==="open"?"selected":"")+'>தொடங்கவில்லை</option><option value="in_progress" '+(t.status==="in_progress"?"selected":"")+'>நடைபெறுகிறது</option><option value="completed" '+(t.status==="completed"?"selected":"")+'>நிறைவு</option></select></article>').join(""):'<p>உங்களுக்கு இன்னும் பணிகள் ஒதுக்கப்படவில்லை.</p>';msg("உங்கள் பணிகள் புதுப்பிக்கப்பட்டன.")};
 (async()=>{try{const {data:{user},error}=await supabase.auth.getUser();if(error)throw error;if(!user){location.href="login.html";return}const {data:roles,error:re}=await supabase.from("user_roles").select("role").eq("user_id",user.id);if(re)throw re;if(!(roles||[]).some(r=>r.role==="staff")){msg("Staff அனுமதி தேவை.",true);setTimeout(()=>location.href="dashboard.html",1500);return}currentUser=user;$("staffEmail").textContent=user.email||"Staff";await load()}catch(e){msg(e.message||"Staff Panel ஏற்றப்படவில்லை.",true)}})();
 $("refreshTasks")?.addEventListener("click",()=>load().catch(e=>msg(e.message,true)));
 $("staffTaskRows")?.addEventListener("change",async e=>{const s=e.target.closest("select[data-task-id]");if(!s||!currentUser)return;s.disabled=true;try{const {error}=await supabase.from("staff_tasks").update({status:s.value,updated_at:new Date().toISOString()}).eq("id",s.dataset.taskId).eq("assigned_to",currentUser.id);if(error)throw error;await load()}catch(err){msg(err.message||"நிலையைப் புதுப்பிக்க முடியவில்லை.",true)}finally{s.disabled=false}});
 $("staffLogout")?.addEventListener("click",logout);
}




// Member interest requests: sender and receiver actions are protected by Supabase RLS.
const interestsPage = $("interestsList");
if (interestsPage) {
  const safeInterest = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  const statusLabel = status => ({pending:"நிலுவையில்",accepted:"ஏற்றுக்கொள்ளப்பட்டது",rejected:"நிராகரிக்கப்பட்டது",withdrawn:"திரும்பப் பெறப்பட்டது"}[status] || status);
  const showInterestMessage = (message, isError=false) => { const el=$("interestsMessage"); if(el){el.textContent=message;el.classList.toggle("error",isError);} };
  (async()=>{
    try {
      const {data:{user},error:userError}=await supabase.auth.getUser();
      if(userError) throw userError;
      if(!user){location.href="login.html";return;}
      const {data:rows,error}=await supabase.from("interest_requests").select("id,sender_id,receiver_id,status,created_at").or("sender_id.eq."+user.id+",receiver_id.eq."+user.id).order("created_at",{ascending:false}).limit(100);
      if(error) throw error;
      const requests=rows||[];
      const otherIds=[...new Set(requests.map(r=>r.sender_id===user.id?r.receiver_id:r.sender_id))];
      let people={};
      if(otherIds.length){
        const {data:profiles,error:profileError}=await supabase.from("profiles").select("id,full_name,member_id,city,district").in("id",otherIds);
        if(profileError) throw profileError;
        people=Object.fromEntries((profiles||[]).map(p=>[p.id,p]));
      }
      const incoming=requests.filter(r=>r.receiver_id===user.id);
      const outgoing=requests.filter(r=>r.sender_id===user.id);
      const render=(items,kind)=>items.length?items.map(r=>{
        const other=people[kind==="received"?r.sender_id:r.receiver_id]||{};
        const name=safeInterest(other.full_name||"Zhagaram Member");
        const place=[other.city,other.district].filter(Boolean).map(safeInterest).join(", ");
        const actions=kind==="received"&&r.status==="pending"
          ? '<button class="btn btn-primary" data-interest-action="accepted" data-interest-id="'+r.id+'">ஏற்கவும்</button> <button class="btn btn-outline" data-interest-action="rejected" data-interest-id="'+r.id+'">நிராகரிக்கவும்</button>'
          : '<span class="interest-status">'+statusLabel(r.status)+'</span>';
        return '<article class="interest-row"><div><b>'+name+'</b><small>'+(other.member_id?safeInterest(other.member_id)+" · ":"")+place+'</small></div><div class="interest-actions">'+actions+'</div></article>';
      }).join(""):'<p class="interest-empty">இன்னும் பதிவுகள் இல்லை.</p>';
      $("receivedInterests").innerHTML=render(incoming,"received");
      $("sentInterests").innerHTML=render(outgoing,"sent");
      showInterestMessage("உங்கள் Interest விவரங்கள் புதுப்பிக்கப்பட்டன.");
    } catch(err){showInterestMessage(err.message||"Interest விவரங்களை ஏற்ற முடியவில்லை.",true);}
  })();
  interestsPage.addEventListener("click",async e=>{
    const btn=e.target.closest("button[data-interest-action]");
    if(!btn)return;
    btn.disabled=true;
    try{
      const {error}=await supabase.from("interest_requests").update({status:btn.dataset.interestAction,updated_at:new Date().toISOString()}).eq("id",btn.dataset.interestId).eq("status","pending");
      if(error)throw error;
      location.reload();
    }catch(err){showInterestMessage(err.message||"பதிலைச் சேமிக்க முடியவில்லை.",true);btn.disabled=false;}
  });
}



 
// Private member chat: only members with an accepted Interest can open and message each other.
const messagesPage = $("messagesPage");
if (messagesPage) {
  const safeChat = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  const chatNotice = (value, isError=false) => {
    const el=$("messagesNotice");
    if(el){el.textContent=value;el.classList.toggle("error",isError);}
  };
  let chatUser=null;
  let chatPartners={};
  let currentChatPartner=null;

  const loadChatMessages = async partnerId => {
    if(!chatUser || !partnerId) return;
    const {data:rows,error}=await supabase.from("messages")
      .select("id,sender_id,receiver_id,body,created_at")
      .or("and(sender_id.eq."+chatUser.id+",receiver_id.eq."+partnerId+"),and(sender_id.eq."+partnerId+",receiver_id.eq."+chatUser.id+")")
      .order("created_at",{ascending:true}).limit(200);
    if(error) throw error;
    const list=$("chatMessageList");
    list.innerHTML=await Promise.all((rows||[]).map(async row=>{
      const mine=row.sender_id===chatUser.id;
      const time=new Date(row.created_at).toLocaleString("ta-IN",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"short"});
      let media="";
      if(row.attachment_path){
        const {data:fileData,error:fileError}=await supabase.storage.from("chat-photos").createSignedUrl(row.attachment_path,3600);
        if(fileError) throw fileError;
        if(fileData?.signedUrl) media='<a class="chat-photo-link" href="'+safeChat(fileData.signedUrl)+'" target="_blank" rel="noopener noreferrer"><img class="chat-photo" src="'+safeChat(fileData.signedUrl)+'" alt="அனுப்பிய படம்" loading="lazy"></a>';
      }
      return '<article class="chat-bubble '+(mine?'mine':'theirs')+'">'+(row.body&&row.body!=="📷 படம்"?'<p>'+safeChat(row.body)+'</p>':'')+media+'<small>'+safeChat(time)+'</small></article>';
    }))).join("") || '<p class="chat-empty">வணக்கம் சொல்லி உரையாடலைத் தொடங்குங்கள்.</p>';
    list.scrollTop=list.scrollHeight;
  };

  const openChat = async partnerId => {
    const partner=chatPartners[partnerId];
    if(!partner) return;
    currentChatPartner=partnerId;
    $("chatTitle").textContent=partner.full_name||"Zhagaram Member";
    $("chatSubtitle").textContent=[partner.member_id,partner.city,partner.district].filter(Boolean).join(" · ");
    document.querySelectorAll("[data-chat-partner]").forEach(button=>{
      button.classList.toggle("active",button.dataset.chatPartner===partnerId);
    });
    $("chatComposer").hidden=false;
    $("chatMessageList").innerHTML='<p class="chat-empty">செய்திகள் ஏற்றப்படுகின்றன...</p>';
    await loadChatMessages(partnerId);
  };

  (async()=>{
    try{
      const {data:{user},error:userError}=await supabase.auth.getUser();
      if(userError) throw userError;
      if(!user){location.href="login.html";return;}
      chatUser=user;
      const {data:requests,error}=await supabase.from("interest_requests")
        .select("sender_id,receiver_id,created_at")
        .eq("status","accepted")
        .or("sender_id.eq."+user.id+",receiver_id.eq."+user.id)
        .order("created_at",{ascending:false});
      if(error) throw error;
      const partnerIds=[...new Set((requests||[]).map(row=>row.sender_id===user.id?row.receiver_id:row.sender_id))];
      if(!partnerIds.length){
        $("chatPartnerList").innerHTML='<p class="chat-empty">Chat தொடங்க, முதலில் ஒருவர் அனுப்பிய Interest-ஐ ஏற்றுக்கொள்ள வேண்டும்.</p>';
        $("chatTitle").textContent="தனிப்பட்ட Chat";
        $("chatSubtitle").textContent="ஏற்றுக்கொள்ளப்பட்ட Interest உள்ளவர்கள் மட்டும்";
        $("chatComposer").hidden=true;
        $("chatMessageList").innerHTML='<p class="chat-empty">Interest ஏற்றுக்கொள்ளப்பட்ட பிறகு இங்கே உரையாடலாம்.</p>';
        chatNotice("இன்னும் Chat செய்ய அனுமதிக்கப்பட்ட உறுப்பினர்கள் இல்லை.");
        return;
      }
      const {data:profiles,error:profileError}=await supabase.from("profiles")
        .select("id,full_name,member_id,city,district")
        .in("id",partnerIds);
      if(profileError) throw profileError;
      chatPartners=Object.fromEntries((profiles||[]).map(profile=>[profile.id,profile]));
      const available=partnerIds.filter(id=>chatPartners[id]);
      $("chatPartnerList").innerHTML=available.map(id=>{
        const person=chatPartners[id];
        return '<button class="chat-partner" type="button" data-chat-partner="'+safeChat(id)+'"><b>'+safeChat(person.full_name||"Zhagaram Member")+'</b><small>'+safeChat([person.member_id,person.city].filter(Boolean).join(" · "))+'</small></button>';
      }).join("") || '<p class="chat-empty">உறுப்பினர் விவரங்கள் கிடைக்கவில்லை.</p>';
      if(available.length) await openChat(available[0]);
      chatNotice("உங்கள் தனிப்பட்ட உரையாடல்கள் ஏற்றப்பட்டன.");
    }catch(error){
      chatNotice(error.message||"Chat-ஐ ஏற்ற முடியவில்லை.",true);
    }
  })();

  $("chatPartnerList").addEventListener("click",async event=>{
    const button=event.target.closest("button[data-chat-partner]");
    if(!button)return;
    try{await openChat(button.dataset.chatPartner);}
    catch(error){chatNotice(error.message||"செய்திகளை ஏற்ற முடியவில்லை.",true);}
  });

  const sendChatContent = async ({body,photoFile=null}) => {
    if(!currentChatPartner || (!body && !photoFile)) return;
    if(body.length>2000) throw new Error("ஒரு செய்தி அதிகபட்சம் 2000 எழுத்துகள் இருக்கலாம்.");
    let attachmentPath=null;
    if(photoFile){
      const allowed=["image/jpeg","image/png","image/webp"];
      if(!allowed.includes(photoFile.type)) throw new Error("JPG, PNG அல்லது WEBP படங்களை மட்டும் அனுப்பலாம்.");
      if(photoFile.size>5*1024*1024) throw new Error("படத்தின் அளவு 5 MB-க்கு குறைவாக இருக்க வேண்டும்.");
      const extension=photoFile.type==="image/jpeg"?"jpg":photoFile.type==="image/png"?"png":"webp";
      attachmentPath=chatUser.id+"/"+currentChatPartner+"/"+crypto.randomUUID()+"."+extension;
      const {error:uploadError}=await supabase.storage.from("chat-photos").upload(attachmentPath,photoFile,{contentType:photoFile.type,upsert:false});
      if(uploadError) throw uploadError;
    }
    const {error}=await supabase.from("messages").insert({
      sender_id:chatUser.id,
      receiver_id:currentChatPartner,
      body:body || "📷 படம்",
      attachment_path:attachmentPath,
      attachment_mime_type:photoFile?.type || null
    });
    if(error){
      if(attachmentPath) await supabase.storage.from("chat-photos").remove([attachmentPath]);
      throw error;
    }
    await loadChatMessages(currentChatPartner);
  };

  $("chatComposer").addEventListener("submit",async event=>{
    event.preventDefault();
    const button=$("sendChatButton");
    const attachButton=$("attachChatPhotoButton");
    const field=$("chatMessageInput");
    const body=field.value.trim();
    if(!body)return;
    button.disabled=true;attachButton.disabled=true;
    try{
      await sendChatContent({body});
      field.value="";
      chatNotice("செய்தி அனுப்பப்பட்டது.");
    }catch(error){chatNotice(error.message||"செய்தியை அனுப்ப முடியவில்லை.",true);}
    finally{button.disabled=false;attachButton.disabled=false;}
  });

  $("attachChatPhotoButton").addEventListener("click",()=> $("chatPhotoInput").click());
  $("chatPhotoInput").addEventListener("change",async event=>{
    const file=event.target.files?.[0];
    if(!file)return;
    const button=$("attachChatPhotoButton");
    const sendButton=$("sendChatButton");
    button.disabled=true;sendButton.disabled=true;
    try{
      await sendChatContent({body:"",photoFile:file});
      chatNotice("படம் வெற்றிகரமாக அனுப்பப்பட்டது.");
    }catch(error){chatNotice(error.message||"படத்தை அனுப்ப முடியவில்லை.",true);}
    finally{button.disabled=false;sendButton.disabled=false;event.target.value="";}
  });
}

// Member notifications: RLS restricts reads and updates to the signed-in member.
const notificationsPage=$("notificationsList");
if(notificationsPage){
 const safeNotification=value=>String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
 const message=(value,isError=false)=>{const el=$("notificationsMessage");if(el){el.textContent=value;el.classList.toggle("error",isError);}};
 const loadNotifications=async()=>{
  const {data:{user},error:userError}=await supabase.auth.getUser();
  if(userError)throw userError;
  if(!user){location.href="login.html";return;}
  const {data:rows,error}=await supabase.from("notifications").select("id,notification_type,title,body,related_id,is_read,created_at").eq("user_id",user.id).order("created_at",{ascending:false}).limit(100);
  if(error)throw error;
  const items=rows||[];
  const unread=items.filter(item=>!item.is_read).length;
  $("notificationUnreadCount").textContent=unread+" படிக்காத அறிவிப்புகள்";
  $("notificationRows").innerHTML=items.length?items.map(item=>{
   const date=new Date(item.created_at).toLocaleString("ta-IN");
   return '<article class="notification-row '+(item.is_read?'read':'unread')+'" data-notification-row="'+item.id+'"><div class="notification-copy"><b>'+safeNotification(item.title)+'</b><p>'+safeNotification(item.body||"")+'</p><small>'+safeNotification(date)+'</small></div><div class="notification-actions">'+(item.notification_type==="message_received"?'<a class="btn btn-outline" href="messages.html">செய்தியைப் பார்க்க</a> ':item.related_id?'<a class="btn btn-outline" href="interests.html">Interest பார்க்க</a> ':'')+(item.is_read?'<span class="notification-read-label">படித்தது</span>':'<button class="btn btn-primary" type="button" data-mark-notification="'+item.id+'">படித்ததாகக் குறி</button>')+'</div></article>';
  }).join(""):'<p class="notification-empty">இன்னும் அறிவிப்புகள் இல்லை.</p>';
  $("markAllNotificationsRead").hidden=unread===0;
  message("உங்கள் அறிவிப்புகள் புதுப்பிக்கப்பட்டன.");
 };
 loadNotifications().catch(error=>message(error.message||"அறிவிப்புகளை ஏற்ற முடியவில்லை.",true));
 notificationsPage.addEventListener("click",async event=>{
  const button=event.target.closest("button[data-mark-notification]");
  if(!button)return;
  button.disabled=true;
  try{
   const {data:{user},error:userError}=await supabase.auth.getUser();
   if(userError)throw userError;
   if(!user)throw new Error("மீண்டும் உள்நுழையுங்கள்.");
   const {error}=await supabase.from("notifications").update({is_read:true}).eq("id",button.dataset.markNotification).eq("user_id",user.id);
   if(error)throw error;
   await loadNotifications();
  }catch(error){message(error.message||"புதுப்பிக்க முடியவில்லை.",true);button.disabled=false;}
 });
 $("markAllNotificationsRead").addEventListener("click",async()=>{
  const button=$("markAllNotificationsRead");button.disabled=true;
  try{
   const {data:{user},error:userError}=await supabase.auth.getUser();
   if(userError)throw userError;
   if(!user)throw new Error("மீண்டும் உள்நுழையுங்கள்.");
   const {error}=await supabase.from("notifications").update({is_read:true}).eq("user_id",user.id).eq("is_read",false);
   if(error)throw error;
   await loadNotifications();
  }catch(error){message(error.message||"அனைத்தையும் படித்ததாகக் குறிக்க முடியவில்லை.",true);}
  finally{button.disabled=false;}
 });
}

// Public member detail view. Only approved public fields are queried; private contacts are never selected.
const detailPage = $("profileDetail");
if (detailPage) {
  const safeDetail = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  const setDetail = (label, value) => '<div class="detail-item"><span>'+label+'</span><b>'+safeDetail(value || "குறிப்பிடப்படவில்லை")+'</b></div>';
  (async () => {
    const message = $("profileDetailMessage");
    try {
      const {data:{user},error:userError} = await supabase.auth.getUser();
      if (userError) throw userError;
      if (!user) { message.innerHTML = 'Profile பார்க்க <a href="login.html">உள்நுழையுங்கள்</a>.'; return; }
      const id = new URLSearchParams(location.search).get("id");
      if (!id) throw new Error("Profile அடையாளம் கிடைக்கவில்லை.");
      const {data:p,error} = await supabase.from("profiles")
        .select("member_id,full_name,date_of_birth,gender,religion,community,sub_community,education,occupation,height_cm,marital_status,city,district,state,profile_status,photo_path,father_name,mother_name,siblings_details,family_occupation")
        .eq("id",id).eq("profile_status","active").maybeSingle();
      if (error) throw error;
      if (!p) throw new Error("இந்த Profile கிடைக்கவில்லை அல்லது தற்போது கிடைக்கவில்லை.");

      const interestButton=$("sendInterestButton");
      if(user.id!==id){
        interestButton.hidden=false;
        const {data:existing,error:existingError}=await supabase.from("interest_requests").select("id,sender_id,receiver_id,status").or("and(sender_id.eq."+user.id+",receiver_id.eq."+id+"),and(sender_id.eq."+id+",receiver_id.eq."+user.id+")").limit(1);
        if(existingError)throw existingError;
        const prior=(existing||[])[0];
        if(prior){
          interestButton.disabled=true;
          interestButton.textContent=prior.sender_id===user.id ? "Interest அனுப்பப்பட்டது" : "உங்களுக்கு Interest வந்துள்ளது";
          $("interestActionMessage").textContent=prior.status==="pending"?"நிலை: நிலுவையில்":prior.status==="accepted"?"Interest ஏற்கப்பட்டது":"முந்தைய Interest பதிவு உள்ளது";
        }
        interestButton.addEventListener("click",async()=>{
          interestButton.disabled=true;
          $("interestActionMessage").textContent="அனுப்பப்படுகிறது...";
          try{
            const {error:sendError}=await supabase.from("interest_requests").insert({sender_id:user.id,receiver_id:id,status:"pending"});
            if(sendError)throw sendError;
            interestButton.textContent="Interest அனுப்பப்பட்டது";
            $("interestActionMessage").textContent="உங்கள் Interest வெற்றிகரமாக அனுப்பப்பட்டது.";
          }catch(sendError){
            $("interestActionMessage").textContent=sendError.code==="23505"?"ஏற்கனவே Interest பதிவு உள்ளது.":(sendError.message||"அனுப்ப முடியவில்லை.");
            interestButton.disabled=false;
          }
        });
      }

      $("profileDetailContent").hidden = false;
      $("detailName").textContent = p.full_name || "Zhagaram Member";
      $("detailMemberId").textContent = p.member_id || "ZHAGARAM MEMBER";
      if(p.photo_path){const {data:photoData}=await supabase.storage.from("profile-photos").createSignedUrl(p.photo_path,3600);if(photoData?.signedUrl){$("detailPhoto").src=photoData.signedUrl;$("detailPhoto").hidden=false;$("detailAvatar").hidden=true;}}
      const age = profileAge(p.date_of_birth);
      $("detailSummary").textContent = [age !== null ? age+" வயது" : null, p.gender === "female" ? "மணமகள்" : p.gender === "male" ? "மணமகன்" : null, [p.city,p.district,p.state].filter(Boolean).join(", ")].filter(Boolean).join(" · ");
      $("detailGrid").innerHTML =
        setDetail("மதம்",p.religion)+setDetail("சமூகம்",p.community)+setDetail("உள் சமூகம்",p.sub_community)+
        setDetail("கல்வி",p.education)+setDetail("வேலை",p.occupation)+setDetail("உயரம்",p.height_cm ? p.height_cm+" செ.மீ." : null)+
        setDetail("திருமண நிலை",p.marital_status)+setDetail("நகரம்",p.city)+setDetail("மாவட்டம்",p.district)+setDetail("மாநிலம்",p.state)+setDetail("தந்தை பெயர்",p.father_name)+setDetail("தாய் பெயர்",p.mother_name)+setDetail("உடன்பிறப்புகள்",p.siblings_details)+setDetail("குடும்பத் தொழில்",p.family_occupation);
      message.hidden = true;
    } catch (error) {
      message.textContent = error.message || "Profile விவரங்களை ஏற்ற முடியவில்லை.";
    }
  })();
}
