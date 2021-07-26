import fs from 'fs';
import helpRenderer from '$lib/help-renderer';
import marked from 'marked';

export async function get(request) {
	const { section, slug } = request.params;
	// Prevent injection
	if (!/[A-Za-z\-]+/.test(section)) {
		return { status: 404 };
	}
	const url = `help/${section}/${slug}.md`;
	let md;
	try {
		md = await fs.promises.readFile(url, 'utf-8');
	} catch (err) {
		return {
			status: 404
		};
	}
	const [renderer, store] = helpRenderer(`/${url}`);
	const html = marked(md, { renderer });
	return {
		status: 200,
		body: {
			html,
			title: store.title
		}
	};
}
