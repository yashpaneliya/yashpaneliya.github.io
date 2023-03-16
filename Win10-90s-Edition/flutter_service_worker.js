'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/addNetwork.png": "46865a8913c740ed5116607c60342e1f",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/back.png": "59ea85aa33e4fe8397a9730b1a242de8",
"assets/backk.png": "8a7eb31fde034d76d19d2ea2fed2c625",
"assets/bin.png": "64364b1eee3ebc66eaacf4b952928ffb",
"assets/calc.png": "3329018ccc40eee2694dde67e31c299e",
"assets/cdrive.png": "e8f8aa57f790bc15c227bf19fceb6814",
"assets/clippy.png": "9ed2837f0a3564d636e56fed24022a2b",
"assets/clock.png": "9a866230dfd8636fac4dce46fc41aca3",
"assets/desktopfolder.png": "f299c89f2e3e18c89014513557d63b87",
"assets/desktoppp.png": "2d1d8eb503ebb74fb897127e8a982e44",
"assets/docfolder.png": "9869a56ce4c02e63fb9865434cb607f3",
"assets/document.png": "550d3a47de32d93709f5b8b3dde2d2bd",
"assets/dos.png": "efec503ccc4e5a940671e837d54d9715",
"assets/down.png": "e2a6ac0824580c389fe8d22f7cc28cf1",
"assets/download.png": "6865d792ded526dc64ecbdb6e9f2c634",
"assets/downloadfolder.png": "798f13e1f7a38fbf9e51a29d32737632",
"assets/drive.png": "f1b0d0ed37f661b985f25031ebbf9412",
"assets/edge.png": "0a0949a0bfe4319294d19b4ad97d2915",
"assets/fileexp.png": "cd0c1260ba6ba8be52f096d449cdf2ae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/i1.png": "c8ea97f8709438f8a35bd179a9d0c77b",
"assets/i2.png": "5cd794d891205ad56853880742628654",
"assets/i3.png": "f7f8dc4f9acf347f4c5018794c40e708",
"assets/i4.png": "0c7733bd6bd7faf0899e8fc59702e6fb",
"assets/i5.png": "568081dedc710a28b16bc6942c2f9389",
"assets/i6.png": "92f763cdf20b328f00ef5695601c0322",
"assets/image.png": "fd17302c07af31fb2fc7bfd7750b7d86",
"assets/logo.png": "ae6671c3cba161855324e9a35d1183a8",
"assets/manage.png": "1593084ba3e4a713368a2bca432aa374",
"assets/mapNetwork.png": "9bcce079e1866e2cc6dd93ae21fffb75",
"assets/mediaServer.png": "7c3024181352dfc6128ccf6c63bef9d9",
"assets/mine.png": "acd5141c83faa7e36a6bc7a34cec64cf",
"assets/music.png": "0a1f9f5a6a932cc8af1f17be0c7175bd",
"assets/mycomp.png": "b8e5723076a74ca155c3f4981d7c027b",
"assets/mypc.png": "fb36c20b3adcd8c9e6c58f5e3f639ddc",
"assets/network.png": "212227a24f96f79a710293427c2d11cb",
"assets/newFolder.png": "6f01e5480d7739a773a6205d386b7ef5",
"assets/next.png": "405866849cb53245870edf93ec46a387",
"assets/nextAnotherr.png": "0cdffe094e88bc7d33638a91ab1290ed",
"assets/note.png": "fc05456e30f21572163f739815c3bfad",
"assets/NOTICES": "6de22813d79e02e5b20b1ba38cc1c84a",
"assets/open.png": "805091f30ac06da0c9f7dacfa9fadfcd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/paint.png": "7f2f7bfc66ad4c4f080f5c19068aee13",
"assets/properties.png": "53bb141b2e10c81271acc6a27674b42f",
"assets/property.png": "f9b2477f03f7dda9132cfa284fcaa349",
"assets/QuickkAccess.png": "8518540dfb91e481147081f637d0353c",
"assets/reload.png": "9261e78bb9f729a6bec0b96b547a262f",
"assets/rename.png": "b106f8a73fb08812814dfba9e41e17ee",
"assets/search.png": "21cda7303498be873128c37a5abae4db",
"assets/settings.png": "802cb013271f6fc97a8c6068a76d85a7",
"assets/systemproperty.png": "b8e5723076a74ca155c3f4981d7c027b",
"assets/unistall.png": "13899c1bcf22a4ab1e9f829504aded0b",
"assets/video.png": "f7dc533da936c7cf0bae3dc9b8e46a19",
"assets/wallpaper.jpg": "14b6941574d1ad0cfa114ce796038854",
"favicon.ico": "8c5b580622197923971b31dc74eb7fad",
"favicon.png": "adcafff42a4e860f225bd4a473e9e975",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2528d73e8a7caed39e6cdf4e4f601224",
"/": "2528d73e8a7caed39e6cdf4e4f601224",
"main.dart.js": "5f9538bf4e8b04046bc3ae66c36856ce",
"manifest.json": "ef5d3eafb7e5fd06a7f3807cf3685658",
"version.json": "419bebb985435af80012e3dfc7097fd8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
