importScripts("/precache-manifest.0fa07e0116bd1cdd86e893b2ab385957.js", "https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/* eslint-disable */
workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

workbox.routing.registerRoute(
  new RegExp('/'),
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  new RegExp('(.*)/api/(.*)$'),
  workbox.strategies.networkFirst()
)


