export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["abstract3.jpg","favicon-32x32.png","favicon.ico"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":"_app/immutable/entry/start.cfe45901.js","app":"_app/immutable/entry/app.1c89cd0b.js","imports":["_app/immutable/entry/start.cfe45901.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/singletons.3e1dfcb9.js","_app/immutable/entry/app.1c89cd0b.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.673e915c.js"],"stylesheets":[],"fonts":[]},
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
