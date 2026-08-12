const CACHE_NAME = 'room-finder-v3';
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
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
