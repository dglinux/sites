<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('https://mirrors.dgut.edu.cn/static/isoinfo.json');
		return { props: { isoinfo: await res.json() } };
	}
</script>

<script>
	export let isoinfo;
	import DownloadBoard from '$lib/DownloadBoard.svelte';
</script>

<svelte:head>
	<title>软件下载 - DGUT Open Source Software Mirrors</title>
</svelte:head>
<noscript>You need to enable JavaScript to view this page.</noscript>
<DownloadBoard {isoinfo}/>
