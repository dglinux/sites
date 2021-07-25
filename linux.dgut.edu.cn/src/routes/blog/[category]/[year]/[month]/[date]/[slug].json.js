import fs from 'fs';
import extractorMarked from '@dglinux/sites-common/lib/extractor-marked';

export async function get(request) {
	const { category, year, month, date, slug } = request.params;
	const url = `/blog/${category}/${year}/${month}/${date}/${slug}.md`;
	const file = `blog/${year}-${month}-${date}-${slug}.md`;
	let md;
	try {
		md = await fs.promises.readFile(file, 'utf-8');
	} catch (err) {
		return { status: 404 };
	}
	const body = extractorMarked(md, url);
	return {
		status: 200,
		body
	}
}
