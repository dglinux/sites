<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/blog.json');
		return { props: { blog: await res.json() } };
	}
</script>

<script>
	export let blog;
	import people from '$lib/people';
	import { page } from '$app/stores';
	const id = $page.path.split('/')[2];
	const person = people[id];
	const name = person.full || id;
	const posts = blog.filter((post) => post.metadata.author === id);

	import Avatar from '$lib/Avatar.svelte';
	import ArticleInfo from '$lib/ArticleInfo.svelte';
	import Icon from '@dglinux/sites-common/lib/Icon.svelte';
	import { mdiEmail, mdiGithub, mdiHome } from '@mdi/js';
</script>

<svelte:head>
	<title>{name} - 东莞理工学院 GNU/Linux 协会</title>
</svelte:head>
<div class="container">
	<div class="title">
		<Avatar {id} full={person.full} src={person.avatar} />
		<h1>{name}</h1>
	</div>
    {#if person.desc}
        <p>{person.desc}</p>
    {/if}
	<div class="social">
		{#if person.home}
			<span>
				<Icon icon={mdiHome} />
				<a href={person.home}>{person.home.replace(/^\w+:\/\//, '')}</a>
			</span>
		{/if}
		{#if person.github}
			<span>
				<Icon icon={mdiGithub} />
				<a href={`https://github.com/${person.github}`}>@{person.github}</a>
			</span>
		{/if}
		{#if person.mail}
			<span>
				<Icon icon={mdiEmail} />
				{person.mail}
			</span>
		{/if}
	</div>
	<div>
		{#each posts as post}
			<article><ArticleInfo info={post} /></article>
		{/each}
	</div>
</div>

<style>
	.container {
		max-width: 44em;
		margin: 2.5em auto;
	}
	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	h1 {
		font-weight: 400;
		font-size: 2em;
		margin-left: 0.5em;
	}
    p {
        margin: 1em 0;
    }
	.social {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
	}
	span {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-right: 0.5em;
		column-gap: 0.2em;
	}
	span :global(svg) {
		height: 1.2em;
	}
    article:first-child {
		border-top: 1px solid var(--border-color);
        margin-top: 2em;
		padding-top: 2em;
    }
    article {
        padding: 1em 0;
    }
</style>
