

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.bde5061a.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.673e915c.js","_app/immutable/chunks/singletons.91aecb90.js"];
export const stylesheets = [];
export const fonts = [];
