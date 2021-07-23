/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
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
