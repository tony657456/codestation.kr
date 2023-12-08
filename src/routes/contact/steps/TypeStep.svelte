<script lang="ts">
	import { DevelopmentTypes, type TDevelopmentType } from '$lib/constants/development-type';
	import AlertText from '../AlertText.svelte';
	import EachStep from './EachStep.svelte';
	import SelectCard from './SelectCard.svelte';
	export let step = 0;

	let selectedDeveopmentType: TDevelopmentType | undefined;
</script>

<EachStep bind:currentStep={step} targetStep={2} isValid>
	<div class="flex w-1/2 flex-col gap-4">
		<h1 class="text-3xl text-white">3. 개발형태를 알려주세요 ☺️*</h1>
		<div class="flex flex-col gap-3">
			{#each DevelopmentTypes as item}
				<SelectCard
					on:click={() => {
						selectedDeveopmentType = item;
					}}
					{...item}
				/>
			{/each}
			<div class="mt-4 flex">
				<AlertText hidden={selectedDeveopmentType === undefined} />
			</div>
		</div>
	</div>
	{#if selectedDeveopmentType}
		<input name="developmentType" value={selectedDeveopmentType.value} hidden />
	{/if}
</EachStep>
