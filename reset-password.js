import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
const supabase=createClient("https://gpyufzuuvupkvyrvuixw.supabase.co","sb_publishable_JLyb6hy1OcMacRYzPK2gWw_aPMNbcJW");
const form=document.getElementById("resetPasswordForm"),message=document.getElementById("resetMessage"),button=form.querySelector("button");
let recoverySession=false;
button.disabled=true;
message.textContent="Verifying your password-reset link...";
async function checkRecoverySession(){
  const {data,error}=await supabase.auth.getSession();
  if(error)throw error;
  recoverySession=!!data.session;
  if(recoverySession){button.disabled=false;message.textContent="Link verified. Enter your new password below.";}
  else {button.disabled=true;message.textContent="This password-reset link is invalid or expired. Please request a new link from Login.";}
}
supabase.auth.onAuthStateChange((event,session)=>{
  if(event==="PASSWORD_RECOVERY"||session){recoverySession=true;button.disabled=false;message.textContent="Link verified. Enter your new password below.";}
});
checkRecoverySession().catch(error=>{message.textContent=error.message||"Could not verify the reset link. Please request a new one.";});
form.addEventListener("submit",async event=>{
  event.preventDefault();
  const password=document.getElementById("newPassword").value,confirm=document.getElementById("confirmPassword").value;
  if(!recoverySession){message.textContent="Please open a valid password-reset link from your email first.";return;}
  if(password.length<8){message.textContent="Password must be at least 8 characters.";return;}
  if(password!==confirm){message.textContent="Passwords do not match.";return;}
  button.disabled=true;message.textContent="Updating password...";
  try{const {error}=await supabase.auth.updateUser({password});if(error)throw error;message.textContent="Password updated successfully. You can now log in.";form.reset();recoverySession=false;await supabase.auth.signOut();}
  catch(error){message.textContent=error.message||"Could not update password.";}
  finally{button.disabled=!recoverySession;}
});
