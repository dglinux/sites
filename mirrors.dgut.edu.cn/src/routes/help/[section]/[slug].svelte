<script context="module">
	export async function load({ fetch, page: { params } }) {
		const sections = await fetch('/help.json');
		const document = await fetch(`/help/${params.section}/${params.slug}.json`);
		return {
			props: {
				sections: await sections.json(),
				document: await document.json()
			}
		};
	}
</script>

<script>
	export let sections;
	export let document;
	import HelpBoard from '$lib/HelpBoard.svelte';
</script>

<svelte:head>
	<title>{document.title} - 使用帮助 - DGUT Open Source Software Mirrors</title>
</svelte:head>
<HelpBoard {sections}>
	{@html document.html}
</HelpBoard>
