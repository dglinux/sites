import fs from 'fs';
import extractorMarked from '@dglinux/sites-common/lib/extractor-marked';

export async function get(request) {
	const files = (await fs.promises.readdir('blog'));
	const posts = await Promise.all(
		files.map(async (post) => {
			const [year, month, date, ...words] = post.split('-');
			const slug = words.join('-').split(/\.md$/)[0];
			const file = await fs.promises.readFile(`blog/${post}`, 'utf-8');
			const { metadata } = extractorMarked(file);
			const url = `/blog/${metadata.category}/${year}/${slug}`;
			return {
				url,
				metadata
			};
		})
	);
	return {
		status: 200,
		body: posts
	}
}
