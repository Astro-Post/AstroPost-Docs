const astroConfig = {"base":"/AstroPost-Docs","root":"file:///Users/zylermillet/Library/Mobile%20Documents/com~apple~CloudDocs/AstroPost/Docs/","srcDir":"file:///Users/zylermillet/Library/Mobile%20Documents/com~apple~CloudDocs/AstroPost/Docs/src/","build":{"assets":"_astro"},"markdown":{"shikiConfig":{"langs":[]}}};
const ecIntegrationOptions = {};
let ecConfigFileOptions = {};
try {
	ecConfigFileOptions = (await import('./ec-config_CzTTOeiV.mjs')).default;
} catch (e) {
	console.error('*** Failed to load Expressive Code config file "file:///Users/zylermillet/Library/Mobile%20Documents/com~apple~CloudDocs/AstroPost/Docs/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' + (e?.message || e) + '")\n');
}

export { astroConfig, ecConfigFileOptions, ecIntegrationOptions };
