/* empty css                         */
import { d as createAstro, a as createComponent, b as renderTemplate, e as renderComponent } from './astro/server_XqfURkcm.mjs';
import 'kleur/colors';
import { p as paths, a as generateRouteData, $ as $$Page } from './route-data_4gq42bCy.mjs';

const $$Astro = createAstro("https://airpioa.github.io");
const prerender = true;
async function getStaticPaths() {
  return paths;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { Content, headings } = await Astro2.props.entry.render();
  const route = generateRouteData({ props: { ...Astro2.props, headings }, url: Astro2.url });
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { ...route }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, { "frontmatter": Astro2.props.entry.data })}` })}`;
}, "/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/index.astro", void 0);

const $$file = "/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, getStaticPaths, prerender, $$url as url };
