const CACHE_NAME = 'tpn-calc-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './IMG_3277.png'
];

// Install event: saves the files to the browser cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch event: serves files from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
