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
		<ArticleInfo {info} />
	{/each}
</div>

<style>
	div {
		max-width: 40em;
		margin: 2.5em auto 4em auto;
	}
	div :global(article h2) {
		font-size: 1.5em;
	}
	div :global(article:first-child h2) {
		font-size: 2.4em;
	}
	div :global(article:first-child::before) {
		content: '最新文章';
	}
	div :global(article:nth-child(2)::before) {
		content: '往期文章';
		margin-top: 3em;
	}
	div :global(article:first-child::before),
	div :global(article:nth-child(2)::before) {
		letter-spacing: 0.5px;
		opacity: 0.7;
		display: block;
		border-bottom: 1px solid #555;
		margin-bottom: 1em;
	}
</style>
