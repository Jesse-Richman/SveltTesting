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
				// Configure Vite for HMR with Gitpod.
				hmr: process.env.GITPOD_WORKSPACE_URL
				? {
					// Due to port fowarding, we have to replace
					// 'https' with the forwarded port, as this
					// is the URI created by Gitpod.
					host: process.env.GITPOD_WORKSPACE_URL.replace("https://", "3000-"),
					protocol: "wss",
					clientPort: process.env.GITPOD_WORKSPACE_URL ? 443 : 3000
				  }
				: true
			}
		}
	}
};

export default config;
