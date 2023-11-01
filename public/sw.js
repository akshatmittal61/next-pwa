if (!self.define) {
	let e,
		s = {};
	const n = (n, t) => (
		(n = new URL(n + ".js", t).href),
		s[n] ||
			new Promise((s) => {
				if ("document" in self) {
					const e = document.createElement("script");
					(e.src = n), (e.onload = s), document.head.appendChild(e);
				} else (e = n), importScripts(n), s();
			}).then(() => {
				let e = s[n];
				if (!e)
					throw new Error(`Module ${n} didn’t register its module`);
				return e;
			})
	);
	self.define = (t, a) => {
		const i =
			e ||
			("document" in self ? document.currentScript.src : "") ||
			location.href;
		if (s[i]) return;
		let c = {};
		const o = (e) => n(e, i),
			r = { module: { uri: i }, exports: c, require: o };
		s[i] = Promise.all(t.map((e) => r[e] || o(e))).then(
			(e) => (a(...e), c)
		);
	};
}
define(["./workbox-50de5c5d"], function (e) {
	"use strict";
	importScripts(),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{
					url: "/_next/static/bHBpJwIYjWT4AniEt8xZY/_buildManifest.js",
					revision: "c8a91695f52635b4ace07ea501347280",
				},
				{
					url: "/_next/static/bHBpJwIYjWT4AniEt8xZY/_ssgManifest.js",
					revision: "b6652df95db52feb4daf4eca35380933",
				},
				{
					url: "/_next/static/chunks/framework-2c79e2a64abdb08b.js",
					revision: "2c79e2a64abdb08b",
				},
				{
					url: "/_next/static/chunks/main-96065fde7f2a0352.js",
					revision: "96065fde7f2a0352",
				},
				{
					url: "/_next/static/chunks/pages/_app-1964406d28288008.js",
					revision: "1964406d28288008",
				},
				{
					url: "/_next/static/chunks/pages/_error-54de1933a164a1ff.js",
					revision: "54de1933a164a1ff",
				},
				{
					url: "/_next/static/chunks/pages/index-2fe03ee5895f6503.js",
					revision: "2fe03ee5895f6503",
				},
				{
					url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
					revision: "837c0df77fd5009c9e46d446188ecfd0",
				},
				{
					url: "/_next/static/chunks/webpack-ee7e63bc15b31913.js",
					revision: "ee7e63bc15b31913",
				},
				{
					url: "/_next/static/css/03659d159501d4de.css",
					revision: "03659d159501d4de",
				},
				{
					url: "/_next/static/css/b10244ff95d1ec37.css",
					revision: "b10244ff95d1ec37",
				},
				{
					url: "/favicon.ico",
					revision: "c30c7d42707a47a3f4591831641e50dc",
				},
				{
					url: "/icon-192.png",
					revision: "689d689b2cb373cbba04cd01a51dc286",
				},
				{
					url: "/manifest.json",
					revision: "4e81fb5d68d34d9a63a667fc8c9d0fd2",
				},
				{
					url: "/next.svg",
					revision: "8e061864f388b47f33a1c3780831193e",
				},
				{
					url: "/vercel.svg",
					revision: "61c6b19abff40ea7acd577be818f3976",
				},
			],
			{ ignoreURLParametersMatching: [] }
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			"/",
			new e.NetworkFirst({
				cacheName: "start-url",
				plugins: [
					{
						cacheWillUpdate: async ({
							request: e,
							response: s,
							event: n,
							state: t,
						}) =>
							s && "opaqueredirect" === s.type
								? new Response(s.body, {
										status: 200,
										statusText: "OK",
										headers: s.headers,
								  })
								: s,
					},
				],
			}),
			"GET"
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: "google-fonts-webfonts",
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 4,
						maxAgeSeconds: 31536e3,
					}),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: "google-fonts-stylesheets",
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 4,
						maxAgeSeconds: 604800,
					}),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-font-assets",
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 4,
						maxAgeSeconds: 604800,
					}),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-image-assets",
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 64,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: "next-image",
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 64,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: "static-audio-assets",
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:mp4)$/i,
			new e.CacheFirst({
				cacheName: "static-video-assets",
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-js-assets",
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-style-assets",
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: "next-data",
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: "static-data-assets",
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			"GET"
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				const s = e.pathname;
				return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
			},
			new e.NetworkFirst({
				cacheName: "apis",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 16,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			"GET"
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				return !e.pathname.startsWith("/api/");
			},
			new e.NetworkFirst({
				cacheName: "others",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400,
					}),
				],
			}),
			"GET"
		),
		e.registerRoute(
			({ url: e }) => !(self.origin === e.origin),
			new e.NetworkFirst({
				cacheName: "cross-origin",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 3600,
					}),
				],
			}),
			"GET"
		);
});
