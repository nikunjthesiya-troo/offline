// public/service-worker.js

const CACHE_NAME = "my-offline-cache";
const urlsToCache = [
	"/",
	"/index.html",
	"/manifest.json",
	// Add paths to other static assets like images, CSS, and JS files
];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		})
	);
});
