const CACHE_NAME = 'cuddalore-connect-v1';
const ASSETS = [
  'index.html',
  'places.html',
  'contact.html',
  'emergency.html',
  'electrician.html',
  'Plumber.html',
  'taxi.html',
  'web.html',
  'icon-192x192.png',
  'icon-512x512.png'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetching Assets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
