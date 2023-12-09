<script lang="ts">
	import { PurposeContents, type TPurposeStep } from '$lib/constants/purpose-step';
	import AlertText from '../AlertText.svelte';
	import EachStep from './EachStep.svelte';
	import SelectCard from './SelectCard.svelte';
	export let step = 0;

	let selectedPurposeType: TPurposeStep | undefined;
</script>

<EachStep bind:currentStep={step} targetStep={3} isValid>
	<div class="flex w-1/2 flex-col gap-4 max-md:w-full max-md:px-1">
		<h1 class="text-3xl text-white max-md:text-xl">4. 제작 목적에 대해 선택해주세요 💡*</h1>
		<div class="flex flex-col gap-3">
			{#each PurposeContents as item}
				<SelectCard
					on:click={() => {
						selectedPurposeType = item;
					}}
					selected={selectedPurposeType === item}
					{...item}
				/>
			{/each}
		</div>
		<div class="flex">
			<AlertText hidden={selectedPurposeType !== undefined} />
		</div>
	</div>
	{#if selectedPurposeType}
		<input name="developmentType" value={selectedPurposeType.value} hidden />
	{/if}
</EachStep>
