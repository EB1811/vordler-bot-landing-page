

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.cc726d05.js","_app/immutable/chunks/scheduler.389d799c.js","_app/immutable/chunks/index.d50ceac4.js"];
export const stylesheets = ["_app/immutable/assets/0.25159335.css"];
export const fonts = [];
