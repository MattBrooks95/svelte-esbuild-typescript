const esbuild = require("esbuild");
const esbuildSvelte = require("esbuild-svelte");
const sveltePreprocess = require("svelte-preprocess");

esbuild.build({
	entryPoints: ["./src/app.ts"],
	bundle: true,
	outdir: "./build",
	plugins: [
		esbuildSvelte({
			preprocess: sveltePreprocess(),
		}),
	],
}).catch(() => process.exit());
