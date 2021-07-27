<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	export let error;
	export let status;
	import { dev } from '$app/env';
</script>

<svelte:head>
	<title>{status} - 东莞理工学院 GNU/Linux 协会</title>
</svelte:head>

<h1>{status}</h1>
<pre>{error.message}</pre>

{#if dev}
	{#if error.frame}
		<pre>{error.frame}</pre>
	{/if}
	{#if error.stack}
		<pre>{error.stack}</pre>
	{/if}
{/if}

<style>
	pre {
		margin: 1em auto;
		overflow-x: auto;
	}
</style>
