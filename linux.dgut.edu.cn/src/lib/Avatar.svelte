<script>
	export let src;
	export let id;
	export let full;
	const name = full || id;
    const url = src && `https://www.gravatar.com/avatar/${src}`
</script>

<a sveltekit:prefetch href={`/people/${id}`} title={name}>
	{#if src}
		<span role="img" style={`background-image: url(${url});`} />
	{/if}
	<span class="initial">{name[0].toUpperCase()}</span>
	<!-- For those who use w3m -->
	<span style="display: none">{name}</span>
</a>

<style>
	a {
		position: relative;
		color: inherit;
		text-decoration: none;
	}
    a:hover {
		color: inherit;
		text-decoration: none;
        filter: brightness(1.2);
    }
	span {
		width: 4rem;
		height: 4rem;
		border-radius: 2rem;
	}
	[role=img] {
		position: absolute;
		background-size: 4rem;
	}
	.initial {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #2b2b2b;
		font-size: 2em;
		font-weight: 400;
		user-select: none;
	}
	@media (prefers-color-scheme: light) {
		.initial {
			background-color: #efefef;
		}
	}
</style>
