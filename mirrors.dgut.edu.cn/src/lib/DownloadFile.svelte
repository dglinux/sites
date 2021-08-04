<script>
	export let file;
	const { md5, sha1, sha256, sha512 } = file;
	const hasChecksum = !!(md5 || sha1 || sha256 || sha512);
</script>

<a rel="external" download href={file.url}>{file.base}</a>
{#if hasChecksum}
	<div>
		{#if sha512}
			<span>SHA512</span>
			<pre>{sha512}</pre>
		{/if}
		{#if sha256}
			<span>SHA256</span>
			<pre>{sha256}</pre>
		{/if}
		{#if sha1}
			<span>SHA1</span>
			<pre>{sha1}</pre>
		{/if}
		{#if md5}
			<span>MD5</span>
			<pre>{md5}</pre>
		{/if}
	</div>
{/if}

<style>
	a {
        display: block;
		font-size: 1.25rem;
		line-height: 2rem;
		font-weight: 500;
	}
	div {
		display: grid;
		grid-template-columns: max-content 1fr;
		column-gap: 0.6em;
		row-gap: 0.3em;
		margin: 0.8em 0;
		align-items: center;
	}
	pre {
		display: block;
		font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		color: #f8f8f2;
		background: #2b2b2b;
		overflow-x: auto;
		padding: 1rem;
		border-radius: 0.3em;
		overflow: auto;
	}
</style>
