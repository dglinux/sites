<script>
	export let icon;
	export let spin;
</script>

<svg viewBox="0 0 24 24">
	<path d={icon} style="fill: currentColor;" class:spin />
</svg>

<style>
	svg {
		height: 1em;
	}
	.spin {
		animation: spin linear 3s infinite;
		transform-origin: center;
	}
	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
