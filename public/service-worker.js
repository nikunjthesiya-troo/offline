// public/service-worker.js

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open("my-react-app").then((cache) => {
			return cache.addAll([
				"/",
				"/index.html",
				"/static/css/*",
				"/static/js/*",
			]);
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
