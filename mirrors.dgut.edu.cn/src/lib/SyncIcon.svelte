<script>
	export let status;

	import {
		mdiSync, // syncing, pre-syncing
		mdiCheck, // success
		mdiSyncAlert, // failed
		mdiPause, // paused
		mdiSyncOff // disabled
	} from '@mdi/js';
	import Icon from '$lib/Icon.svelte';

	function getIcon(status) {
		switch (status) {
			case 'syncing':
			case 'pre-syncing':
				return mdiSync;
			case 'success':
				return mdiCheck;
			case 'failed':
				return mdiSyncAlert;
			case 'paused':
				return mdiPause;
			case 'disabled':
				return mdiSyncOff;
		}
	}
    let icon = getIcon(status);
    let spin= status.includes('syncing');
</script>

<Icon icon={icon} spin={spin} />
