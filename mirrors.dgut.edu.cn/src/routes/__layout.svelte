<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<footer>
	<Footer />
</footer>
