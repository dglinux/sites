import getPosts from './_posts';

export async function get(request) {
	const posts = await getPosts();
	return {
		status: 200,
		body: posts
	};
}
