<script>
	export let mirror;
	import officialMirrors from '$lib/official-mirrors.js';
	import SyncIcon from '$lib/SyncIcon.svelte';
	import OfficialBadge from '$lib/OfficialBadge.svelte';

	let success = mirror.status == 'success';
	let scheme = mirror.upstream.split(':')[0];
	let official = officialMirrors.includes(mirror.name);
</script>

<tr>
	<td>
		{mirror.name}
		{#if official}
			<OfficialBadge />
		{/if}
	</td>
	<td class:success>
		<SyncIcon status={mirror.status} />
	</td>
	<td>{mirror.last_update}</td>
	<td>{mirror.next_schedule}</td>
	<td>
		<a href={mirror.upstream}>
			{scheme}
		</a>
	</td>
	<td>{mirror.size}</td>
	<td />
</tr>

<style>
	tr {
		cursor: pointer;
		font-size: 0.95em;
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
	.success {
		color: rgb(99, 201, 16);
	}
</style>
