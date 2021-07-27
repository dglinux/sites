import fs from 'fs';
import HelpRenderer from '$lib/help-renderer';
import { highlight } from '@dglinux/sites-common/lib/common-renderer';
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
	const renderer = new HelpRenderer(`/${url}`);
	const html = marked(md, { renderer, highlight });
	return {
		status: 200,
		body: {
			html,
			title: renderer.store.title
		}
	};
}
