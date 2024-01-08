// public/service-worker.js

const CACHE_NAME = "my-offline-cache";
const urlsToCache = [
	"/",
	"/index.html",
	"/manifest.json",
	"/static/js/bundle.js",
	"/static/js/0.chunk.js",
	"/static/js/main.chunk.js",
	"/static/css/main.chunk.css",
	// Add other paths to static assets like images, fonts, etc.
];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache).then(() => self.skipWaiting());
		})
	);
});

self.addEventListener("activate", (event) => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		})
	);
});
