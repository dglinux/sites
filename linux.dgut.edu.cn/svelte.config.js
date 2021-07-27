import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: node({
			esbuild(defaultOptions) {
				return {
					...defaultOptions,
					// Let's bundle all our production depencencies
					external: ['fsevent']
				};
			}
		}),
		appDir: 'assets/app',
		files: {
			// fs: public/ -> web: /
			assets: 'public'
		},
		paths: {
			assets: ''
		}
	}
};

export default config;
