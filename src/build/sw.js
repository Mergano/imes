importScripts('workbox-sw.prod.v2.1.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "images/android-logo-white.png",
    "revision": "80d662be4b5f052a5a385ea12a573ba9"
  },
  {
    "url": "images/android-logo.png",
    "revision": "62e4212bc55dab1b45fdcdd99a587ec2"
  },
  {
    "url": "images/andy.png",
    "revision": "8efc5f1c42521812708006479bec3b8c"
  },
  {
    "url": "images/auto-on.jpg",
    "revision": "455e5b6bc06c18bd8025cbecab9e7f03"
  },
  {
    "url": "images/devices.jpg",
    "revision": "dbc3adf2567cb1de28d0fbd2eca2c6b7"
  },
  {
    "url": "images/favicon.png",
    "revision": "3d9a3d5fe4b4ac175fbac9efd6b3803a"
  },
  {
    "url": "images/logo-white.png",
    "revision": "f9f67f2419ec8aba056df5724289d39e"
  },
  {
    "url": "images/logo-white.svg",
    "revision": "7a1e1b53cada929e2a2cfc592b2c7877"
  },
  {
    "url": "images/logo.png",
    "revision": "a0ccee80e36f1869b869a7acbde5d272"
  },
  {
    "url": "images/logo.svg",
    "revision": "a66b8f8544b5ac47d996293683c9eea3"
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
    "url": "images/more-from-1.png",
    "revision": "8aed28f6aed566229eca8f3f40b2112b"
  },
  {
    "url": "images/more-from-2.png",
    "revision": "8ef740c9e0128d12d8bd0c96b7ea392a"
  },
  {
    "url": "images/more-from-3.png",
    "revision": "9cec1e6216ead814fff73620873984dc"
  },
  {
    "url": "images/more-from-4.png",
    "revision": "704e4bd4b1bd77671c5e6b6b3494b9aa"
  },
  {
    "url": "images/nexus6-on.jpg",
    "revision": "4ea942ea2f7bb4cae1de8c156c330fa6"
  },
  {
    "url": "images/nexus9-on.jpg",
    "revision": "7d9cc3f5e6f05d514b9709842b06699d"
  },
  {
    "url": "images/slide02.png",
    "revision": "6ccc12a85c023fdab3d63ccab8df8fd4"
  },
  {
    "url": "images/tv-on.jpg",
    "revision": "4e9e5b5a02a0e65657e6808c75185465"
  },
  {
    "url": "images/wear-black-on.png",
    "revision": "72f324957c893cc3da160a4b304fc911"
  },
  {
    "url": "images/wear-silver-on.png",
    "revision": "091855bb65daa56d363f498cb805f3b5"
  },
  {
    "url": "images/wear.png",
    "revision": "307a06316c5af600fe807278c49861d6"
  },
  {
    "url": "index.html",
    "revision": "c7d64fab75bedbe2cc1396766bc7180c"
  },
  {
    "url": "styles.css",
    "revision": "c295d58cbb83e96c765ccceb390d75b7"
  },
  {
    "url": "sw.js",
    "revision": "e91097888de1d817c13f22ea4e55b32d"
  },
  {
    "url": "workbox-sw.dev.v2.0.0.js",
    "revision": "f36962480cadf645eede3627f3db16f2"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
