<script lang="ts">
	import { enhance } from '$app/forms';
	import InformationStep from './steps/InformationStep.svelte';
	import NameStep from './steps/NameStep.svelte';

	let step = 0;
	const lastStep = 1;
</script>

<form
	use:enhance={({ cancel }) => {
		if (step < lastStep) {
			step++;
			cancel();
			return;
		}
		return () => {};
	}}
	method="post"
	class="w-full"
>
	<NameStep bind:step />
	<InformationStep bind:step />
</form>
