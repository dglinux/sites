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
					// Use .mjs suffix and Node and invoke it directly
					outfile: 'build/index.mjs',
					// Let's bundle all our production depencencies
					external: ['fsevent']
				};
			}
		}),
		// Where compiled JS and CSS are stored
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
