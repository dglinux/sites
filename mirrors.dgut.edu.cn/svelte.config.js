/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		files: {
			assets: 'root'
		},
		paths: {
			assets: ''
		}
	}
};

export default config;
