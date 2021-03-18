(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1616049795005;

	const files = [
		"/service-worker-index.html",
		"/data/steam-game.csv",
		"/favicon.png",
		"/global.css",
		"/icons/steam.svg"
	];

	const shell = [
		"/client/client.a39b1d8a.js",
		"/client/inject_styles.5607aec6.js",
		"/client/index.e139cc72.js",
		"/client/index.e5b34522.js",
		"/client/DynamicTrend.dbe43464.js",
		"/client/PopularityBarChart.dea39bd0.js",
		"/client/PopularitySharePieChart.d6b2f2bd.js",
		"/client/operation.6e105956.js",
		"/client/sapper-dev-client.1e7a4a5e.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const staticAssets = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});


	/**
	 * Fetch the asset from the network and store it in the cache. 
	 * Fall back to the cache if the user is offline.
	 */
	async function fetchAndCache(request) {
		const cache = await caches.open(`offline${timestamp}`);

		try {
			const response = await fetch(request);
			cache.put(request, response.clone());
			return response;
		} catch (err) {
			const response = await cache.match(request);
			if (response) return response;

			throw err;
		}
	}

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		const isHttp = url.protocol.startsWith('http');
		const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
		const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
		const skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset;

		if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
			event.respondWith(
				(async () => {
					// always serve static files and bundler-generated assets from cache.
					// if your application has other URLs with data that will never change,
					// set this variable to true for them and they will only be fetched once.
					const cachedAsset = isStaticAsset && await caches.match(event.request);

					// for pages, you might want to serve a shell `service-worker-index.html` file,
					// which Sapper has generated for you. It's not right for every
					// app, but if it's right for yours then uncomment this section
					/*
					if (!cachedAsset && url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
						return caches.match('/service-worker-index.html');
					}
					*/

					return cachedAsset || fetchAndCache(event.request);
				})()
			);
		}
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTYxNjA0OTc5NTAwNTtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcIi9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sXCIsXG5cdFwiL2RhdGEvc3RlYW0tZ2FtZS5jc3ZcIixcblx0XCIvZmF2aWNvbi5wbmdcIixcblx0XCIvZ2xvYmFsLmNzc1wiLFxuXHRcIi9pY29ucy9zdGVhbS5zdmdcIlxuXTtcbmV4cG9ydCB7IGZpbGVzIGFzIGFzc2V0cyB9OyAvLyBsZWdhY3lcblxuZXhwb3J0IGNvbnN0IHNoZWxsID0gW1xuXHRcIi9jbGllbnQvY2xpZW50LmEzOWIxZDhhLmpzXCIsXG5cdFwiL2NsaWVudC9pbmplY3Rfc3R5bGVzLjU2MDdhZWM2LmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC5lMTM5Y2M3Mi5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguZTViMzQ1MjIuanNcIixcblx0XCIvY2xpZW50L0R5bmFtaWNUcmVuZC5kYmU0MzQ2NC5qc1wiLFxuXHRcIi9jbGllbnQvUG9wdWxhcml0eUJhckNoYXJ0LmRlYTM5YmQwLmpzXCIsXG5cdFwiL2NsaWVudC9Qb3B1bGFyaXR5U2hhcmVQaWVDaGFydC5kNmIyZjJiZC5qc1wiLFxuXHRcIi9jbGllbnQvb3BlcmF0aW9uLjZlMTA1OTU2LmpzXCIsXG5cdFwiL2NsaWVudC9zYXBwZXItZGV2LWNsaWVudC4xZTdhNGE1ZS5qc1wiXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuXHR7IHBhdHRlcm46IC9eXFwvJC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3N0ZWFtLWdhbWVcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3N0ZWFtLWdhbWVcXC9Qb3B1bGFyaXR5U2hhcmVQaWVDaGFydFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3RlYW0tZ2FtZVxcL1BvcHVsYXJpdHlCYXJDaGFydFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3RlYW0tZ2FtZVxcL0R5bmFtaWNUcmVuZFxcLz8kLyB9XG5dOyIsImltcG9ydCB7IHRpbWVzdGFtcCwgZmlsZXMsIHNoZWxsIH0gZnJvbSAnQHNhcHBlci9zZXJ2aWNlLXdvcmtlcic7XG5cbmNvbnN0IEFTU0VUUyA9IGBjYWNoZSR7dGltZXN0YW1wfWA7XG5cbi8vIGBzaGVsbGAgaXMgYW4gYXJyYXkgb2YgYWxsIHRoZSBmaWxlcyBnZW5lcmF0ZWQgYnkgdGhlIGJ1bmRsZXIsXG4vLyBgZmlsZXNgIGlzIGFuIGFycmF5IG9mIGV2ZXJ5dGhpbmcgaW4gdGhlIGBzdGF0aWNgIGRpcmVjdG9yeVxuY29uc3QgdG9fY2FjaGUgPSBzaGVsbC5jb25jYXQoZmlsZXMpO1xuY29uc3Qgc3RhdGljQXNzZXRzID0gbmV3IFNldCh0b19jYWNoZSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGV2ZW50ID0+IHtcblx0ZXZlbnQud2FpdFVudGlsKFxuXHRcdGNhY2hlc1xuXHRcdFx0Lm9wZW4oQVNTRVRTKVxuXHRcdFx0LnRoZW4oY2FjaGUgPT4gY2FjaGUuYWRkQWxsKHRvX2NhY2hlKSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0c2VsZi5za2lwV2FpdGluZygpO1xuXHRcdFx0fSlcblx0KTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgZXZlbnQgPT4ge1xuXHRldmVudC53YWl0VW50aWwoXG5cdFx0Y2FjaGVzLmtleXMoKS50aGVuKGFzeW5jIGtleXMgPT4ge1xuXHRcdFx0Ly8gZGVsZXRlIG9sZCBjYWNoZXNcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcblx0XHRcdFx0aWYgKGtleSAhPT0gQVNTRVRTKSBhd2FpdCBjYWNoZXMuZGVsZXRlKGtleSk7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGYuY2xpZW50cy5jbGFpbSgpO1xuXHRcdH0pXG5cdCk7XG59KTtcblxuXG4vKipcbiAqIEZldGNoIHRoZSBhc3NldCBmcm9tIHRoZSBuZXR3b3JrIGFuZCBzdG9yZSBpdCBpbiB0aGUgY2FjaGUuIFxuICogRmFsbCBiYWNrIHRvIHRoZSBjYWNoZSBpZiB0aGUgdXNlciBpcyBvZmZsaW5lLlxuICovXG5hc3luYyBmdW5jdGlvbiBmZXRjaEFuZENhY2hlKHJlcXVlc3QpIHtcblx0Y29uc3QgY2FjaGUgPSBhd2FpdCBjYWNoZXMub3Blbihgb2ZmbGluZSR7dGltZXN0YW1wfWApXG5cblx0dHJ5IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuXHRcdGNhY2hlLnB1dChyZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcblx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGUubWF0Y2gocmVxdWVzdCk7XG5cdFx0aWYgKHJlc3BvbnNlKSByZXR1cm4gcmVzcG9uc2U7XG5cblx0XHR0aHJvdyBlcnI7XG5cdH1cbn1cblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIGV2ZW50ID0+IHtcblx0aWYgKGV2ZW50LnJlcXVlc3QubWV0aG9kICE9PSAnR0VUJyB8fCBldmVudC5yZXF1ZXN0LmhlYWRlcnMuaGFzKCdyYW5nZScpKSByZXR1cm47XG5cblx0Y29uc3QgdXJsID0gbmV3IFVSTChldmVudC5yZXF1ZXN0LnVybCk7XG5cblx0Ly8gZG9uJ3QgdHJ5IHRvIGhhbmRsZSBlLmcuIGRhdGE6IFVSSXNcblx0Y29uc3QgaXNIdHRwID0gdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHAnKTtcblx0Y29uc3QgaXNEZXZTZXJ2ZXJSZXF1ZXN0ID0gdXJsLmhvc3RuYW1lID09PSBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICYmIHVybC5wb3J0ICE9PSBzZWxmLmxvY2F0aW9uLnBvcnQ7XG5cdGNvbnN0IGlzU3RhdGljQXNzZXQgPSB1cmwuaG9zdCA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0ICYmIHN0YXRpY0Fzc2V0cy5oYXModXJsLnBhdGhuYW1lKTtcblx0Y29uc3Qgc2tpcEJlY2F1c2VVbmNhY2hlZCA9IGV2ZW50LnJlcXVlc3QuY2FjaGUgPT09ICdvbmx5LWlmLWNhY2hlZCcgJiYgIWlzU3RhdGljQXNzZXQ7XG5cblx0aWYgKGlzSHR0cCAmJiAhaXNEZXZTZXJ2ZXJSZXF1ZXN0ICYmICFza2lwQmVjYXVzZVVuY2FjaGVkKSB7XG5cdFx0ZXZlbnQucmVzcG9uZFdpdGgoXG5cdFx0XHQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHQvLyBhbHdheXMgc2VydmUgc3RhdGljIGZpbGVzIGFuZCBidW5kbGVyLWdlbmVyYXRlZCBhc3NldHMgZnJvbSBjYWNoZS5cblx0XHRcdFx0Ly8gaWYgeW91ciBhcHBsaWNhdGlvbiBoYXMgb3RoZXIgVVJMcyB3aXRoIGRhdGEgdGhhdCB3aWxsIG5ldmVyIGNoYW5nZSxcblx0XHRcdFx0Ly8gc2V0IHRoaXMgdmFyaWFibGUgdG8gdHJ1ZSBmb3IgdGhlbSBhbmQgdGhleSB3aWxsIG9ubHkgYmUgZmV0Y2hlZCBvbmNlLlxuXHRcdFx0XHRjb25zdCBjYWNoZWRBc3NldCA9IGlzU3RhdGljQXNzZXQgJiYgYXdhaXQgY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpO1xuXG5cdFx0XHRcdC8vIGZvciBwYWdlcywgeW91IG1pZ2h0IHdhbnQgdG8gc2VydmUgYSBzaGVsbCBgc2VydmljZS13b3JrZXItaW5kZXguaHRtbGAgZmlsZSxcblx0XHRcdFx0Ly8gd2hpY2ggU2FwcGVyIGhhcyBnZW5lcmF0ZWQgZm9yIHlvdS4gSXQncyBub3QgcmlnaHQgZm9yIGV2ZXJ5XG5cdFx0XHRcdC8vIGFwcCwgYnV0IGlmIGl0J3MgcmlnaHQgZm9yIHlvdXJzIHRoZW4gdW5jb21tZW50IHRoaXMgc2VjdGlvblxuXHRcdFx0XHQvKlxuXHRcdFx0XHRpZiAoIWNhY2hlZEFzc2V0ICYmIHVybC5vcmlnaW4gPT09IHNlbGYub3JpZ2luICYmIHJvdXRlcy5maW5kKHJvdXRlID0+IHJvdXRlLnBhdHRlcm4udGVzdCh1cmwucGF0aG5hbWUpKSkge1xuXHRcdFx0XHRcdHJldHVybiBjYWNoZXMubWF0Y2goJy9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ki9cblxuXHRcdFx0XHRyZXR1cm4gY2FjaGVkQXNzZXQgfHwgZmV0Y2hBbmRDYWNoZShldmVudC5yZXF1ZXN0KTtcblx0XHRcdH0pKClcblx0XHQpO1xuXHR9XG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Q0FBQTtDQUNPLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUN2QztDQUNPLE1BQU0sS0FBSyxHQUFHO0NBQ3JCLENBQUMsNEJBQTRCO0NBQzdCLENBQUMsc0JBQXNCO0NBQ3ZCLENBQUMsY0FBYztDQUNmLENBQUMsYUFBYTtDQUNkLENBQUMsa0JBQWtCO0NBQ25CLENBQUMsQ0FBQztBQUVGO0NBQ08sTUFBTSxLQUFLLEdBQUc7Q0FDckIsQ0FBQyw0QkFBNEI7Q0FDN0IsQ0FBQyxtQ0FBbUM7Q0FDcEMsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQyxrQ0FBa0M7Q0FDbkMsQ0FBQyx3Q0FBd0M7Q0FDekMsQ0FBQyw2Q0FBNkM7Q0FDOUMsQ0FBQywrQkFBK0I7Q0FDaEMsQ0FBQyx1Q0FBdUM7Q0FDeEMsQ0FBQzs7Q0NwQkQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNuQztDQUNBO0NBQ0E7Q0FDQSxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQ3JDLE1BQU0sWUFBWSxHQUFHLElBQUks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
