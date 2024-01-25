export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["abstract3.jpg","favicon-32x32.png","favicon.ico","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".ico":"image/vnd.microsoft.icon",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.549d017e.js","app":"_app/immutable/entry/app.36cd995c.js","imports":["_app/immutable/entry/start.549d017e.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/singletons.3d0fa412.js","_app/immutable/entry/app.36cd995c.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.673e915c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
