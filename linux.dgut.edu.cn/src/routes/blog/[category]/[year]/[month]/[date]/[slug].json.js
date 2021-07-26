import fs from 'fs';
import { extractFrontMatter } from '$lib/front-matter';
import renderer from '$lib/blog-renderer';
import marked from 'marked';

export async function get(request) {
	const { category, year, month, date, slug } = request.params;
	const file = `blog/${year}-${month}-${date}-${slug}.md`;
	let md;
	try {
		md = await fs.promises.readFile(file, 'utf-8');
	} catch (err) {
		return { status: 404 };
	}
	const { metadata, content } = extractFrontMatter(md);
	const html = marked(content, { renderer });
	if (metadata.category !== category) {
		return { status: 404 };
	}
	return {
		status: 200,
		body: { html, metadata }
	};
}
