import fs from 'fs';
import extractorMarked from '@dglinux/sites-common/lib/extractor-marked';

function dateToTime(date) {
	return (new Date(...date)).getTime();
}

export async function get(request) {
	const files = (await fs.promises.readdir('blog'));
	const posts = await Promise.all(
		files.map(async (post) => {
			const [year, month, date, ...words] = post.split('-');
			const slug = words.join('-').split(/\.md$/)[0];
			const file = await fs.promises.readFile(`blog/${post}`, 'utf-8');
			const { metadata } = extractorMarked(file);
			metadata.date = [parseInt(year), parseInt(month) - 1, parseInt(date)];
			const url = `/blog/${metadata.category}/${year}/${month}/${date}/${slug}`;
			return {
				url,
				metadata
			};
		})
	);
	posts.sort((a, b) =>
		dateToTime(b.metadata.date) - dateToTime((a.metadata.date)));
	return {
		status: 200,
		body: posts
	}
}
