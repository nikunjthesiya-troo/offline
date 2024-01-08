// public/service-worker.js

const CACHE_NAME = "my-offline-cache";
const urlsToCache = [
	"/",
	"/index.html",
	"/manifest.json",
	"/favicon.ico",
	"/static/js/main.chunk.js",
	"/static/js/0.chunk.js",
	"/static/js/bundle.js",
	"/static/css/main.chunk.css",
];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches
			.match(event.request)
			.then((response) => response || fetch(event.request))
	);
});
