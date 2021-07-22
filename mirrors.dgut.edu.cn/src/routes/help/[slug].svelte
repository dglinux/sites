<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/help.json');
		return { props: { sections: await res.json() } };
	}
</script>

<script>
	export let sections;
	import HelpBoard from '$lib/HelpBoard.svelte';
</script>

<HelpBoard {sections}>
</HelpBoard>
