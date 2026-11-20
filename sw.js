// Offline cache: after the first visit the app, tracking model and fox load from the phone.
// Files are requested with ?v=<app version>, so a new version never mixes with old files.
const CACHE = 'fuchs-vtuber-v4';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (e) => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  // versioned files never change: cache first. The page itself: always ask the server (no 10-minute browser cache).
  const versioned = url.searchParams.has('v');
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const hit = await c.match(req);
    if (hit && versioned) return hit;
    try { const res = await fetch(req, { cache: 'no-cache' }); if (res.ok) c.put(req, res.clone()); return res; }
    catch (err) { if (hit) return hit; throw err; }
  }));
});
