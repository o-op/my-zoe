self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/style.css',  // Your main CSS file
        '/cursor.png', // Custom cursor image
        '/menu.js',    // Your menu-related JavaScript
        'assets/cursors/arrow.png', // Preloaded cursor images
        'assets/cursors/text.png',
        'assets/cursors/pointer.png',
        'assets/media/Editorial_002.webp', // Preloaded media
        'assets/media/Editorial_005.webp',
        // Add any other key assets to cache
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
