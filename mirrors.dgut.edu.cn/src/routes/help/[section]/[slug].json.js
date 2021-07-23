import fs from 'fs';
import extractorMarked from '$lib/extractor-marked';

export async function get(request) {
	const { section, slug } = request.params;
	const url = `help/${section}/${slug}.md`;
	let md;
	try {
		md = await fs.promises.readFile(url, 'utf-8');
	} catch (err) {
		return {
			status: 404
		}
	}
	const { html, title } = extractorMarked(md, `/${url}`);
	return {
		status: 200,
		body: {
			html,
			title
		}
	}
}