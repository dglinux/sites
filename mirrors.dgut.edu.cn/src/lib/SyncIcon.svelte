<script>
	export let status;

	import {
		mdiSync, // syncing, pre-syncing
		mdiCheckBold, // success
		mdiExclamationThick, // failed
		mdiPause, // paused
		mdiStop // disabled
	} from '@mdi/js';
	import Icon from '$lib/Icon.svelte';

	function getIcon(status) {
		switch (status) {
			case 'syncing':
			case 'pre-syncing':
				return mdiSync;
			case 'success':
				return mdiCheckBold;
			case 'failed':
				return mdiExclamationThick;
			case 'paused':
				return mdiPause;
			case 'disabled':
				return mdiStop;
		}
	}
    let icon = getIcon(status);
    let spin= status.includes('syncing');
</script>

<Icon icon={icon} spin={spin} />
