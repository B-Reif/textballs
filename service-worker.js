"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/textballs/index.html","56dda783cb3bd141f830d516025c1890"],["/textballs/static/css/main.24e4ca9c.css","037a8ab82bbcbb361be033711310b51b"],["/textballs/static/js/0.85d84bc9.chunk.js","ba466a952ddd41e64b1da19e01af05ea"],["/textballs/static/js/1.930ca3b6.chunk.js","f1b9146980d63950c3dd4c7556e7bf97"],["/textballs/static/js/10.0d521501.chunk.js","faa8c30d6cce513aadb0f505e8a2ae44"],["/textballs/static/js/100.c352fc20.chunk.js","9204c10ff677c6f1ec4adeab7ba6864d"],["/textballs/static/js/101.4aff41c5.chunk.js","06d9dcf83282ee9a41462ed470fc295b"],["/textballs/static/js/102.260ce707.chunk.js","9acf5f8628d3a57343a1f21dfb5ce847"],["/textballs/static/js/103.539a9958.chunk.js","3d0e083c6cde2e3a0df4d37ebd310844"],["/textballs/static/js/104.0b364651.chunk.js","97e6b2f419f18763e2773f7bcad4c52f"],["/textballs/static/js/105.4ba22a4e.chunk.js","8ecd68ee1543e962fb8d52fa5fd7d2f4"],["/textballs/static/js/106.0cd38e8e.chunk.js","767d3583056ecf4191ee38c602939b76"],["/textballs/static/js/11.8ed958c6.chunk.js","ea0506647b036086555437003bac929c"],["/textballs/static/js/12.6127df38.chunk.js","e549470be0febbb19bb597e43c743993"],["/textballs/static/js/13.2746ea8c.chunk.js","1fb8c5eddb06ade12d36cb097576fd65"],["/textballs/static/js/14.a45c5446.chunk.js","d4f13c0651b88a66016747cf392b1133"],["/textballs/static/js/15.f9f3a83e.chunk.js","4dc3df9290132af375ca379cd3a0ce2c"],["/textballs/static/js/16.ee9926c4.chunk.js","1bea28bbd51aaf621252f99b62b1d62e"],["/textballs/static/js/17.110b1a66.chunk.js","90e820db9cc8985508444eeea1da06b1"],["/textballs/static/js/18.fcdee63b.chunk.js","45954cf551d5f3f09512e81fc1ae5655"],["/textballs/static/js/19.3a88f226.chunk.js","cc02a5de073603fd833087d8cb17f575"],["/textballs/static/js/2.5115c844.chunk.js","e13aeac11a93185918eccdfb3be9db69"],["/textballs/static/js/20.40f8481f.chunk.js","c89549502d790c3f2e8984217dec91d0"],["/textballs/static/js/21.794ca821.chunk.js","f7ac66a9f95f3a6bbe0240f5242e2acf"],["/textballs/static/js/22.0a9fda11.chunk.js","2e0b84f32fb1b0b72e2544e6faeceab8"],["/textballs/static/js/23.b7a28059.chunk.js","9522af9c8cb3d07c451224820239e098"],["/textballs/static/js/24.15b3d6ff.chunk.js","8b36f3043c34789c34d21b30403d52c6"],["/textballs/static/js/25.afb63376.chunk.js","c7f86d5479e055ae2ecbdd123121bccc"],["/textballs/static/js/26.7fe48de0.chunk.js","1ade8ab8fbed3359fce9588862b4c4b5"],["/textballs/static/js/27.5b449b73.chunk.js","ad7e643c061d0e48447a53c852d420d2"],["/textballs/static/js/28.6588c6ff.chunk.js","b6345b954ae9784a74b6d90b122bf896"],["/textballs/static/js/29.87c823b8.chunk.js","57c9f5c1cc5563027a003aa0d2694f11"],["/textballs/static/js/3.23e051a0.chunk.js","56e02241e1b55ee5b20446b095985ed0"],["/textballs/static/js/30.78786fdc.chunk.js","5d2e410be42ba53200622a703bc3c10c"],["/textballs/static/js/31.1bcbc67b.chunk.js","9315f93febb41af81e0362fdb22ad979"],["/textballs/static/js/32.ca07c436.chunk.js","bdb69e17d852bcf8a366e2c009c994e8"],["/textballs/static/js/33.51cb2bcc.chunk.js","f4fc1c2d02f758f773320674bcbf60f3"],["/textballs/static/js/34.ef7a4256.chunk.js","91e28fd7e298f729f7d17d41e5ef5082"],["/textballs/static/js/35.69a38db5.chunk.js","e22f278ea6f1c6294dd2e9d77345625e"],["/textballs/static/js/36.e18df3b5.chunk.js","50f2cd7991b8f4732fae55a3db231c55"],["/textballs/static/js/37.75ef7bf0.chunk.js","73fd32f295f3c3408c18c5cb6601aedf"],["/textballs/static/js/38.6e5fcf12.chunk.js","d970607b99eeefb6c68de8db88cff8fa"],["/textballs/static/js/39.63501cb3.chunk.js","33933d711709ae182b9c15c626837df8"],["/textballs/static/js/4.cb840175.chunk.js","35d2818f9bd55dbba786f7228e2157f7"],["/textballs/static/js/40.eeed5295.chunk.js","5f856d74c116b6d82361b59ed99a1d35"],["/textballs/static/js/41.4da21986.chunk.js","2bba5b433d3aa6f97592c16ee6890244"],["/textballs/static/js/42.8259cfc1.chunk.js","0e292a4412e02dbba9eb7206eff3fad7"],["/textballs/static/js/43.5b6874c8.chunk.js","91455d5c001cfbcf05cf45abe603fdf5"],["/textballs/static/js/44.d21cce14.chunk.js","3a032a4d9df5a5cabcc7f25d832148be"],["/textballs/static/js/45.cfebb1f7.chunk.js","0a8d04f0720eef9ca90119c8e2c370c1"],["/textballs/static/js/46.36999c5d.chunk.js","619178f6099a1bae0328886847110294"],["/textballs/static/js/47.f440c3db.chunk.js","f867c76d60ecb30158b9461017f86e2e"],["/textballs/static/js/48.7e015b1d.chunk.js","a50ee843583ebeea23a961ead4344eae"],["/textballs/static/js/49.599e7822.chunk.js","2ba2edb63fff7c5f00373d52b655290b"],["/textballs/static/js/5.b4efe4c4.chunk.js","eb139027e9f3f68a6d0235b07030f4f0"],["/textballs/static/js/50.5ea5f319.chunk.js","b16dd0a38a4317e3f46cbd693b75bf12"],["/textballs/static/js/51.1e47e0fc.chunk.js","98c4f90f942c19d2e5f4820539a27c45"],["/textballs/static/js/52.a7a052f0.chunk.js","ae5c16158d370cafc79e5005fa153efe"],["/textballs/static/js/53.11c64c43.chunk.js","0f06d76be348bb774430c3d3931218cf"],["/textballs/static/js/54.91e9ff45.chunk.js","822bfc546a39b849fd5f188877804c78"],["/textballs/static/js/55.c7bb6e40.chunk.js","89b9aa0ebf8e189d00df480e0cce24ee"],["/textballs/static/js/56.388fa928.chunk.js","bd2ff83fd88dea340a02cba264b5e938"],["/textballs/static/js/57.e72a3216.chunk.js","7278edecab8a71e20d8f7c980fa21ba0"],["/textballs/static/js/58.549484da.chunk.js","ed800564a6bdec8f3c6c724a7427cad9"],["/textballs/static/js/59.e2e8721b.chunk.js","4edfafc1c24cf1e5548b303526526923"],["/textballs/static/js/6.499f0a50.chunk.js","85ce4e25aee3444ec5a2b97a3a73e88e"],["/textballs/static/js/60.a19db1bf.chunk.js","02e5e4c7e93d85c64399d8a92692bf7a"],["/textballs/static/js/61.accba545.chunk.js","98ac77dea655ce89d83c96c83a44d73f"],["/textballs/static/js/62.b5ee13fa.chunk.js","5c26beb60beae38bfb93eb1201752035"],["/textballs/static/js/63.645530dc.chunk.js","43fb51bfa1326960ce5a74bdaad4bfd6"],["/textballs/static/js/64.b32c002a.chunk.js","d4f47af0b340c67c9134f8c3ba51c2ff"],["/textballs/static/js/65.2325b3d6.chunk.js","4365566a63c0fbf89f6dfb15b1c69c69"],["/textballs/static/js/66.133661c3.chunk.js","fecb6056d01edc9e5534303b00f13c8e"],["/textballs/static/js/67.58ad34ab.chunk.js","f697e516753e4f9114f0dd1dc3027243"],["/textballs/static/js/68.eaa0822e.chunk.js","9b0a136ed7cbc6f8f74cc5a50d295abc"],["/textballs/static/js/69.2fa172a3.chunk.js","15080ecf8b7d1223456c25e8bffa48ad"],["/textballs/static/js/7.c352d361.chunk.js","171306537c9bc3afc50ce5bc50795483"],["/textballs/static/js/70.e4daedf3.chunk.js","c8dec5400baff2476e599a5a5e607c82"],["/textballs/static/js/71.0dc3ea21.chunk.js","9d42303882868f3c9ed4361c757ce49e"],["/textballs/static/js/72.2e454b05.chunk.js","b94b44ecaa30c05e6e8a5b89e98df72f"],["/textballs/static/js/73.ed2f05de.chunk.js","ae311e22e815ee3cf4c69863340732a0"],["/textballs/static/js/74.50914ae6.chunk.js","d0f8e428d136dac49de3c447facb917c"],["/textballs/static/js/75.b2a9df7a.chunk.js","8014fee39346bc781dee4f8a3fdd8c97"],["/textballs/static/js/76.5481b975.chunk.js","4b7a2f7b6e24ab79bd1056687f68c2fe"],["/textballs/static/js/77.b2d2736e.chunk.js","3f3ed42543328608fb6c9589df59836c"],["/textballs/static/js/78.48d35b74.chunk.js","00a1bc3c08ce94d0faa827508a17de02"],["/textballs/static/js/79.f56cad33.chunk.js","b8fc3aba8d168571dc4b4d2bff843615"],["/textballs/static/js/8.0bdc29d0.chunk.js","62f466d9a6dd0cc22b717a2ef8a0ff06"],["/textballs/static/js/80.3138759d.chunk.js","57a6990b9c53f92d4f22179efca5cc0e"],["/textballs/static/js/81.c1c87b82.chunk.js","af4394b8eb68f73bb30a2371bf82695e"],["/textballs/static/js/82.54efcdd4.chunk.js","519e64299cd037ba535911c407a2bc66"],["/textballs/static/js/83.9b4a43be.chunk.js","c0cfcb1f31de2b753c73d729ef5b2e92"],["/textballs/static/js/84.262779b1.chunk.js","42b0453cbede39a5255ee20f86e866a3"],["/textballs/static/js/85.909ef423.chunk.js","4b3f7592b120b10bb15c65df0dff910d"],["/textballs/static/js/86.a5a18ea5.chunk.js","6a8fbeb571650ced6370bf7d656e0ae5"],["/textballs/static/js/87.e24ab06a.chunk.js","0adbc2bf75cf61b10000f3904f971669"],["/textballs/static/js/88.acc0c189.chunk.js","139afec0bff45ac1818f4a5201e26ec8"],["/textballs/static/js/89.15b14f70.chunk.js","8d43b8b2f2361978cbd1622567a408d5"],["/textballs/static/js/9.e0184ea4.chunk.js","d0878817632d9a167f6d1279ff867b7e"],["/textballs/static/js/90.c979ee1c.chunk.js","29296c13fc2a30c2e3b09161827c28a5"],["/textballs/static/js/91.fe1e32ba.chunk.js","807d2cc5b525019b85cba9c8b1a57799"],["/textballs/static/js/92.b793b150.chunk.js","3be9b5bd193ca4630e3ff5d95f966919"],["/textballs/static/js/93.5ef0e6f7.chunk.js","8d37745cec10446f5d26e54036d901c1"],["/textballs/static/js/94.946fb7ee.chunk.js","659a1c4720e57ad9855e4783985fa948"],["/textballs/static/js/95.6f57849d.chunk.js","27c3a671f101e7d91fff26352ef4a59d"],["/textballs/static/js/96.cc04fd24.chunk.js","6344f85ae32fe2d1ab663603dc9c66b0"],["/textballs/static/js/97.dc3ed17b.chunk.js","961e0bb2117f86933bc5bba9c275b3e3"],["/textballs/static/js/98.612275e0.chunk.js","44be27a7f4e37d9806f92bc0c50aa8f0"],["/textballs/static/js/99.4dbb22c7.chunk.js","739028af0edbd83b902d4310b4f72200"],["/textballs/static/js/main.4384ff21.js","2a722ff81fc8f4428b13aab9af8be03f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),s=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/textballs/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});