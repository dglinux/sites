<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/blog.json');
		return { props: { blog: await res.json() } };
	}
</script>

<script>
	export let blog;
	let latestBlog = blog.slice(0, 4);
	import Icon from '@dglinux/sites-common/lib/Icon.svelte';
	import {
		mdiDiscPlayer,
		mdiGit,
		mdiPresentationPlay,
		mdiVote,
		mdiChartAreaspline,
		mdiChevronRight
	} from '@mdi/js';
	import ArticleInfo from '$lib/ArticleInfo.svelte';
</script>

<svelte:head>
	<title>东莞理工学院 GNU/Linux 协会</title>
</svelte:head>
<div class="list">
	<a rel="external" href="https://mirrors.dgut.edu.cn/">
		<Icon icon={mdiDiscPlayer} />
		镜像站
	</a>
	<a rel="external" href="https://git.dglinux.com/">
		<Icon icon={mdiGit} />
		Git 服务器
	</a>
	<a rel="external" href="https://linux.dgut.edu.cn/live/">
		<Icon icon={mdiPresentationPlay} />
		协会直播
	</a>
	<a rel="external" href="https://linux.dgut.edu.cn/vote/">
		<Icon icon={mdiVote} />
		投票
	</a>
	<a rel="external" href="https://linux.dgut.edu.cn/grafana/">
		<Icon icon={mdiChartAreaspline} />
		流量监控
	</a>
</div>
<h3>Latest posts</h3>
<div class="blog">
	{#each latestBlog as post}
		<article><ArticleInfo info={post} /></article>
	{/each}
	<a href="/blog">All posts<Icon icon={mdiChevronRight} /></a>
</div>

<style>
	.list {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 5em 0;
		column-gap: 1.5em;
		row-gap: 1em;
		flex-wrap: wrap;
	}
	.list a {
		color: inherit;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.list a:hover {
		color: rgb(99, 201, 16);
	}
	.list a :global(svg) {
		height: 6.5em;
	}
	.blog {
		column-count: 2;
	}
	h3 {
		letter-spacing: 0.5px;
		margin-bottom: 1em;
	}
	h3::before {
		content: '#';
		color: #343434;
		margin-right: 0.3em;
	}
	h3:hover::before {
		color: rgb(99, 201, 16);
	}
	article {
		margin-bottom: 2em;
		page-break-inside: avoid;
	}
	article:nth-child(4) {
		margin-bottom: 1em;
	}
	.blog a {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
