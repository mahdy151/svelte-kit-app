import cloudflare from "@sveltejs/adapter-cloudflare"
import adapter from 'svelte-adapter-bun'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: cloudflare({
			assets: true,
			dynamic_origin: true,
			// precompress: true,
			precompress: {
				brotli: true,
				gzip: true,
			},
		})
	}
}

export default config
