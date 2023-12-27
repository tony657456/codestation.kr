<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import BudgetStep from './steps/BudgetStep.svelte';
	import InformationStep from './steps/InformationStep.svelte';
	import NameStep from './steps/NameStep.svelte';
	import PurposeStep from './steps/PurposeStep.svelte';
	import TypeStep from './steps/TypeStep.svelte';
	import AdditionalStep from './steps/AdditionalStep.svelte';
	import { isLoading } from '$lib/stores/loading-store';

	export let step = 0;
	const lastStep = 1;
</script>

<form
	use:enhance={({ cancel }) => {
		isLoading.set(true);
		if (step < lastStep) {
			step++;
			cancel();
			return;
		}
		return ({ result }) => {
			isLoading.set(false);
			if (result.type === 'error') {
				alert(result.error?.message);
				return;
			}
			if (result.type === 'redirect') {
				goto(result.location);
			}
		};
	}}
	method="post"
	enctype="multipart/form-data"
	class="flex w-full flex-col"
>
	<NameStep bind:step />
	<InformationStep bind:step />
	<TypeStep bind:step />
	<PurposeStep bind:step />
	<BudgetStep bind:step />
	<AdditionalStep bind:step />
</form>
