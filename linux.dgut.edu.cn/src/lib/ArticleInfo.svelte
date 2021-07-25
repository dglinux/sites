<script>
	export let info;
	let { title, excerpt, category, author } = info.metadata;
	let date = new Date(...info.metadata.date).toLocaleDateString('zh-CN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<article>
	<a sveltekit:prefetch href={info.url}>
		<h2>{title}</h2>
	</a>
	{#if excerpt}
		<p>{excerpt}</p>
	{/if}
	<div>
		<a sveltekit:prefetch href={`/blog/${category}`}>{category}</a>
		<span>By {author}</span>
		<span>{date}</span>
	</div>
</article>

<style>
	article {
		margin-bottom: 3em;
	}
	a {
		text-decoration: none;
	}
	h2 {
		font-weight: 500;
		line-height: 1;
		margin-bottom: 0.3em;
	}
	div {
		text-transform: uppercase;
		font-size: 0.8em;
	}
	span {
		margin-left: 1em;
	}
	p {
		font-size: 1em;
	}
</style>
