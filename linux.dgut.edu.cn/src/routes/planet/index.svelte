<script>
	import Avatar from '$lib/Avatar.svelte';
	import people from '$lib/people';
	const entries = Object.entries(people).sort((a, b) => a[0].localeCompare(b[0]));
</script>

<svelte:head>
	<title>Planet - 东莞理工学院 GNU/Linux 协会</title>
</svelte:head>
<div class="container">
	<h1>DGLinux Planet</h1>
	<div class="people">
		{#each entries as person (person[0])}
			<Avatar id={person[0]} full={person[1].full} src={person[1].avatar} />
		{/each}
	</div>
</div>

<style>
	h1 {
		font-weight: 400;
		font-size: 2em;
		margin-bottom: 1em;
	}
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
