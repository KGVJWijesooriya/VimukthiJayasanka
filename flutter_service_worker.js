'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4d9637397cd13b3f5a637c9ba08cd227",
"assets/AssetManifest.bin.json": "20cb6cfff9e16fb08c4ea3df0f611eec",
"assets/AssetManifest.json": "5bec08f108cf622df439c9d1ae366617",
"assets/assets/fonts/Inkfree.ttf": "73428cd1ad823d01d77b642ee6104415",
"assets/assets/images/Adobe_Premiere_Pro_CC_icon.svg.png": "f0d4dfabd699a926ac34f4bafd0aef46",
"assets/assets/images/color_logo_0.png": "3fe744726e43f4137c74f71c33c811e0",
"assets/assets/images/color_logo_1.png": "53f7c1f969f0e9bfa39bdcfeddb16d36",
"assets/assets/images/color_logo_10.png": "f056304776a4a5442322de5e18a9a407",
"assets/assets/images/color_logo_11.png": "0cded3a3276425911d55a2552bf361bf",
"assets/assets/images/color_logo_12.png": "3d92c497e32bc70b96c704478a2788ca",
"assets/assets/images/color_logo_13.png": "27bf30621fff8ca85275d1998bfb98ae",
"assets/assets/images/color_logo_14.png": "6b398beb35c8a4468b44e733b0b918fb",
"assets/assets/images/color_logo_15.png": "441104121f45696d5db055686ef3f6f3",
"assets/assets/images/color_logo_16.png": "7685f5dcf61713d0c26b46370c8fc70f",
"assets/assets/images/color_logo_17.png": "47e155d0029048df1d9d4b87c431f1b9",
"assets/assets/images/color_logo_18.png": "b3af3f41f15b89644569a89d6cb76ed6",
"assets/assets/images/color_logo_19.png": "1d786e39559355e21315bc694ad5764f",
"assets/assets/images/color_logo_2.png": "38856c692e03024326bba5f3b98e997b",
"assets/assets/images/color_logo_20.png": "74a35828476fe17c2d295fb3cafee3ec",
"assets/assets/images/color_logo_21.png": "755987af378b20170bbebd90852e4c70",
"assets/assets/images/color_logo_22.png": "2aee183254fa636391dfa69773fae0ee",
"assets/assets/images/color_logo_23.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/images/color_logo_24.png": "e512be08eb7ae5f20fcc75b383054d11",
"assets/assets/images/color_logo_25.png": "1e396e9c6b41ca3f84dc66904c8504c7",
"assets/assets/images/color_logo_26.png": "6bffc2fa02f411df6d9bc9902185e28a",
"assets/assets/images/color_logo_27.png": "f48c9dce5cc45aa21b996f4692eceddb",
"assets/assets/images/color_logo_3.png": "cce5d30281a53321ff772e28ff61bef9",
"assets/assets/images/color_logo_4.png": "a55c51223f4a04e8beab075309fdc280",
"assets/assets/images/color_logo_5.png": "70d28c5a7c5f888db5a1a50b268fd9ce",
"assets/assets/images/color_logo_6.png": "f37f83fa70eeb936a5992c4c89b58d39",
"assets/assets/images/color_logo_7.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/images/color_logo_8.png": "25dbcf9f4fb4f7fd19144ea2bdcedb88",
"assets/assets/images/color_logo_9.png": "33684c7b78cda97bad2bb0bc9e11387e",
"assets/assets/images/develop.jpg": "7a1929114a443d338aa9f09d2587ed8a",
"assets/assets/images/Docker_(container_engine)_logo_(cropped).png": "968b730ff9e83d93723fcdd3fc01df3c",
"assets/assets/images/Facebook.png": "e4da23704f27c9df07e6c21a13e28bfd",
"assets/assets/images/fe973ef75e14e96c5fc5cdf4fcdc0ef4.jpg": "573c86c52b4e13b9b4404656780536b3",
"assets/assets/images/google-developers-logo-F8BF3155AC-seeklogo.com.png": "3101a71635f20934bd7b56e6bd5648ca",
"assets/assets/images/graphic.jpg": "32fec4a9670519427ad54ab9c27cb17e",
"assets/assets/images/instagram.png": "8c91a3aad1c8932e674f902106e35685",
"assets/assets/images/logo_0.png": "16b0f88bcd8aae04bbfa28a34cc00331",
"assets/assets/images/logo_6.png": "7ae727a0a79dc3806e67d88c7b89eb28",
"assets/assets/images/Lucid.png": "38d1604caa32c9dcd3b5a48ae9acf42e",
"assets/assets/images/pic.png": "c9fafd2375a8ef513ea778a18977c2d1",
"assets/assets/images/postman-logo-0087CA0D15-seeklogo.com.png": "82a0d0900cb1a2801b2a0f5988991baf",
"assets/assets/images/profilepic.png": "e739da87373959f262d3f69a796b2210",
"assets/assets/images/Screenshot_20241010-232036.png": "5f557a479cc8d409d37f8a33061664ad",
"assets/assets/images/SIPMonLogo_icon.png": "67dfe03f15c645f8d524a5d168cb60bb",
"assets/assets/images/social_media.png": "e39d38ddc0d7c52db03a5d1b325ae6c9",
"assets/assets/images/tiktok.png": "35be362428d52fd45c2351ca82c7401b",
"assets/assets/images/work_01.jpg": "4cd8c796306988a68cc01c200153ec4a",
"assets/assets/images/work_010.jpg": "f8f778883cf696732423628dd865512a",
"assets/assets/images/work_011.jpg": "84313bc3bc40cbf8c46efdb5d16315f2",
"assets/assets/images/work_012.jpg": "9f2ba706529adb96576dbc402cc7e11f",
"assets/assets/images/work_013.jpg": "e4453fafe157761c1c71c22e451fae6d",
"assets/assets/images/work_014.jpg": "41f9cc2a39254b244bb224b767eb79fb",
"assets/assets/images/work_015.jpg": "0d37fd697c3b9810fa6876087af3bef3",
"assets/assets/images/work_016.jpg": "d3bf750a4532347bca09f7f228fd6cc2",
"assets/assets/images/work_017.jpg": "a88779324b2992de8a445bf907dfe70c",
"assets/assets/images/work_018.jpg": "b70df2f14bbc76f5ffdb2c9327527f22",
"assets/assets/images/work_019.jpg": "0f57676c229a76d152b986b386fe78d1",
"assets/assets/images/work_02.jpg": "5c6fd0b3a2140c555252724e406aac7c",
"assets/assets/images/work_020.jpg": "576bd424f19f2bb855697bfd3c68b837",
"assets/assets/images/work_021.jpg": "b6208ac48a1c9fc91c9e9ade27e213a3",
"assets/assets/images/work_03.jpg": "5ce3b743309d21db98668b5393bbbd56",
"assets/assets/images/work_04.jpg": "587f43c1bac3417a2657475d3e3fdb29",
"assets/assets/images/work_05.jpg": "52847914980752fe7e20710f413171ac",
"assets/assets/images/work_06.jpg": "ce372165677eadd8b9ff651985a7a344",
"assets/assets/images/work_07.jpg": "01b9573568bce7a776ccd75824fda0d8",
"assets/assets/images/work_08.jpg": "768904b07ba601a5e13fe25b3b3c5687",
"assets/assets/images/work_09.jpg": "7cad3e062f29099bd9bf065dda746e18",
"assets/assets/projects.json": "03725a770f041f824aa44f59e43d456a",
"assets/FontManifest.json": "2a66a7ab52f6dad430f8332e0f09fcea",
"assets/fonts/MaterialIcons-Regular.otf": "3c5e36ae3fefd2f367da3e9b3c039d7e",
"assets/NOTICES": "24509479c4e9dfb8f9c5d8ab330ce4c7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "bb7854ddbcaa2e58e5bdef66b58d4b47",
"canvaskit/canvaskit.wasm": "6134e7617dab3bf54500b0a2d94fe17a",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "f23279209989f44e047062055effde63",
"canvaskit/chromium/canvaskit.wasm": "ad6f889daae572b3fd08afc483572ecd",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "dc16cade950cfed532b8c29e0044fe42",
"canvaskit/skwasm.wasm": "aff2178f40209a9841d8d1b47a6e6ec7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "d84e7832d391997795d3089b8cc12cbb",
"flutter.js": "5de281a37b2308e43846d3a0b545c921",
"flutter_bootstrap.js": "b718dda36a697fdf12214f7b97b852ae",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d11625e6f417e3a9d8130e9cf2445779",
"/": "d11625e6f417e3a9d8130e9cf2445779",
"main.dart.js": "32d58d4a098e1b7f3ea71a6221fc312e",
"manifest.json": "bb585d708a15eaee2df0ca5f4837e591",
"version.json": "6fc41ce1e807b71e086105e9c673cc64"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
