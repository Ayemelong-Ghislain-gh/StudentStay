const CACHE_NAME = 'studentstay-v1';
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
  '/css/style.css',
  '/js/firebase-config.js',
  'https://cdn.tailwindcss.com',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});