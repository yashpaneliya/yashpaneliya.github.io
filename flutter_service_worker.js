'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e518ca4155913f73febb6341ec07cc72",
".git/config": "91daa93fb891ea49b78121bfcbfaaeee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a02a1b96fc5ab9f82a47d7903a05b268",
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
".git/index": "0425bb2d8dc65fee3e40043c50d24e27",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac28f2df7d645e9d4fd0e28f06484b15",
".git/logs/refs/heads/master": "ac28f2df7d645e9d4fd0e28f06484b15",
".git/logs/refs/remotes/origin/master": "e882ec9be351b0cd4c6b233ae2f41952",
".git/objects/02/12267641d81f80f81957c2b74bed6954cdd286": "68ec82b87c13bfcf11dc7d1211e6bc03",
".git/objects/02/9badea2653a99fa2bd4387c11012b30690e6ea": "d7303f68595e6abbf8ab3c1936316e32",
".git/objects/03/6f0a78ec23cc111a647b1969e4ba76e39234c6": "b4d55b5a4d23240323c29727c4af47f5",
".git/objects/05/e1d036735fb1d189db1439bf9b2508508f3b14": "f2a220ec4abcdac08f67825ebbc95157",
".git/objects/07/43987a4c48e4805ff4bf173b756eca3f11b047": "c2ee846591f93019cfbe352c6f5d1a52",
".git/objects/0a/8f7e05d0d54bcba33161545a6b79cba3edd49d": "c581afdbcb073aeaa233356876cccfdd",
".git/objects/0a/e0d42f34a96442a162fefb4a4db2be044430de": "7479ed8d3d95cfd790705d3e1ae65d51",
".git/objects/0e/86c77755e8a7865236cdbc8c7371fa89b44dbe": "7fb9395a5b3f40967f871cf7a34c3b6a",
".git/objects/13/e2a4a4d901462b5523eddba62ce4f70673e1d8": "664fe1b94dcc6d94bc71ca0d105de963",
".git/objects/17/0a0a3b5d1920824d166d893978dd4738dafb8c": "bf2e9a56c1852260860b167fa3e6fc02",
".git/objects/1b/cdfafe6ef5367afd0f75ea3a2c272eab46c9a4": "92b85eea5ac738ef04be16f52e69feeb",
".git/objects/1c/e5d1e60514b02135b5bb1204efca1602625071": "841b4320dde719af058c7801e9f349a7",
".git/objects/1e/098b88589a8629ea48be42877967dd15d5088b": "f8c3080df29b4fd999c8b3b7e267ac8c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/a9a44fd226efc4f98961ff308134cd60eba336": "13344a98ddddf2c486a9255d4b3d2105",
".git/objects/27/4e824b0ebbcebde97fbdf72753455545351a29": "2ba5b841c9189a24fe0923717821c8d5",
".git/objects/27/fedd88b06e0e654c269daf10d892d5f72b0dbd": "9f9694dbd35921c407239fd85683b4fd",
".git/objects/28/c6ba58e2dac4a90f3cd0355c8bb3baf91ad05b": "0d94dfaece354b9bd27b1378e510bdba",
".git/objects/28/d41d59ef6a2ce0a6bf85b7346b00e3f241603a": "b59606be711b3bb9e28d686d960d09b3",
".git/objects/2c/f92134202c5bff4ff724294acc00a56b9c2374": "6f2f7c99b695e8e684133003f7c75ec3",
".git/objects/2f/73050307189fa985af10a0440d6ee221e17eb5": "372ca6152cb55fd4f942d9535e319fe1",
".git/objects/32/5fbe2f110eb68392461275f00737f01a6af0bb": "bc0453e5c403347ce86d8877e69f7917",
".git/objects/33/0cb6a6716fdccad6ad938865fdec167e8f46c2": "a2430bc08050e02b4f2399c532496e0c",
".git/objects/38/9fa67aed172fd3ab26d34b8e04443c7a389ad5": "ab66aa842b786e5f97ff102b40706f8b",
".git/objects/3a/9dadc284428b98d4425828f8c75bbcf3e2e1c3": "26b606794d733a66ffe7ed8318dd23b3",
".git/objects/3b/d262511d360ced4df95c36be7944b09bc44ca0": "00cbc229a408de61dc62271d13c6076a",
".git/objects/3b/e57fbc6b75c0dd2432c9ddbcf2273d542a5d91": "e4d5527ffbe2815de05b19825ce73e6c",
".git/objects/3c/eb0c7eaf2f7c3f46e28f8df98ec6c458915cbe": "7a5ef7880eca734c896b39a80388e397",
".git/objects/41/04aa422cb4e98c125b7932faebf135afe74939": "2621b9a1a1b3e47450e448366222ea71",
".git/objects/49/3750c4a07cd485bb257ead40271ea4bcb8ea03": "f9ef77c55bf6dcbfd0f8a0a2b4f90a7a",
".git/objects/4b/3e751aa03d512f3d136aee56b3f21fa669b4a3": "70abf2bebf21fb87d0f6f33a3a9fad64",
".git/objects/4d/03515e77d9a78024843e27a64b8b228fd1e6ca": "2987c797def16b0cfbf06dfae1ba60eb",
".git/objects/54/6f241ee9186ba382b7819f3befe3ac95f107ef": "f8e28032c6e74c8b262d6158a5bfeafa",
".git/objects/5c/1650304e9b439038fbe8a7e8b1d4f5a89a8971": "0bf3b27e4008621ad609ee86dfe3fcd5",
".git/objects/68/cbe2696e73ea6701009509721eb404d7498199": "8e17449a2a55a759c9da6021f6789ef0",
".git/objects/68/f808e65e56a2f7f663cbd0b0336da344a6bc3b": "bf177806424509a2ee3de301ef215001",
".git/objects/69/c6096dffcb10d910b3cef40367dde6ddf4bc43": "dbb133d989112a7aafa401e43fa679ac",
".git/objects/6f/1fad69aa2f7309f27d41b99f9cda2a7a929081": "b5ccc37b4239c8f3c0b209e87b5537c3",
".git/objects/6f/3144079f734a08c2bad255d0f30811cbd508ad": "c5d968997caec09a98f24d6f840e2089",
".git/objects/77/a5b7a03c11cd636e3be501ad8934df092f2def": "027e34310479877ae12c13431ccf7b5b",
".git/objects/78/64c6ae18a7c3064a2ee11bc1d237d4552fa1d1": "c688e5640c08ac2e47409deed6f1f50a",
".git/objects/79/a96e14805efc7b9aa85d49d700a648e88d35f8": "ae0dde1c155b6a87ab726d29d69e70c4",
".git/objects/7b/2a3795324134b60f5355b2cd9351ab1eab229c": "a44e8a2c0b426baf8faee96b6c832f2d",
".git/objects/7c/e29f22d3f5f5db8f0b09916e2aff76da125971": "096247d5ecaa67ec660568c1845f1bb6",
".git/objects/7f/14b16bd1f522c8fa478acf0504e5979cc138f0": "44c318e79570798626b4b4e4aae9a948",
".git/objects/80/4a0e8bb934510301c818ba1291209bfbd550bc": "25660c8325d42ec9601ac3dfdd3e9384",
".git/objects/80/d0c84a08047c5f38a51fa5e3716e581e1b0c1c": "4b2a8815fc685a94e0aea1966746a6c3",
".git/objects/81/23e97c309b9ce552a3e7109c56b45adddd2c92": "f5bba91c149ecea84fc66ebe78fa3c4c",
".git/objects/81/2d19a0691de43ef00df2129bb95da4a30a8d33": "7dac6b1d9fa4468fbf44634f12947580",
".git/objects/81/79557d0d603e68a5e1355c2fd5327272cd6961": "95f9b65283794d935661cb091daa139e",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/86/da5c99b0086750a061c194fd841b9afac0689d": "eb803039aebfd8ef6128d56cb3152b13",
".git/objects/87/eec07dfb19935d06fb26109dad64bade9b9f5b": "1c0faa9bcae4620c98a991fdc4d1e00d",
".git/objects/88/6bb8cc5978f64a3e0dd71d0f9a3c2c321f661d": "bfd13808945cf8be410d23f3637b17b9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f8e30f4335390f700b17a60f8bb26634c475a8": "4535d5828df161855b3c2fababd98306",
".git/objects/8a/481271c370bbde32887b9c4304dc077d65e6dc": "6ccd21086168fecd07e854e10ef0e708",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/735f810a853f6da83992023dbe5281b8ca2c59": "1119014caead3ece9c86868cfc215f46",
".git/objects/8f/a8ac40d21d2e9acf067ca6c5dcacdc7836224f": "0098402e46c976f94adc92c268543ccc",
".git/objects/8f/b6228f81defd6d45a772f42fa5f113e58e16c7": "0c2d5a649b6294788c251f87341a59f1",
".git/objects/8f/cc833e20dafeb7dd851bc92dc8c2a702bca9c7": "0633171bff3564c4855783cde126e8e6",
".git/objects/90/1e7c98b6e3f5be74070b54b9e94575aebbeebd": "6f577c054b61c41c5f7907dbbec8eeec",
".git/objects/91/84c5566e79909f5b79008bc8ba2456498358d1": "cd87777f6f4188f874e221158cf8a1fb",
".git/objects/93/3e154d1d5c76e779b85cb5db46790a651535e0": "94f4f4cf4c4c9708e36fdb2ca337f3f2",
".git/objects/93/febd7317b1c177ec7a133561ec3901c46494fc": "752b17448e6626d5cafffabd1e8361a4",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a2/904271856191fabadd4d6459f1fa84d3c47bd1": "dd3cf96f343476863df8f69b804752d3",
".git/objects/a2/b3c3fbc5a7f94d2b09e10692975a9d60df371a": "87341f26af063263db63d21d2df8c7f7",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/becff770b6d829d1e5f9ad27b3464b447f03c2": "dca801aef35df01b2ae0562808e787a8",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/ac/4be6caf4a5c1a49762a998107e00e2f6e95417": "02728888fbdbf995dab4b172c1f5dd4f",
".git/objects/ad/6d71de9f2d5cd62a93eb5a388c85154f76fcc3": "f004bb9badee40ebf646e16fe1ef636a",
".git/objects/ae/67b3db0cf4ecb489542659bc4880b7bd1b54f2": "37bb6f725aee53d00c29ef863b5dc24a",
".git/objects/b1/0355bf4cecde40b4afaac6a2b5d1c37938f06e": "ed7bcae20b07f9294fb262934569ffcb",
".git/objects/b5/d84f36a6cd8eb8876300d423a9ae50de7bb0b3": "84fa3e9cfb6bb45405d3c810ac6db3e9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/eb3640bb96f8b79fc51747cea3ed86c6730bec": "5036b61d11baf002e5e28013a88f3167",
".git/objects/be/8034129ae9e16d3990385b93daa6d139e9c4f1": "73d4f0178934b1bed6b492c1bd784275",
".git/objects/c0/959608699deafc407a03185787ed23757af11d": "9ea34dd330c1b6b20c915064346f8b6b",
".git/objects/c6/87f51e4f8fcbaa2ee3d79183002b8f4ad99be9": "a25937809b212e1037983b926f9f1b2e",
".git/objects/c9/242720dd8d368d610d9d744e045125abd61bce": "ed50e4e3362c2cd412f96f1cff466ba1",
".git/objects/ca/90b28e9ce5837cb4ed3d23fd32adbe0dc93696": "73440ebc783b6a088bb9297531c271e3",
".git/objects/cf/ddc78acaf29445672a94c4a6d3f87d1c8f2ffc": "a3844b465b933a67acebd9a59abce322",
".git/objects/d8/165ec21593d7299e2567a3cbd91bffb762d7bb": "05a0af17ba2b265472f07fa81fe6098c",
".git/objects/de/a4df3c665ff551c223ec758c948cbf689038d4": "d481d48bf39576024b79ec88e9d46772",
".git/objects/e5/b0bc18d0b551ba7fe1e94bc2abf46f9f2feacf": "7afdb82186fc4b4caa18817897b07bca",
".git/objects/ea/8bb352af72c28ae18ec167c983ea0fc92fe8bf": "47f164ce93c4f287f232fa1c068422f0",
".git/objects/ed/23b4135c9b09823323af78b7357f68d4be00de": "572fceff3d226ad61f3435cf2f5e9f32",
".git/objects/f3/439e55e74579c0708cbe2e09be17385f92b535": "d43c6f92416563276e90dcc835982805",
".git/objects/f3/d154d1e2112bcbe749e84e4211fd10eb393cd0": "e2496944979baa8f58980b23f7c36833",
".git/objects/f4/25855824ab0717aac8f8aafb9468af9652a916": "b65fd3bcc47643b63aa38db8a8d5e87b",
".git/objects/f7/c786e9bce41c955da678709fb6e54196bb4926": "f48c26e5893a3a7c59c860861ef4cd6e",
".git/objects/f7/df94bc77673965f34776c8b72cefa345ddadc2": "f3dd64b2c64a0322e25db965a5b89680",
".git/objects/fc/c2ba5475ca4d02c627603a62343525e8a2e9a9": "d91f7f5ccad72cf962c6bd05ea6bf178",
".git/objects/ff/0a4cf1e2d00ca56296f60f793baaf90cc908dd": "410863550c2c0b32391a63b7a6bc061a",
".git/objects/ff/666d821e44c9fa8d6c7e08485821bd031d52e5": "0d3201b11be17d06e6604558768c3fa0",
".git/ORIG_HEAD": "9efc3a3ab0902280aa6432c83fdf90bb",
".git/refs/heads/master": "f3d3cd7be6a45a3855e6caefebac6b50",
".git/refs/remotes/origin/master": "f3d3cd7be6a45a3855e6caefebac6b50",
"assets/android.png": "c4cdac951f54d9689393ef1a77d3cb6e",
"assets/AssetManifest.json": "c9a46a5d9e06a88cb8d2ac5b59b73b78",
"assets/bigback.jpg": "43f16ec8d20e55565c8cdf56c81dea70",
"assets/cabbymy.png": "91483590edc2221cce502d14fc2af3c9",
"assets/cabbysmall.png": "4888bafe82fad285d2ee027a804374c4",
"assets/class.jpg": "b77f5c01f872cf4357527d8ae9875a4a",
"assets/cntnew.png": "1200118cee4af757dc017b4bd23b1ce9",
"assets/cpp.png": "b4dd4c5e18b3c0a0c35018f37c2b2f94",
"assets/dailydairy.png": "bcad61083eb75be28330f217bf81bf2f",
"assets/dash.png": "94b8139a9f1f2c226184af4106495c66",
"assets/dd.png": "eb1b6688dae894142944f95eddd89740",
"assets/ddsmall.png": "9681189c5ad6b579ce066820cc6b87a2",
"assets/evently.png": "c1a074f09037b91a37fa39ef9f47dee2",
"assets/eventlysmall.png": "5c78b5b3cee4924bf3bc69929b18a9e1",
"assets/evt.jpg": "ece8bdaf1c8a1f92b02d2356eabb2195",
"assets/evtsmall.png": "89c1583f49271899910bfb90cfbfa824",
"assets/firebase.png": "fe4bf3d21e7c88264d34ffb1cc2d80b1",
"assets/flutter.png": "1b1259227a721a796c57237f63c12cc3",
"assets/FontManifest.json": "9d77005f72e1731eeea1ca69652eeb37",
"assets/fonts/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/insta.png": "34ada1638ef7bef370e593e45e2cd29a",
"assets/iPhone.png": "4151c326a50e613310a5ff53846c25ba",
"assets/linkedin.png": "1ce9b8d836bdb8877db395e163ade01f",
"assets/NOTICES": "dbf2e12565a2242e2cbc8f7daa6d3895",
"assets/octocat.png": "ea8b6bf15eca5d4b518b441f601a3a07",
"assets/packages/typicons_flutter/fonts/typicons.ttf": "29f9630f7d87a79830d1c321e1600f2e",
"assets/pf.jpg": "3be811d89107f735ce5ab3dda7010136",
"assets/pfsmall.png": "a74d8f055e0bccb32a9e7fa19b4af069",
"assets/python.png": "22284ad7b7210df2e08d708758b6c4e8",
"assets/quote.png": "7c5afd3e2ca0c6acd5e6ca04e6d1f7f2",
"assets/quotesmall.png": "8583efcabf9a3f36294ab004b6633c42",
"assets/sawaj.png": "cb15a2bc7ecb9fbb798f7c0051a4e6c4",
"assets/tk.jpg": "ec59cf9f3bd2b68d2ad2065b562b3c2d",
"assets/ttsmall.jpg": "f2bd0d999f9eff2ac5c8ea5cf6b37e27",
"assets/tuktuk.jpg": "b9e93bc54820881d58e92390db56a524",
"assets/tweet.png": "3d74e8bfd4ef7985f7529bb9f7650eca",
"assets/typicons.ttf": "29f9630f7d87a79830d1c321e1600f2e",
"assets/v1.mp4": "bdad9b1da5caa5459e76324bfb339653",
"assets/xd.png": "1759a9d11b74eaa0c194ae624419feac",
"assets/yash.jpg": "e0ad40338b2287b13359cf4e41ff3231",
"assets/yash2.jpg": "e16022229679663e8e219075878df750",
"assets/yashgap.png": "603958208885d5337cd1bee5f0a5842d",
"assets/yp.jpg": "253f6e0c949bd1914a959e65dba75206",
"assets/yplight.png": "4f5ce4343ebd67b135a3fabdb53993ba",
"favicon.ico": "253f6e0c949bd1914a959e65dba75206",
"favicon.png": "253f6e0c949bd1914a959e65dba75206",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "97c0745ffac5548ee9eb016db931707d",
"/": "97c0745ffac5548ee9eb016db931707d",
"main.dart": "01db0764677e47d979d93b183db80ccb",
"main.dart.js": "91748bedb2e40032b60b07d493cab274",
"manifest.json": "14e919b7b1dde549ab334b7ee3ce8412",
"version.json": "426313f2f3133c2f20415344c4a22df3"
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
