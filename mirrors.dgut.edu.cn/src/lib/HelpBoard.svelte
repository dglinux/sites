<script>
	export let sections;
	import { page } from '$app/stores';
	$: currentFile = $page.path.split('/')[2];
</script>

<div>
	<ul class="helpnav">
		<li><a href="/help" class:active={!currentFile}>开始</a></li>
		{#each sections as { section, files } (section)}
			<li class="section">
				<h2>{section}</h2>
				<ul>
					{#each files as file (file)}
						<li>
							<a sveltekit:prefetch href={`/help/${file}`} class:active={currentFile == file}>
								{file}
							</a>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
	<article>
		<slot />
	</article>
</div>

<style>
	.helpnav {
		width: 18%;
		margin-right: 1em;
	}
	div {
		display: flex;
		flex-direction: row;
	}
	ul {
		list-style: none;
	}
	h2 {
		text-transform: uppercase;
		font-size: 0.75em;
        font-weight: 700;
		padding: 0 1rem;
		margin-bottom: 0.5em;
		opacity: 0.7;
	}
	.section {
		margin-top: 2em;
	}
	a {
		text-decoration: none;
		line-height: 1;
		color: inherit;
		padding: 0.5em 1rem;
		display: block;
		border: solid 1px transparent;
		border-radius: 0.2em;
	}
	a,
	h2 {
		border: solid 1px transparent;
	}
	a:hover {
		background: #444;
	}
	.active {
		color: rgb(82, 165, 14);
		background: #080808;
		border: solid 1px;
	}
</style>
