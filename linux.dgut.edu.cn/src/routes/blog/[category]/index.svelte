<script context="module">
	export async function load({ fetch, page: { params } }) {
		const res = await fetch('/blog.json');
		const posts = await res.json();
		const filteredPosts = posts.filter((post) => post.metadata.category === params.category);
		return {
			props: {
				posts: filteredPosts
			}
		};
	}
</script>

<script>
	export let posts;
	let category = posts[0].metadata.category;
	import ArticleInfo from '$lib/ArticleInfo.svelte';
</script>

<svelte:head>
	<title>{category} 分类 - 博客 - 东莞理工学院 GNU/Linux 协会</title>
</svelte:head>
<div>
	<h1>{category} 分类</h1>
	{#each posts as info (info.url)}
		<article>
			<ArticleInfo {info} />
		</article>
	{/each}
</div>

<style>
	h1 {
		font-weight: 500;
		font-size: 2em;
		margin-bottom: 1em;
		text-transform: uppercase;
	}
	div {
		max-width: 40em;
		margin: 2.5em auto 4em auto;
	}
	article {
		margin-bottom: 3em;
	}
	article :global(h2) {
		font-size: 1.5em;
	}
</style>
