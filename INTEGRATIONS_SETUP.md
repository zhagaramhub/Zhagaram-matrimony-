# Zhagaram Matrimony — External Integrations

This project uses Supabase Auth, Supabase Edge Functions, and GitHub Pages. Never place provider secrets in GitHub files or browser JavaScript.

## Android web push notifications

The push flow is implemented:
- The dashboard button subscribes the signed-in member's browser.
- The owner initializes the VAPID key pair on the first click. The private key is stored in the private database configuration and is never returned to the browser.
- A database trigger queues each new notification through `pg_net` to the `send-push-notification` Edge Function.
- Expired push subscriptions are removed when the push provider returns 404/410.

One-time owner action:
1. Sign in with the account that has the `owner` role.
2. Open the member dashboard and click **மொபைல் Notification-களை இயக்கவும்**.
3. Allow notifications in Chrome. On Android, install the site as a PWA if you want an app-like home-screen experience.
4. Each other member enables notifications from their own dashboard.

## SMS OTP — Fast2SMS Smart OTP

The Supabase Edge Function `send-sms-otp` is deployed. It verifies the Supabase Auth Hook signature and sends Supabase's generated OTP through Fast2SMS Smart OTP. The OTP is not generated or verified in browser code.

Fast2SMS is a web service; **no Android app download is required**.

1. Create a Fast2SMS account at https://www.fast2sms.com/.
2. Complete the provider's KYC and Indian DLT requirements. Register your business/entity, sender header, and OTP message template with a telecom DLT portal; add the approved template in Fast2SMS DLT Manager.
3. In Fast2SMS Smart OTP, create an SMS OTP template and copy its OTP ID. Copy the API key from the Fast2SMS account settings.
4. In Supabase Project Settings → Edge Functions → Secrets, add:
   - `FAST2SMS_API_KEY`
   - `FAST2SMS_OTP_ID`
   - `SEND_SMS_HOOK_SECRETS` (the exact signing secret generated for the Supabase Send SMS Auth Hook)
5. In Supabase Authentication → Hooks, add a **Send SMS** HTTP Hook pointing to:
   `https://gpyufzuuvupkvyrvuixw.supabase.co/functions/v1/send-sms-otp`
   Generate a Standard Webhooks secret and store the same value in `SEND_SMS_HOOK_SECRETS` as `v1,whsec_...`.
6. In Authentication → Sign In / Providers, enable Phone authentication and keep SMS auto-confirm disabled.
7. Test with a phone number you control. Never test by sending OTPs to people without their consent.

Fast2SMS Smart OTP API reference: https://www.fast2sms.com/help/fast2sms-otp-api-guide/

## Premium payments — pending merchant decision

No payment gateway is active and no real payment is accepted yet. Do not enable paid membership until the merchant account is approved, the plan prices are finalized, and server-side payment verification plus signed webhooks are tested.

Current shortlist:
- Cashfree Payments: standard domestic platform fee shown as 1.95% plus applicable taxes; a limited-time new-merchant offer may apply subject to eligibility and terms. https://www.cashfree.com/payment-gateway-charges/
- Razorpay: standard pricing shown as 2% plus GST, with no setup or annual maintenance fee on the standard plan. https://razorpay.com/pricing/

For either provider, create orders on the server, verify payment status/signatures server-side, process signed webhooks idempotently, and activate Premium only after confirmed successful payment.

## Supabase Auth redirect allow-list

In Authentication → URL Configuration:
- Site URL: https://zhagaramhub.github.io/Zhagaram-matrimony-/
- Redirect URL: https://zhagaramhub.github.io/Zhagaram-matrimony-/profile.html
- Redirect URL: https://zhagaramhub.github.io/Zhagaram-matrimony-/reset-password.html
