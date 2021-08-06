<script>
	import '@dglinux/sites-common/app.css';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	div {
		box-sizing: border-box;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
	}
	@media (min-width: 780px) {
		div {
			width: 750px;
		}
	}
	@media (min-width: 1000px) {
		div {
			width: 970px;
		}
	}
	@media (min-width: 1200px) {
		div {
			width: 1170px;
		}
	}
</style>
