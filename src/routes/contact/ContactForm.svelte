<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import InformationStep from './steps/InformationStep.svelte';
	import NameStep from './steps/NameStep.svelte';
	import TypeStep from './steps/TypeStep.svelte';

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
		return ({ result }) => {
			if (result.type === 'redirect') {
				goto(result.location);
			}
		};
	}}
	method="post"
	class="w-full"
>
	<NameStep bind:step />
	<InformationStep bind:step />
	<TypeStep bind:step />
</form>
