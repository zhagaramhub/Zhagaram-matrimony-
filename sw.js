const CACHE_NAME = "zhagaram-shell-v20";
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
  "./admin.html",
  "./owner.html",
  "./staff.html",
  "./crm.css",
  "./admin.css",
  "./search.html",
  "./view-profile.html",
  "./membership.html",
  "./interests.html",
  "./notifications.html"
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
