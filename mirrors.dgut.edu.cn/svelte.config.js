/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// Where compiled JS and CSS are stored
		appDir: 'assets/app',
		files: {
			// fs: root -> web: /
			assets: 'root'
		},
		paths: {
			assets: ''
		}
	}
};

export default config;
