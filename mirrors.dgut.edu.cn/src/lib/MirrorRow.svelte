<script>
	export let mirror;
	export let hasHelp;
	import officialMirrors from '$lib/official-mirrors.js';
	import SyncIcon from '$lib/SyncIcon.svelte';
	import OfficialBadge from '$lib/OfficialBadge.svelte';
	import fromNow from '$lib/from-now.js';

	let url = `/${mirror.name}/`;
	let official = officialMirrors.includes(mirror.name);
	let success = mirror.status == 'success';
	let lastUpdate = fromNow(mirror.last_update_ts);
	let nextSchedule = fromNow(mirror.next_schedule_ts);
	let scheme = mirror.upstream.split(':')[0];
</script>

<tr>
	<td class="name">
		<a rel="external" href={url}>{mirror.name}</a>
		{#if official}
			<OfficialBadge />
		{/if}
	</td>
	<td class:success title={mirror.status}>
		<SyncIcon status={mirror.status} />
		<!-- For people who use w3m -->
		<span style="display:none">{mirror.status}</span>
	</td>
	<td>{lastUpdate}</td>
	<td class="pc">{nextSchedule}</td>
	<td class="pc">
		<a rel="external" href={mirror.upstream}>
			{scheme}
		</a>
	</td>
	<td class="pc">{mirror.size}</td>
	<td>
		{#if hasHelp}
			<a sveltekit:prefetch href={`/help/mirrors/${mirror.name}`}>help</a>
		{/if}
	</td>
</tr>

<style>
	tr {
		font-size: 0.95em;
	}
	tr:hover {
		background: #222;
	}
	td {
		text-align: center;
		padding: 0.5em 1em;
		white-space: nowrap;
	}
	.name > a {
		color: inherit;
		text-decoration: none;
	}
	.name > a:hover {
		color: #fff;
		text-decoration: underline;
	}
	.success {
		color: rgb(99, 201, 16);
	}
	@media (prefers-color-scheme: light) {
		tr:hover {
			background: #efefef;
		}
		.name > a:hover {
			color: #000;
		}
	}
</style>
