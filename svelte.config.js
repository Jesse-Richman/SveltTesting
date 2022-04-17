import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			server: {
				hmr: {
					host: process.env.HMR_HOST ? process.env.HMR_HOST.substring("https://".length) : "localhost",
					protocol: 'wss',
					clientPort: process.env.HMR_HOST ? 443 : 3000
				}
			}
		}
	}
};

export default config;
