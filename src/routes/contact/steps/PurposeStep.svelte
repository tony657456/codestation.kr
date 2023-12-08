<script lang="ts">
	import { PurposeContents, type TPurposeStep } from '$lib/constants/purpose-step';
	import AlertText from '../AlertText.svelte';
	import EachStep from './EachStep.svelte';
	import SelectCard from './SelectCard.svelte';
	export let step = 0;

	let selectedPurposeContents: TPurposeStep | undefined;
</script>

<EachStep bind:currentStep={step} targetStep={3} isValid>
	<div class="flex w-1/2 flex-col gap-4">
		<h1 class="text-3xl text-white">4. 제작 목적에 대해 선택해주세요 💡*</h1>
		<div class="flex flex-col gap-3">
			{#each PurposeContents as item}
				<SelectCard
					on:click={() => {
						selectedPurposeContents = item;
					}}
					{...item}
				/>
			{/each}
			<div class="mt-4 flex">
				<AlertText hidden={selectedPurposeContents === undefined} />
			</div>
		</div>
	</div>
	{#if selectedPurposeContents}
		<input name="developmentType" value={selectedPurposeContents.value} hidden />
	{/if}
</EachStep>
