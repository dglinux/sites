<script context="module">
	export async function load({ fetch, page }) {
		const { category, year, month, date, slug } = page.params;
		const res = await fetch(`/blog/${category}/${year}/${month}/${date}/${slug}.json`);
		return {
			props: {
				post: await res.json(),
				date: [parseInt(year), parseInt(month) - 1, parseInt(date)]
			}
		};
	}
</script>

<script>
	export let post;
	export let date;
	let { title, category, author } = post.metadata;
	import Article from '@dglinux/sites-common/lib/Article.svelte';
	import ArticleMetadata from '$lib/ArticleMetadata.svelte';
</script>

<svelte:head>
	<title>{title} - 博客 - 东莞理工学院 GNU/Linux 协会</title>
</svelte:head>
<article>
	<h1>{title}</h1>
	<div>
		<ArticleMetadata {category} {author} {date} />
	</div>
	<Article>
		{@html post.html}
	</Article>
</article>

<style>
	article {
		max-width: 40em;
		margin: 2.5em auto 4em auto;
	}
	h1 {
		font-size: 3rem;
		line-height: 3.125rem;
		font-weight: 400;
	}
	div {
		margin-bottom: 1.8em;
	}
	@media screen and (max-width: 767px) {
		h1 {
			font-size: 2.125rem;
			line-height: 2.5rem;
		}
	}
</style>
