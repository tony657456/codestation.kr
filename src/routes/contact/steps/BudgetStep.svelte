<script lang="ts">
	import { BudgetContents, type TBudgetStep } from '$lib/constants/budget-step';
	import AlertText from '../AlertText.svelte';
	import EachStep from './EachStep.svelte';
	import SelectCard from './SelectCard.svelte';
	export let step = 0;

	let selectedBudgetContents: TBudgetStep | undefined;
</script>

<EachStep bind:currentStep={step} targetStep={4} isValid isLastStep>
	<div class="flex w-1/2 flex-col gap-4">
		<h1 class="text-3xl text-white">5. 예산을 알려주세요! 💵*</h1>
		<div class="flex flex-col gap-3">
			{#each BudgetContents as item}
				<SelectCard
					on:click={() => {
						selectedBudgetContents = item;
					}}
					{...item}
				/>
			{/each}
			<div class="mt-4 flex">
				<AlertText hidden={selectedBudgetContents === undefined} />
			</div>
		</div>
	</div>
	{#if selectedBudgetContents}
		<input name="developmentType" value={selectedBudgetContents.value} hidden />
	{/if}
</EachStep>
