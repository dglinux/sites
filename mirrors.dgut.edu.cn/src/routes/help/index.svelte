<script context="module">
	export async function load() {
		const res = await fetch('/help.json');
		return { props: { files: res.json() } };
	}
</script>
