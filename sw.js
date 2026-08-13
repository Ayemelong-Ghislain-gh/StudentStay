const CACHE_NAME = 'room-finder-v4';
const urlsToCache = [
  '/',
  '/index.html',
  '/listings.html',
  '/details.html',
  '/login.html',
  '/dashboard.html',
  '/admin.html',
  '/post-room.html',
  '/edit-room.html',
  '/js/supabase-config.js',
  '/js/languages.js',
  '/js/shared.js',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'
];

self.addEventListener('install', event => {
  // Force this new worker to become active immediately instead of sitting
  // "waiting" until every open tab for the site is closed. Without this,
  // uploading a new sw.js (and even a hard refresh) can silently keep
  // serving whatever HTML/JS was cached by the OLD worker indefinitely.
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  // Clean up old cache versions so users don't get stuck on stale Firebase assets.
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    ).then(() => self.clients.claim()) // take control of already-open tabs right away
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
