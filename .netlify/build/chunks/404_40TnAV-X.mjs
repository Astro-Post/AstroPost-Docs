/* empty css                         */
import { a as createComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as createAstro, e as renderComponent } from './astro/server_XqfURkcm.mjs';
import 'kleur/colors';
import { s as starlightConfig, u as useTranslations, g as getEntry, a as generateRouteData, $ as $$Page, B as BuiltInDefaultLocale } from './route-data_4gq42bCy.mjs';
import 'clsx';

const html = "";

				const frontmatter = {};
				const file = "/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/components/EmptyMarkdown.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const $$Astro = createAstro("https://airpioa.github.io");
const prerender = true;
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { lang = BuiltInDefaultLocale.lang, dir = BuiltInDefaultLocale.dir } = starlightConfig.defaultLocale || {};
  let locale = starlightConfig.defaultLocale?.locale;
  if (locale === "root") locale = void 0;
  const entryMeta = { dir, lang, locale };
  const t = useTranslations(locale);
  const fallbackEntry = {
    slug: "404",
    id: "404.md",
    body: "",
    collection: "docs",
    data: {
      title: "404",
      template: "splash",
      editUrl: false,
      head: [],
      hero: { tagline: t("404.text"), actions: [] },
      pagefind: false,
      sidebar: { hidden: false, attrs: {} },
      draft: false
    },
    render: async () => ({
      Content: Content,
      headings: [],
      remarkPluginFrontmatter: {}
    })
  };
  const userEntry = await getEntry("docs", "404");
  const entry = userEntry || fallbackEntry;
  const { Content: Content$1, headings } = await entry.render();
  const route = generateRouteData({
    props: { ...entryMeta, entryMeta, headings, entry, id: entry.id, slug: entry.slug },
    url: Astro2.url
  });
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { ...route }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content$1, {})}` })}`;
}, "/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/404.astro", void 0);

const $$file = "/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/node_modules/@astrojs/starlight/404.astro";
const $$url = undefined;

export { $$404 as default, $$file as file, prerender, $$url as url };
