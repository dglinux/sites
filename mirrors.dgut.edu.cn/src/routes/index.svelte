<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/static/status.json');
		const status = await res.json();
		return { props: { status } };
	}
</script>

<script>
	export let status;
	import Dashboard from '$lib/Dashboard.svelte';
</script>

<Dashboard {status} />
