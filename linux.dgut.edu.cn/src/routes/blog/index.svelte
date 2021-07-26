<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/blog.json');
		return { props: { posts: await res.json() } };
	}
</script>

<script>
	export let posts;
	import ArticleInfo from '$lib/ArticleInfo.svelte';
</script>

<svelte:head>
	<title>博客 - 东莞理工学院 GNU/Linux 协会</title>
</svelte:head>
<div>
	{#each posts as info (info.url)}
		<article>
			<ArticleInfo {info} />
		</article>
	{/each}
</div>

<style>
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
	article:first-child :global(h2) {
		font-size: 2.4em;
	}
	article:first-child::before {
		content: '最新文章';
	}
	article:nth-child(2)::before {
		content: '往期文章';
		margin-top: 3em;
	}
	article:first-child::before,
	article:nth-child(2)::before {
		letter-spacing: 0.5px;
		opacity: 0.7;
		display: block;
		border-bottom: 1px solid #555;
		margin-bottom: 1em;
	}
</style>
