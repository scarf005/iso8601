import { defineConfig } from "npm:vite@5.2.11"
import viteDeno from "https://deno.land/x/vite_deno_plugin@v0.9.4/mod.ts"

export default defineConfig({
	plugins: [
		// @ts-expect-error: plugin type outdated
		viteDeno({
			importMapFilename: import.meta.dirname + "/deno.jsonc",
		}),
	],
	base: "/iso8601/",
	build: {
		minify: false,
		modulePreload: false,
		sourcemap: true,
		target: "esnext",
		rollupOptions: {
			external: [/https.*/],
		},
	},
})
