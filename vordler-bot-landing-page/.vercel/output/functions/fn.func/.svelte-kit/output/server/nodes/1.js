

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6385efeb.js","_app/immutable/chunks/scheduler.389d799c.js","_app/immutable/chunks/index.d50ceac4.js","_app/immutable/chunks/singletons.387b605b.js"];
export const stylesheets = [];
export const fonts = [];
