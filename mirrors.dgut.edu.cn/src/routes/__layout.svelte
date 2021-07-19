<script>
	import '../app.css';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
</script>

<div class="stripe" />
<div class="container">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.stripe {
		width: 100%;
		background-color: rgb(82, 165, 14);
		height: 5px;
	}
	.container {
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
	}
	@media (min-width: 768px) {
		.container {
			width: 750px;
		}
	}
	@media (min-width: 992px) {
		.container {
			width: 970px;
		}
	}
	@media (min-width: 1200px) {
		.container {
			width: 1170px;
		}
	}
</style>
