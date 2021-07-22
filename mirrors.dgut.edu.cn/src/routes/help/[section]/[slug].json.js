import fs from 'fs';
import marked from 'marked';

export async function get(request) {
	const { section, slug } = request.params;
	const md = await fs.promises.readFile(`help/${section}/${slug}.md`, 'utf-8');
	const html = marked(md);
	return {
		status: 200,
		body: { html }
	}
}