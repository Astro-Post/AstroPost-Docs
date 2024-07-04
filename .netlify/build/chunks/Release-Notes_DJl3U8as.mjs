import { a as createComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XqfURkcm.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Release, Notes","description":"InfoOn what is new"};
				const file = "/Users/zylermillet/Library/Mobile Documents/com~apple~CloudDocs/AstroPost/Docs/src/content/docs/Release-Notes.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
