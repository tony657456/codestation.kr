<script lang="ts">
	import { DevelopmentTypes, type TDevelopmentType } from '$lib/constants/development-type';
	import AlertText from '../AlertText.svelte';
	import EachStep from './EachStep.svelte';
	import SelectCard from './SelectCard.svelte';
	export let step = 0;

	let selectedDeveopmentType: TDevelopmentType | undefined;
	let selectedDeveopmentTypes: TDevelopmentType[] = [];
</script>

<EachStep bind:currentStep={step} targetStep={2} isValid>
	<div class="flex w-1/2 flex-col gap-4 max-md:w-full max-md:px-1">
		<h1 class="text-3xl text-white max-md:text-xl">3. 개발형태를 알려주세요 ☺️*</h1>
		<div class="flex flex-col gap-3">
			{#each DevelopmentTypes as item}
				<SelectCard
					on:click={() => {
						selectedDeveopmentType = item;
					}}
					selected={selectedDeveopmentType === item}
					{...item}
				/>
				<!-- <SelectCard
					on:click={() => {
						if (selectedDeveopmentTypes.some((type) => type === item)) {
							selectedDeveopmentTypes = selectedDeveopmentTypes.filter((type) => type !== item);
						} else {
							selectedDeveopmentTypes = [...selectedDeveopmentTypes, item];
						}
					}}
					selected={selectedDeveopmentTypes.some((type) => type === item)}
					{...item}
				/> -->
			{/each}
		</div>
		<div class="flex">
			<AlertText hidden={selectedDeveopmentType !== undefined} />
		</div>
	</div>
	{#if selectedDeveopmentType}
		<input name="developmentType" value={selectedDeveopmentType.value} hidden />
	{/if}
</EachStep>
