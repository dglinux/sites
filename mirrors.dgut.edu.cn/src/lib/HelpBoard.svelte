<script>
	export let sections;
	import Article from '$lib/Article.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	$: [currentSection, currentFile] = $page.path.split('/').slice(2);

	function navigate(e) {
		if (e.target.value) {
			goto(`/help/${e.target.value}`);
		} else {
			goto('/help');
		}
	}
</script>

<label>
	帮助主题
	<!-- svelte-ignore a11y-no-onchange -->
	<select on:change={navigate}>
		<option value="" selected={!currentSection}>开始</option>
		{#each sections as { section, files } (section)}
			<optgroup label={section}>
				{#each files as file (file)}
					<option
						value={`${section}/${file}`}
						selected={currentSection === section && currentFile === file}
					>
						{file}
					</option>
				{/each}
			</optgroup>
		{/each}
	</select>
</label>

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
	label {
		display: none;
		margin: 0.5em 0;
		font-size: 0.8em;
	}
	select {
		background-image: none;
		background-color: inherit;
		color: inherit;
		padding: 0.5em 1em;
		border: solid 1px;
		border-radius: 0.2em;
		font-size: 1em;
		width: calc(100% - 5em);
	}
	.helpnav {
		width: 16%;
		display: block;
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
	@media (prefers-color-scheme: light) {
		a:hover {
			background: #efefef;
		}
		a:active {
			background: #ddd;
		}
		.active {
			background: #eee;
		}
	}
	@media (max-width: 767px) {
		label {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
		.helpnav {
			display: none;
		}
		div > :global(article) {
			width: 100%;
		}
	}
</style>
