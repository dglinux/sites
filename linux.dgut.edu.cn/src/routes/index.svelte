<script>
	import Icon from '@dglinux/sites-common/lib/Icon.svelte';
	import {
		mdiDiscPlayer,
		mdiGit,
		mdiCheckNetwork,
		mdiPresentationPlay,
		mdiVote,
		mdiChartAreaspline
	} from '@mdi/js';
</script>

<svelte:head>
	<title>东莞理工学院 GNU/Linux 协会</title>
</svelte:head>
<div class="list">
	<a href="https://mirrors.dgut.edu.cn/">
		<Icon icon={mdiDiscPlayer} />
		镜像站
	</a>
	<a href="https://git.dglinux.cn/">
		<Icon icon={mdiGit} />
		Git 服务器
	</a>
	<a href="https://linux.dgut.edu.cn/dns-query">
		<Icon icon={mdiCheckNetwork} />
		DoH
	</a>
	<a href="https://linux.dgut.edu.cn/live/">
		<Icon icon={mdiPresentationPlay} />
		协会直播
	</a>
	<a href="https://linux.dgut.edu.cn/vote/">
		<Icon icon={mdiVote} />
		投票
	</a>
	<a href="https://linux.dgut.edu.cn/grafana/">
		<Icon icon={mdiChartAreaspline} />
		流量监控
	</a>
</div>

<style>
	.list {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 5em 0;
		column-gap: 1.5em;
		flex-wrap: wrap;
	}
	a {
		color: inherit;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	a:hover {
		color: rgb(99, 201, 16);
	}
	a :global(svg) {
		height: 6.5em;
	}
</style>
