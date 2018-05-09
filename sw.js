/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/bed-factory.jpg",
    "revision": "c4c589ce83314908f8875bb023d62049"
  },
  {
    "url": "images/cover-page.svg",
    "revision": "b45061b2292717788b2b0ac8a16b4d22"
  },
  {
    "url": "images/cover.png",
    "revision": "6ccc12a85c023fdab3d63ccab8df8fd4"
  },
  {
    "url": "images/factory_1.svg",
    "revision": "2f2194f5476aa637fcc300178f01c1cd"
  },
  {
    "url": "images/factory_2.svg",
    "revision": "12459d5e14820ce98edf9888d22ece24"
  },
  {
    "url": "images/favicon.png",
    "revision": "0cb1fd65532107e9741f9a508b5f5d58"
  },
  {
    "url": "images/logo-white.svg",
    "revision": "e08eca12aa37123579e03bf269f4aefc"
  },
  {
    "url": "images/logo.svg",
    "revision": "171c4ce5ea89726012a7f01385f9b3e1"
  },
  {
    "url": "images/machine.jpg",
    "revision": "98ba7d04058caa5acc7b644c1ad75069"
  },
  {
    "url": "images/manifest/any.svg",
    "revision": "4fe448f4d8a29acd6f12068e54bc6ae6"
  },
  {
    "url": "images/manifest/icon-128x128.png",
    "revision": "52bfd260c0147b59756ce5674e76ce59"
  },
  {
    "url": "images/manifest/icon-144x144.png",
    "revision": "712856acbcf0810ef61deb83972c1b9d"
  },
  {
    "url": "images/manifest/icon-152x152.png",
    "revision": "bc82601a171216b37810dc013c326f25"
  },
  {
    "url": "images/manifest/icon-192x192.png",
    "revision": "92beffe91528c472eb40ecac611f554b"
  },
  {
    "url": "images/manifest/icon-256x256.png",
    "revision": "eee61dacca12bc852839d60cb5e10ab4"
  },
  {
    "url": "images/manifest/icon-512x512.png",
    "revision": "7fb4d741b9b811f061f754e80b35c7c0"
  },
  {
    "url": "images/more-from-1.jpg",
    "revision": "0e6f5aaca13d82c91cbab0e14e2856b8"
  },
  {
    "url": "images/more-from-2.jpg",
    "revision": "7a09fe94bf708ba338ef4d77c56c740d"
  },
  {
    "url": "images/more-from-3.jpg",
    "revision": "2e66420b786d69dc72e889467c56bd9a"
  },
  {
    "url": "images/sensor.jpg",
    "revision": "1e17d247c6419c4153b5fcf2ce6ec5f8"
  },
  {
    "url": "images/use-case-2.jpg",
    "revision": "255cba1a9aaa6a1bb5d807c7db191b73"
  },
  {
    "url": "index.html",
    "revision": "328bdd2aa581e9ad750fa74db85d4f9b"
  },
  {
    "url": "manifest.json",
    "revision": "fa57711fdf0ee6eef3e3ced063b63083"
  },
  {
    "url": "package.json",
    "revision": "b15854f01a3bb2eafc4f0e5c1bf0afe4"
  },
  {
    "url": "README.md",
    "revision": "4813042faf953f19e6e938179ca4ae6f"
  },
  {
    "url": "server.js",
    "revision": "5123c00d2bce2f3f21ca8b0ac3ff4ea7"
  },
  {
    "url": "styles.css",
    "revision": "6686c01333ee8965f39e37afba655f0e"
  },
  {
    "url": "workbox-config.js",
    "revision": "813b3cc7b0021f267deedf94fc75a028"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
