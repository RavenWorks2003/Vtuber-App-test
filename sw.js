// Offline cache: after the first visit the app, tracking model and fox load from the phone.
const CACHE = 'fuchs-vtuber-v2';
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const fresh = /\/(index\.html)?$|\.js$|\.json$|\.webmanifest$/.test(new URL(req.url).pathname);
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const hit = await c.match(req);
    if (hit && !fresh) return hit;
    try { const res = await fetch(req); if (res.ok) c.put(req, res.clone()); return res; }
    catch (err) { if (hit) return hit; throw err; }
  }));
});
