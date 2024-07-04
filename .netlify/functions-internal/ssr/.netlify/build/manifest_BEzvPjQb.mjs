import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_XqfURkcm.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/404","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/starlight/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/AstroPost-Docs/_astro/page.LS5KDvwX.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://airpioa.github.io","base":"/AstroPost-Docs","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:node_modules/@astrojs/starlight/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/utils/routing.ts",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:node_modules/@astrojs/starlight/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/utils/navigation.ts",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/components/SidebarSublist.astro",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/components/Sidebar.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:starlight/components/Sidebar",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/components/Page.astro",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/utils/route-data.ts",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/utils/translations.ts",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/internal.ts",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro-expressive-code/preprocess-config",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/astro-expressive-code/components/renderer.ts",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/astro-expressive-code/components/Code.astro",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/astro-expressive-code/components/index.ts",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/components.ts",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/components/Footer.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:starlight/components/Footer",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/src/content/docs/index.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/src/content/docs/index.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/user-components/Aside.astro",{"propagation":"in-tree","containsHead":false}],["/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/user-components/FileTree.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/@astrojs/starlight/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:node_modules/@astrojs/starlight/index@_@astro":"pages/_---slug_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BEzvPjQb.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_DvuRVuPj.mjs","/node_modules/@astrojs/starlight/404.astro":"chunks/404_40TnAV-X.mjs","/node_modules/@astrojs/starlight/index.astro":"chunks/index_DCmzIpmX.mjs","/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/src/content/docs/Release-Notes.md?astroContentCollectionEntry=true":"chunks/Release-Notes_DYLDv3V-.mjs","/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/src/content/docs/index.mdx?astroContentCollectionEntry=true":"chunks/index_ON7OBm1Z.mjs","/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/src/content/docs/Release-Notes.md?astroPropagatedAssets":"chunks/Release-Notes_LWR_qtfD.mjs","/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/src/content/docs/index.mdx?astroPropagatedAssets":"chunks/index_C-hUL2ic.mjs","\u0000virtual:astro-expressive-code/config":"chunks/config_BVfU4pUN.mjs","/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/astro-expressive-code/dist/index.js":"chunks/index_DaVK51eC.mjs","\u0000virtual:astro-expressive-code/preprocess-config":"chunks/preprocess-config_D9sErk8X.mjs","/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/src/content/docs/Release-Notes.md":"chunks/Release-Notes_DJl3U8as.mjs","/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/src/content/docs/index.mdx":"chunks/index_CyYb2_FQ.mjs","\u0000virtual:astro-expressive-code/ec-config":"chunks/ec-config_CzTTOeiV.mjs","/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/user-components/Tabs.astro?astro&type=script&index=0&lang.ts":"_astro/Tabs.astro_astro_type_script_index_0_lang.CCIyraCc.js","/astro/hoisted.js?q=0":"_astro/hoisted.XYY0vtly.js","astro:scripts/page.js":"_astro/page.LS5KDvwX.js","/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs":"_astro/ui-core.CdA8LhnC.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/AstroPost-Docs/_astro/ec.d6kn2.css","/AstroPost-Docs/_astro/ec.3zb7u.js","/AstroPost-Docs/_astro/houston.CZZyCf7p.webp","/AstroPost-Docs/_astro/index.CH18LGIn.css","/AstroPost-Docs/favicon.svg","/AstroPost-Docs/_astro/Tabs.astro_astro_type_script_index_0_lang.CCIyraCc.js","/AstroPost-Docs/_astro/hoisted.XYY0vtly.js","/AstroPost-Docs/_astro/page.LS5KDvwX.js","/AstroPost-Docs/_astro/ui-core.CdA8LhnC.js","/AstroPost-Docs/_astro/page.LS5KDvwX.js","/AstroPost-Docs/404.html"],"i18n":{"strategy":"pathname-prefix-other-locales","locales":["en"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
