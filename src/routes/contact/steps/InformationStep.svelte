<script lang="ts">
	import { InformationInput } from '$lib/constants/information';
	import { isNotEmpty } from '$lib/utils/textValidation';
	import EachStep from './EachStep.svelte';
	import Input from './Input.svelte';
	export let step = 0;

	let values: {
		[key: string]: string;
	} = {
		name: '',
		phoneNumber: '',
		email: '',
		company: '',
	};
</script>

<EachStep bind:currentStep={step} targetStep={1} isValid>
	<div class="flex w-1/2 flex-col gap-4">
		<h1 class="text-3xl text-white">2. 프로젝트 정보를 입력해주세요.*</h1>
		<div class="flex flex-col gap-4">
			{#each InformationInput as item}
				<div class="flex flex-col">
					<span class="title-color-secondary">{item.title}</span>
					<Input bind:value={values[item.name]} name={item.name} validate={isNotEmpty} />
				</div>
			{/each}
		</div>
	</div>
</EachStep>
