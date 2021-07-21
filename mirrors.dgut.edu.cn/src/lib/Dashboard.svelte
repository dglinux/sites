<script>
	export let status;
	import MirrorRow from '$lib/MirrorRow.svelte';
	status.sort((a, b) => a.name.localeCompare(b.name));
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
		{#each status as mirror (mirror.name)}
			<MirrorRow {mirror} />
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
		border-spacing: 0;
		width: 100%;
	}
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
	@media (max-width: 320px) {
		table {
			font-size: 0.8em;
		}
	}
</style>
