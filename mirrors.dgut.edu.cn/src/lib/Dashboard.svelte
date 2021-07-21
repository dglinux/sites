<script>
	import SyncIcon from '$lib/SyncIcon.svelte';
	export let status;
	$: sorted = status.sort((a, b) => a.name.localeCompare(b.name));

	function getScheme(url) {
		return url.split(':')[0];
	}
</script>

<table>
	<thead>
		<tr>
			<th>源名称</th>
			<th>同步状态</th>
			<th>上次更新</th>
			<th class="pc">更新计划</th>
			<th class="pc">上游</th>
			<th class="pc">大小</th>
			<th>帮助</th>
		</tr>
	</thead>
	<tbody>
		{#each sorted as mirror (mirror.name)}
			<tr>
				<td>{mirror.name}</td>
				<td class:success={mirror.status == 'success'}>
					<SyncIcon status={mirror.status} />
				</td>
				<td>{mirror.last_update}</td>
				<td>{mirror.next_schedule}</td>
				<td>
					<a href={mirror.upstream}>
						{getScheme(mirror.upstream)}
					</a>
				</td>
				<td>{mirror.size}</td>
				<td />
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
		border-spacing: 0;
		width: 100%;
	}
	td,
	th {
		text-align: center;
		padding: 0.5em 1em;
		white-space: nowrap;
	}
	th {
		letter-spacing: 1px;
	}
	thead > tr {
		border-bottom: 1px solid #444444;
	}
	tbody > tr {
		cursor: pointer;
		font-size: 0.95em;
	}
	tbody > tr:hover {
		background: #222;
	}
	tbody > tr:active {
		background: #444;
	}
	.success {
		color: rgb(99, 201, 16);
	}
</style>
