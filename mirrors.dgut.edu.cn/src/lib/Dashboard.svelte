<script>
	export let status;
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
			<tr>
				<td>{mirror.name}</td>
				<td>{mirror.status}</td>
				<td>{mirror.last_update}</td>
				<td>{mirror.next_schedule}</td>
				<td>{mirror.upstream}</td>
				<td>{mirror.size}</td>
                <td></td>
			</tr>
		{/each}
	</tbody>
</table>
