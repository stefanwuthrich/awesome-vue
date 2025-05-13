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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6384cd454c3c804191f5cdd3735c64d3"
  },
  {
    "url": "assets/css/0.styles.ac150faa.css",
    "revision": "453a3fa0dad52402e2b20a58de935494"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.ac024f34.js",
    "revision": "88b9f3a2b533bcdfc7a2fc86afccf5ba"
  },
  {
    "url": "assets/js/11.a07079b2.js",
    "revision": "cfcc99905967727bbc22863081689316"
  },
  {
    "url": "assets/js/12.051323e3.js",
    "revision": "94083756877a7fe5b772d78cfed5edc3"
  },
  {
    "url": "assets/js/13.9fac41c8.js",
    "revision": "48e87a37bef09842e655a0cbba8d5e60"
  },
  {
    "url": "assets/js/14.167b5405.js",
    "revision": "d152a82ee6ea9efaaca7b6c2a2f42432"
  },
  {
    "url": "assets/js/15.38a7bc32.js",
    "revision": "4bc2df013fd3e91668bba26291b1ce7a"
  },
  {
    "url": "assets/js/16.9e6f471d.js",
    "revision": "da39e410dfce81334e443754d54d609a"
  },
  {
    "url": "assets/js/17.b3ac9297.js",
    "revision": "3c40f989ea6e269b5be81de29fec4add"
  },
  {
    "url": "assets/js/18.fe6a7004.js",
    "revision": "7bd1245a63f28e842f442064f8f0e01c"
  },
  {
    "url": "assets/js/19.6603ef96.js",
    "revision": "20d6b8e37e0b2b899d68ff3af89a2ca2"
  },
  {
    "url": "assets/js/2.e80942ca.js",
    "revision": "8471ceef01c26910a7d7d7ce6b8683cb"
  },
  {
    "url": "assets/js/20.3f416f35.js",
    "revision": "60f10cd6a0e524965f300c1d3441d9db"
  },
  {
    "url": "assets/js/21.f5a91189.js",
    "revision": "31a05e0bfa558bd3fe44a34123dc794a"
  },
  {
    "url": "assets/js/22.41bc76f4.js",
    "revision": "8cfd9c3d439f7d695d90c55f77631d53"
  },
  {
    "url": "assets/js/23.043d7ea9.js",
    "revision": "dca42ef64cb269e9b3b14a17fcbb602d"
  },
  {
    "url": "assets/js/24.c747e259.js",
    "revision": "ab06376fb2871500fafb69e7d7e80720"
  },
  {
    "url": "assets/js/25.e89a0b1d.js",
    "revision": "85b22e090481d8919933e334e510df78"
  },
  {
    "url": "assets/js/26.79cded79.js",
    "revision": "44337ca220b8e0b19a4f9ca00f7390e0"
  },
  {
    "url": "assets/js/27.c42c1ec5.js",
    "revision": "898b426fa886ab915efb9a18887fd857"
  },
  {
    "url": "assets/js/28.b3def227.js",
    "revision": "561dea058115fb9984bc7d9060eeb6a8"
  },
  {
    "url": "assets/js/29.1fb5f022.js",
    "revision": "85c09a57abd54aadf1b8c1264403dff1"
  },
  {
    "url": "assets/js/3.fe6d7168.js",
    "revision": "c7ff5da4f22d504343294d4110eb54cf"
  },
  {
    "url": "assets/js/30.5224c3cb.js",
    "revision": "730ffcec27db5fd7c32cd0d7697bdc3a"
  },
  {
    "url": "assets/js/31.34c33684.js",
    "revision": "2a647ae4928b20606d243fa6ed0a1e05"
  },
  {
    "url": "assets/js/32.894a9105.js",
    "revision": "71f57d76ceefb6ac72f7757e2382d6a2"
  },
  {
    "url": "assets/js/33.c8366e0d.js",
    "revision": "01cb69a0702550aa06510d8530060e2c"
  },
  {
    "url": "assets/js/34.4f7f3447.js",
    "revision": "f68357a30f595aee52b77f1b93623587"
  },
  {
    "url": "assets/js/35.22280b3b.js",
    "revision": "69058a7982ae32373861466114c7cf67"
  },
  {
    "url": "assets/js/36.660f106e.js",
    "revision": "92e0deef182832a6ffbde18ac2db1e88"
  },
  {
    "url": "assets/js/37.51f517ec.js",
    "revision": "e46b804a856b2ebbc3e92721c2df014b"
  },
  {
    "url": "assets/js/38.0091b02d.js",
    "revision": "e124a58ada4c2b322ac9355832c3116e"
  },
  {
    "url": "assets/js/39.d6af504c.js",
    "revision": "4e89f91b614443f7fcf7febbb2164ed3"
  },
  {
    "url": "assets/js/4.e28d717d.js",
    "revision": "61c330ee491fa4219741dae56b28d52d"
  },
  {
    "url": "assets/js/40.cbf305f9.js",
    "revision": "e885e32ce3a3191be230441265177b1e"
  },
  {
    "url": "assets/js/41.c800c55e.js",
    "revision": "b682b7018435ffd143bcd31c913a91e4"
  },
  {
    "url": "assets/js/42.1f88bf53.js",
    "revision": "5fd1aafab59270a187fc3943f081c5ab"
  },
  {
    "url": "assets/js/43.d4b48fd5.js",
    "revision": "ddbff598ba369789dc8988761e0f6e2e"
  },
  {
    "url": "assets/js/44.1462d8b3.js",
    "revision": "28f6115409180c47223a26335bb5f4fe"
  },
  {
    "url": "assets/js/45.1e02b0f8.js",
    "revision": "02d8fece3679c5e9caa1fbdd9dc52077"
  },
  {
    "url": "assets/js/46.d4c0cea6.js",
    "revision": "e7de189054cb3bad415f7ee68e55cd15"
  },
  {
    "url": "assets/js/47.f636a549.js",
    "revision": "ba4b9c53681e022e7c4ff2cff96ba093"
  },
  {
    "url": "assets/js/48.8873eb59.js",
    "revision": "6f1f822f7700db02be70ee3e405f41f0"
  },
  {
    "url": "assets/js/49.31a4c5d2.js",
    "revision": "b4a1dd3686d6829d63df23d8dbdf6221"
  },
  {
    "url": "assets/js/5.2afffd05.js",
    "revision": "c405923ea9a0a75060900682faf7a8ff"
  },
  {
    "url": "assets/js/50.a8018b8b.js",
    "revision": "0afd3e83eb6de0637a1fdcdec526df00"
  },
  {
    "url": "assets/js/51.cb7d8064.js",
    "revision": "26ce18b6e840fc333673ff86ad44ffc4"
  },
  {
    "url": "assets/js/52.ee2f7693.js",
    "revision": "8dfb05d7918cbbd79eba701f44a0ede1"
  },
  {
    "url": "assets/js/53.311f8cde.js",
    "revision": "fb7f06b7d0ce0ba8ed93c0a480dc3e29"
  },
  {
    "url": "assets/js/54.b0996abd.js",
    "revision": "a21a01ea8576296b689446da8386300b"
  },
  {
    "url": "assets/js/55.278e8b52.js",
    "revision": "5982102db4aadb489193ce1ff9128bdf"
  },
  {
    "url": "assets/js/56.20eb2e94.js",
    "revision": "f9ee95581dbbe750e84a94a2870f04e5"
  },
  {
    "url": "assets/js/6.166c5878.js",
    "revision": "1295d10a35fe017e418fad689081c20d"
  },
  {
    "url": "assets/js/7.b10aa9ac.js",
    "revision": "02301f8ffb3965b651e92eb5718d7923"
  },
  {
    "url": "assets/js/8.bc4793cf.js",
    "revision": "8415db084036391e56a6cb17b22a2111"
  },
  {
    "url": "assets/js/app.fe598c9a.js",
    "revision": "56fe62673b761f4566cec72bb760f676"
  },
  {
    "url": "assets/js/vendors~docsearch.76a29222.js",
    "revision": "9637d52e5fc6d45ad3e65cfe36c64139"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "363d92c801265711b08f6d55ca0768d1"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "18068dad183406585db09148ee6a6a5f"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "ddb53068d7522024321bd31325340a40"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "779546a6521d4b38a8e0d823e713f4dc"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "a9f70c491f9000dcd0bb2b72b862de48"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "0068ec6cc859c5bce2e247ed2a33a969"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "814fa6f414e35e1eb66fa12101e746c8"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "82ec8c095d6adc3181d2913292219482"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "659fb24b09cd76f7e0f909eeda3da475"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "aa225f77bf3af01a115b6e445e37baea"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "583a883a11f09e4c156375804e713e8c"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "b631d7ecf51673ab849884af6cb46894"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "b33d2ebcf747cb9ffa8462fa4a79141d"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "cfcab69cf36a34fceb7dbf1c5a1c0714"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "f0bc542340086735e24e8f6694453363"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "18948f069e08b6ffa20a1f1d6ecb5d70"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "05352c1b4ad424434097b6edd42d8237"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "00db96bde21224e250c92a7a0b7b6497"
  },
  {
    "url": "resources/books.html",
    "revision": "262501a8508dc1376ba94ba022b38333"
  },
  {
    "url": "resources/community.html",
    "revision": "38165467bf051ee32ec57982c9815fde"
  },
  {
    "url": "resources/conferences.html",
    "revision": "6af20dc125700ecf6d037e203c528c42"
  },
  {
    "url": "resources/courses.html",
    "revision": "12ff3e7d8f106582896c05aa83fe4e94"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "28389a25e88c1cb74b9822c414c2c838"
  },
  {
    "url": "resources/examples.html",
    "revision": "744471a2fce7a625e939716b85d6f1a5"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "1edb388b5bf4f0bf356ef21d5b7e745f"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "990a62c14d8a6af471ac5a1b7e1a051b"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "4ae93d557b9aa3993efb64ef8dfa7dbb"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "316ed9664e2b788ac13056846f2ad3fb"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "59a7bcac2df5f2158514a48da559774e"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "eec45493cbbd1b7973ac848d6d02bfbe"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "89e8bacad2a15358188fdbc62d6e8ec3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
