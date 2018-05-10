importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

if (workbox) {
  console.log(`Workbox is loaded 🎉`);
} else {
  console.log(`Workbox didn't load 😬`);
}

workbox.router.registerRoute('https://fonts.gstatic.com/(.*)',
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    cacheExpiration: {
      maxEntries: 30
    },
    cacheableResponse: {
      statuses: [0, 200]
    }
  })
);

workbox.routing.registerRoute(
  new RegExp(/.*\.(?:woff2)$/),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'font-cache',
  })
)

workbox.router.registerRoute(/.*\.(?:png|jpeg|jpg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images-cache'
  })
);

workbox.router.registerRoute(/.*\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'static-resources'
  })
);

workbox.router.registerRoute(/.*(?:gstatic)\.com.*$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'gstatic-cache'
  })
);