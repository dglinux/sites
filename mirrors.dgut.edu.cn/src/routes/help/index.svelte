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

<svelte:head>
    <title>使用帮助 - DGUT Open Source Software Mirrors</title>
</svelte:head>
<HelpBoard {sections}>
	<h1>东莞理工学院镜像站使用帮助</h1>
	<p>
		东莞理工学院 GNU/Linux协会 开源软件镜像站（Dongguan University of Technology GNU/Linux
		Association Mirrors） 使用帮助。
	</p>
	<p>
		本镜像站依托于东莞理工学院，是教育网华南地区唯二的公网开源镜像站，欢迎大家的使用。也欢迎大家为本帮助文档作出贡献。
	</p>
</HelpBoard>
