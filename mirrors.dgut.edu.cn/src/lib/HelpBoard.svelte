<script>
	export let sections;
	import Article from '$lib/Article.svelte';
	import { page } from '$app/stores';
	$: [currentSection, currentFile] = $page.path.split('/').slice(2);
</script>

<div>
	<ul class="helpnav">
		<li><a href="/help" class:active={!currentSection}>开始</a></li>
		{#each sections as { section, files } (section)}
			<li class="section">
				<h2>{section}</h2>
				<ul>
					{#each files as file (file)}
						<li>
							<a
								sveltekit:prefetch
								href={`/help/${section}/${file}`}
								class:active={currentSection === section && currentFile === file}
							>
								{file}
							</a>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
	<Article>
		<slot />
	</Article>
</div>

<style>
	.helpnav {
		width: 16%;
	}
	div {
		display: flex;
		flex-direction: row;
        justify-content: space-between;
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
		background: #222;
	}
	a:active {
		background: #444;
	}
	.active {
		color: rgb(82, 165, 14);
		background: #080808;
		border: solid 1px;
	}
	div > :global(article) {
		width: calc(100% - 16% - 2em);
	}
</style>
