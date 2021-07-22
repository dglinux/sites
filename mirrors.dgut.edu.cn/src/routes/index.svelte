<script context="module">
	export async function load({ fetch }) {
		const status = await fetch('https://mirrors.dgut.edu.cn/static/status.json');
		const help = await fetch('/help.json');
		return {
			props: {
				status: await status.json(),
				help: await help.json()
			}
		};
	}
</script>

<script>
	export let status;
	export let help;
	import Dashboard from '$lib/Dashboard.svelte';
</script>

<svelte:head>
    <title>DGUT Open Source Software Mirrors</title>
</svelte:head>
<div>
	<Dashboard {status} {help} />
</div>

<style>
	div {
		overflow-x: auto;
	}
</style>
