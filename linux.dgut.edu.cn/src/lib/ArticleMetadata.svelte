<script>
	export let category;
	export let author;
	export let date;
	let dateFormatted = new Date(...date).toLocaleDateString('zh-CN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<a sveltekit:prefetch href={`/blog/${category}`}>{category}</a>
<a sveltekit:prefetch href={`/people/${author}`}>By {author}</a>
<span>{dateFormatted}</span>

<style>
	* {
		text-transform: uppercase;
		font-size: 0.8em;
	}
	span {
		margin-left: 1em;
	}
</style>
