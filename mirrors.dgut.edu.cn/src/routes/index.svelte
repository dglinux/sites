<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('https://mirrors.dgut.edu.cn/static/status.json');
		const status = await res.json();
		return { props: { status } };
	}
</script>

<script>
	export let status;
	import Dashboard from '$lib/Dashboard.svelte';
</script>

<div>
	<Dashboard {status} />
</div>

<style>
	div {
		overflow-x: auto;
	}
</style>
