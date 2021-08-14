<script>
	import Avatar from '$lib/Avatar.svelte';
	import people from '$lib/people';
	const entries = Object.entries(people).sort((a, b) => a[0].localeCompare(b[0]));
</script>

<svelte:head>
	<title>DGLinux Planet - 东莞理工学院 GNU/Linux 协会</title>
	<meta name="description" content="DGLinux 同学们的团体个人博客以及消息来源聚合站点" />
</svelte:head>
<div class="container">
	<div class="people">
		{#each entries as person (person[0])}
			<Avatar id={person[0]} full={person[1].full} src={person[1].avatar} />
		{/each}
	</div>
</div>

<style>
	.container {
		max-width: 44em;
		margin: 2.5em auto 4em auto;
	}
	.people {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 1em;
		row-gap: 1em;
	}
</style>
