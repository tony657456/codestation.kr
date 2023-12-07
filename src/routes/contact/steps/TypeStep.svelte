<script lang="ts">
	import { DevelopmentType } from '$lib/constants/development-type';
	import WarningButton from '../buttons/WarningButton.svelte';
	import EachStep from './EachStep.svelte';
	import SelectCard from './SelectCard.svelte';
	export let step = 0;

	let values: {
		[key: string]: string;
	} = {
		landing: '',
		web: '',
		app: '',
		admin: '',
	};
	values.landing;
	$: value =
		values.landing.length > 0 &&
		values.web.length > 0 &&
		values.app.length > 0 &&
		values.admin.length > 0;
</script>

<EachStep bind:currentStep={step} targetStep={2} isValid isLastStep>
	<div class="flex w-1/2 flex-col gap-4">
		<h1 class="text-3xl text-white">3. 개발형태를 알려주세요 ☺️*</h1>
		<div class="flex flex-col gap-3">
			{#each DevelopmentType as item}
				<SelectCard bind:value={values[item.name]} {...item} />
			{/each}
			<div class="mt-4 flex">
				<WarningButton class={value === false ? '' : 'hidden'} />
			</div>
		</div>
	</div>
</EachStep>
