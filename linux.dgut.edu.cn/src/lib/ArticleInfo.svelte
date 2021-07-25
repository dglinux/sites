<script>
	export let info;
	let { title, excerpt, category, author, date } = info.metadata;
	import ArticleMetadata from '$lib/ArticleMetadata.svelte';
</script>

<a sveltekit:prefetch href={info.url}>
	<h2>{title}</h2>
</a>
{#if excerpt}
	<p>{excerpt}</p>
{/if}
<div>
	<ArticleMetadata {category} {author} {date} />
</div>

<style>
	a {
		text-decoration: none;
	}
	h2 {
		font-weight: 500;
		line-height: 1;
		margin-bottom: 0.3em;
	}
	p {
		font-size: 1em;
	}
</style>
