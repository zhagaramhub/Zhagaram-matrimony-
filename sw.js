const CACHE_NAME = "zhagaram-shell-v40";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./icon.svg",
  "./register.html",
  "./login.html",
  "./profile.html",
  "./dashboard.html",
  "./dashboard-premium.css",
  "./dashboard-ui.css",
  "./admin.html",
  "./owner.html",
  "./staff.html",
  "./crm.css",
  "./admin.css",
  "./search.html",
  "./view-profile.html",
  "./membership.html",
  "./interests.html",
  "./notifications.html",
  "./my-reports.html",
  "./my-favourites.html",
  "./match-preferences.html",
  "./messages.html",
  "./reset-password.html",
  "./reset-password.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(APP_SHELL).catch(() => cache.add("./index.html"))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("push", (event) => {
  let data = { title: "Zhagaram Matrimony", body: "உங்களுக்கு புதிய அறிவிப்பு வந்துள்ளது.", url: "./notifications.html" };
  if (event.data) {
    try { data = { ...data, ...event.data.json() }; }
    catch { data.body = event.data.text() || data.body; }
  }
  event.waitUntil(self.registration.showNotification(data.title || "Zhagaram Matrimony", {
    body: data.body || "",
    icon: "./icon.svg",
    badge: "./icon.svg",
    data: { url: data.url || "./notifications.html" },
    tag: data.notificationId ? "zhagaram-" + data.notificationId : "zhagaram-notification"
  }));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = new URL(event.notification.data?.url || "./notifications.html", self.location.origin).href;
  event.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((windows) => {
    const existing = windows.find((client) => client.url.startsWith(self.location.origin));
    if (existing) {
      existing.navigate(target);
      return existing.focus();
    }
    return self.clients.openWindow(target);
  }));
});

// Always check the network first so published profile/search fixes are not hidden
// behind an older cached page. Keep a fresh copy for offline use.
self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      }
      return response;
    }).catch(() => caches.match(request).then((cached) => cached || caches.match("./index.html")))
  );
});
