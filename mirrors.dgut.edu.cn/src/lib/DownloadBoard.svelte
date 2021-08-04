<script>
	export let isoinfo;
	import DownloadFile from '$lib/DownloadFile.svelte';
	let selectedDistro;
	let selectedVersion;
	$: distroInfo = isoinfo.find((d) => d.name === selectedDistro);
	$: versions =
		distroInfo &&
		distroInfo.files.map((f) => f.ver).filter((ver, i, array) => array.indexOf(ver) === i);
	$: files = selectedVersion && distroInfo.files.filter((file) => file.ver === selectedVersion);
</script>

<div class="container">
	{#if isoinfo}
		<ul class="distros" aria-label="发行版">
			{#each isoinfo as distroInfo (distroInfo.name)}
				<li>
					<button
						class:active={selectedDistro === distroInfo.name}
						on:click={() => {
							selectedDistro = distroInfo.name;
							selectedVersion = null;
						}}>{distroInfo.name}</button
					>
				</li>
			{/each}
		</ul>
	{/if}
	{#if versions}
		<ol class="versions" aria-label="版本">
			{#each versions as version}
				<li>
					<button
						class:active={selectedVersion === version}
						on:click={() => {
							selectedVersion = version;
						}}>{version}</button
					>
				</li>
			{/each}
		</ol>
	{/if}
	{#if files}
		<ol class="files" aria-label="下载">
			<li>
				{#each files as file (file.url)}
					<DownloadFile {file} />
				{/each}
			</li>
		</ol>
	{/if}
	{#if !selectedDistro}
		<div class="hint">选择一个发行版</div>
	{/if}
	{#if selectedDistro && !selectedVersion}
		<div class="hint">选择一个版本</div>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		column-gap: 1.5em;
	}
	ul,
	ol {
		list-style: none;
		display: block;
	}
	ul::before,
	ol::before {
		content: attr(aria-label);
		display: block;
		font-size: 0.85em;
		font-weight: 700;
		padding: 0 1rem;
		margin-bottom: 0.5em;
		opacity: 0.7;
	}
	.distros,
	.versions {
		white-space: nowrap;
	}
	button {
		display: block;
		cursor: pointer;
		font-size: 1em;
		color: inherit;
		background-color: transparent;
		border: solid 1px transparent;
		border-radius: 0.2em;
		padding: 0.5em 1rem;
		width: 100%;
		text-align: left;
	}
	button:hover {
		background: #222;
	}
	button:active {
		background: #444;
	}
	.active {
		color: rgb(82, 165, 14);
		background: #080808;
		border: solid 1px;
	}
	.files > li {
		margin-left: 1em;
	}
	.hint {
		margin: auto;
	}
</style>
