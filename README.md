# Zhagaram Matrimony

Tamil + English matrimonial web app built with HTML, CSS, JavaScript, Supabase Auth, PostgreSQL and Supabase Storage.

## Live website
https://zhagaramhub.github.io/Zhagaram-matrimony-/

## Implemented features
- Email registration, email/password login and password reset
- Member profile creation and editing, family details and private profile-photo storage
- Legal minimum-age validation and adult-only member discovery (Groom 21+, Bride 18+)
- Member IDs and profile approval / rejection / suspension workflow
- Admin verification badges with verification history
- Profile search and Smart Match recommendations based on saved preferences
- Send / receive / accept / reject interests
- Private member chat with photo attachments after an accepted interest
- In-app notifications and live Supabase Realtime updates
- Member favourites and profile reporting
- Admin report review and reporter status notifications
- Owner tools for admin/staff role assignment and staff task management
- Staff task status updates
- Responsive layout and installable PWA shell

## Supabase configuration
The browser app uses the Supabase project URL and publishable key in app.js and reset-password.js. A publishable key is intended for browser use when Row Level Security (RLS) is correctly configured.

Never put a Supabase service_role key, secret API key, VAPID private key, webhook secret or other server secret in frontend files or GitHub. Server secrets belong only in protected Supabase Edge Function environment variables.

The database uses RLS policies for member-owned records, role-protected admin/owner operations, private profile details, match preferences, reports, messages, notifications and push-subscription records. Profile and chat photo buckets are private and have access policies.

## Deployment
1. Keep the repository published through GitHub Pages.
2. In Supabase Authentication, configure the production Site URL and allowed redirect URLs for the GitHub Pages project path, including profile.html (email confirmation) and reset-password.html.
3. Enable the authentication methods that the site should offer. Mobile OTP requires a working phone provider and SMS configuration.
4. Keep the database migrations and Storage policies applied to the linked Supabase project.
5. After changing the app shell, increment the cache name in sw.js so installed clients receive the new assets.

## Not yet enabled
- Android/browser push delivery is paused. The subscription table and Edge Function exist, but the required protected webhook secret and database webhook are not configured.
- Membership plans are informational; payment gateway checkout and subscription billing are not connected.
- Mobile OTP is displayed in the login UI but requires the Supabase phone provider and SMS service to be configured.

## Final testing
Before public launch, test with separate member, admin, owner and staff accounts. Verify registration and email confirmation, password reset, profile privacy, photo permissions, profile review, interests, chat access, notification delivery, reports, Smart Matches, role restrictions and mobile layouts. Use realistic adult test profiles; do not use underage or future birth dates.
