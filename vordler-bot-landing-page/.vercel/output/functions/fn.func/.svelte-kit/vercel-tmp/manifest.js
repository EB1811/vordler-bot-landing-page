export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["abstract3.jpg","favicon-32x32.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.74873226.js","app":"_app/immutable/entry/app.9e752770.js","imports":["_app/immutable/entry/start.74873226.js","_app/immutable/chunks/scheduler.389d799c.js","_app/immutable/chunks/singletons.bdcf74eb.js","_app/immutable/entry/app.9e752770.js","_app/immutable/chunks/scheduler.389d799c.js","_app/immutable/chunks/index.d50ceac4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
