'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7a98c8f4f0ad0a76aaa2cfab48f652ac",
".git/config": "91daa93fb891ea49b78121bfcbfaaeee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "57db6d8022d31773f04b74f0c49a3f3c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8592138f57188bd6b05addc9890c5756",
".git/logs/refs/heads/master": "8592138f57188bd6b05addc9890c5756",
".git/logs/refs/remotes/origin/master": "d8b8833910c9dbc7327b9d607aa488ee",
".git/objects/05/e1d036735fb1d189db1439bf9b2508508f3b14": "f2a220ec4abcdac08f67825ebbc95157",
".git/objects/07/43987a4c48e4805ff4bf173b756eca3f11b047": "c2ee846591f93019cfbe352c6f5d1a52",
".git/objects/0a/e0d42f34a96442a162fefb4a4db2be044430de": "7479ed8d3d95cfd790705d3e1ae65d51",
".git/objects/1b/cdfafe6ef5367afd0f75ea3a2c272eab46c9a4": "92b85eea5ac738ef04be16f52e69feeb",
".git/objects/1e/098b88589a8629ea48be42877967dd15d5088b": "f8c3080df29b4fd999c8b3b7e267ac8c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/a9a44fd226efc4f98961ff308134cd60eba336": "13344a98ddddf2c486a9255d4b3d2105",
".git/objects/27/4e824b0ebbcebde97fbdf72753455545351a29": "2ba5b841c9189a24fe0923717821c8d5",
".git/objects/28/c6ba58e2dac4a90f3cd0355c8bb3baf91ad05b": "0d94dfaece354b9bd27b1378e510bdba",
".git/objects/33/0cb6a6716fdccad6ad938865fdec167e8f46c2": "a2430bc08050e02b4f2399c532496e0c",
".git/objects/3a/9dadc284428b98d4425828f8c75bbcf3e2e1c3": "26b606794d733a66ffe7ed8318dd23b3",
".git/objects/3b/e57fbc6b75c0dd2432c9ddbcf2273d542a5d91": "e4d5527ffbe2815de05b19825ce73e6c",
".git/objects/41/04aa422cb4e98c125b7932faebf135afe74939": "2621b9a1a1b3e47450e448366222ea71",
".git/objects/49/3750c4a07cd485bb257ead40271ea4bcb8ea03": "f9ef77c55bf6dcbfd0f8a0a2b4f90a7a",
".git/objects/4b/3e751aa03d512f3d136aee56b3f21fa669b4a3": "70abf2bebf21fb87d0f6f33a3a9fad64",
".git/objects/4d/03515e77d9a78024843e27a64b8b228fd1e6ca": "2987c797def16b0cfbf06dfae1ba60eb",
".git/objects/5c/1650304e9b439038fbe8a7e8b1d4f5a89a8971": "0bf3b27e4008621ad609ee86dfe3fcd5",
".git/objects/77/a5b7a03c11cd636e3be501ad8934df092f2def": "027e34310479877ae12c13431ccf7b5b",
".git/objects/78/64c6ae18a7c3064a2ee11bc1d237d4552fa1d1": "c688e5640c08ac2e47409deed6f1f50a",
".git/objects/7b/2a3795324134b60f5355b2cd9351ab1eab229c": "a44e8a2c0b426baf8faee96b6c832f2d",
".git/objects/7f/14b16bd1f522c8fa478acf0504e5979cc138f0": "44c318e79570798626b4b4e4aae9a948",
".git/objects/86/da5c99b0086750a061c194fd841b9afac0689d": "eb803039aebfd8ef6128d56cb3152b13",
".git/objects/87/eec07dfb19935d06fb26109dad64bade9b9f5b": "1c0faa9bcae4620c98a991fdc4d1e00d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/735f810a853f6da83992023dbe5281b8ca2c59": "1119014caead3ece9c86868cfc215f46",
".git/objects/8f/a8ac40d21d2e9acf067ca6c5dcacdc7836224f": "0098402e46c976f94adc92c268543ccc",
".git/objects/8f/b6228f81defd6d45a772f42fa5f113e58e16c7": "0c2d5a649b6294788c251f87341a59f1",
".git/objects/8f/cc833e20dafeb7dd851bc92dc8c2a702bca9c7": "0633171bff3564c4855783cde126e8e6",
".git/objects/91/84c5566e79909f5b79008bc8ba2456498358d1": "cd87777f6f4188f874e221158cf8a1fb",
".git/objects/93/3e154d1d5c76e779b85cb5db46790a651535e0": "94f4f4cf4c4c9708e36fdb2ca337f3f2",
".git/objects/93/febd7317b1c177ec7a133561ec3901c46494fc": "752b17448e6626d5cafffabd1e8361a4",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/ae/67b3db0cf4ecb489542659bc4880b7bd1b54f2": "37bb6f725aee53d00c29ef863b5dc24a",
".git/objects/b1/0355bf4cecde40b4afaac6a2b5d1c37938f06e": "ed7bcae20b07f9294fb262934569ffcb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c6/87f51e4f8fcbaa2ee3d79183002b8f4ad99be9": "a25937809b212e1037983b926f9f1b2e",
".git/objects/ca/90b28e9ce5837cb4ed3d23fd32adbe0dc93696": "73440ebc783b6a088bb9297531c271e3",
".git/objects/de/a4df3c665ff551c223ec758c948cbf689038d4": "d481d48bf39576024b79ec88e9d46772",
".git/refs/heads/master": "40e3df52f567cd4bf83cb52578f49e02",
".git/refs/remotes/origin/master": "d623985ec0431db0ecd654f22be01527",
"assets/android.png": "c4cdac951f54d9689393ef1a77d3cb6e",
"assets/AssetManifest.json": "c9a46a5d9e06a88cb8d2ac5b59b73b78",
"assets/bigback.jpg": "43f16ec8d20e55565c8cdf56c81dea70",
"assets/class.jpg": "b77f5c01f872cf4357527d8ae9875a4a",
"assets/dailydairy.png": "bcad61083eb75be28330f217bf81bf2f",
"assets/dash.png": "94b8139a9f1f2c226184af4106495c66",
"assets/dd.jpg": "7c1f718553cbe0e8dba35622083a8f30",
"assets/ddsmall.png": "741f38f3f76780d0c9ece7cafb51006f",
"assets/evently.png": "c1a074f09037b91a37fa39ef9f47dee2",
"assets/evt.jpg": "ece8bdaf1c8a1f92b02d2356eabb2195",
"assets/evtsmall.png": "89c1583f49271899910bfb90cfbfa824",
"assets/firebase.png": "fe4bf3d21e7c88264d34ffb1cc2d80b1",
"assets/flutter.png": "1b1259227a721a796c57237f63c12cc3",
"assets/FontManifest.json": "fbc1b8f61911f5ecc3d608e39af0b521",
"assets/fonts/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/insta.png": "34ada1638ef7bef370e593e45e2cd29a",
"assets/linkedin.png": "1ce9b8d836bdb8877db395e163ade01f",
"assets/NOTICES": "70ef853a5bcc568a02311c604e472422",
"assets/octocat.png": "ea8b6bf15eca5d4b518b441f601a3a07",
"assets/packages/typicons_flutter/fonts/typicons.ttf": "29f9630f7d87a79830d1c321e1600f2e",
"assets/pf.jpg": "3be811d89107f735ce5ab3dda7010136",
"assets/pfsmall.png": "a74d8f055e0bccb32a9e7fa19b4af069",
"assets/sawaj.png": "cb15a2bc7ecb9fbb798f7c0051a4e6c4",
"assets/tk.jpg": "ec59cf9f3bd2b68d2ad2065b562b3c2d",
"assets/ttsmall.jpg": "f2bd0d999f9eff2ac5c8ea5cf6b37e27",
"assets/tuktuk.jpg": "b9e93bc54820881d58e92390db56a524",
"assets/tweet.png": "3d74e8bfd4ef7985f7529bb9f7650eca",
"assets/v1.mp4": "bdad9b1da5caa5459e76324bfb339653",
"assets/yash.jpg": "e0ad40338b2287b13359cf4e41ff3231",
"assets/yash2.jpg": "e16022229679663e8e219075878df750",
"assets/yp.jpg": "253f6e0c949bd1914a959e65dba75206",
"assets/yplight.png": "4f5ce4343ebd67b135a3fabdb53993ba",
"favicon.ico": "253f6e0c949bd1914a959e65dba75206",
"favicon.png": "253f6e0c949bd1914a959e65dba75206",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b67c3d8a56a13d93dbcdd071c4005825",
"/": "b67c3d8a56a13d93dbcdd071c4005825",
"main.dart": "01db0764677e47d979d93b183db80ccb",
"main.dart.js": "dcfd653e7ff92340a08d4627c6c3c5e5",
"manifest.json": "14e919b7b1dde549ab334b7ee3ce8412"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
  if (event.data == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
