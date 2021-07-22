<script>
	export let mirror;
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

	function rowclick() {
		window.location = url;
	}
</script>

<tr on:click|stopPropagation={rowclick}>
	<td class="name">
		<a href={url}>{mirror.name}</a>
		{#if official}
			<OfficialBadge />
		{/if}
	</td>
	<td class:success title={mirror.status}>
		<SyncIcon status={mirror.status} />
	</td>
	<td>{lastUpdate}</td>
	<td class="pc">{nextSchedule}</td>
	<td class="pc">
		<a href={mirror.upstream}>
			{scheme}
		</a>
	</td>
	<td class="pc">{mirror.size}</td>
	<td />
</tr>

<style>
	tr {
		font-size: 0.95em;
		cursor: pointer;
	}
	tr:hover {
		background: #222;
	}
	tr:active {
		background: #444;
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
			background: #222;
			color: white;
		}
	}
</style>
