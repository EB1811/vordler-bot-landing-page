

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7e5466d1.js","_app/immutable/chunks/scheduler.389d799c.js","_app/immutable/chunks/index.d50ceac4.js"];
export const stylesheets = [];
export const fonts = [];
