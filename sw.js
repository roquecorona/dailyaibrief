// Minimal service worker for The AI Brief.
// Its only job is to make Chrome recognize this site as an installable
// web app (so Android uses the manifest icon instead of a page-screenshot
// shortcut). It does NOT cache anything — every request always goes to
// the network, so today's brief is never served stale.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
