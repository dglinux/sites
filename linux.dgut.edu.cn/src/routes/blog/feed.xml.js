import getPosts from './_posts';
import RSS from 'rss';

export async function get(request) {
	const posts = await getPosts(true);
	let feed = new RSS({
		title: '东莞理工学院 GNU/Linux 协会',
		feed_url: 'https://linux.dgut.edu.cn/blog/feed.xml',
		site_url: 'https://linux.dgut.edu.cn/blog'
	});
	for (const post of posts) {
		feed.item({
			title: post.metadata.title,
			description: post.html,
			author: post.metadata.author,
			date: new Date(...post.metadata.date),
			categories: [post.metadata.category],
			url: `https://linux.dgut.edu.cn${post.url}`,
			guid: post.url
		});
	}
	return {
		status: 200,
		body: feed.xml()
	};
}
