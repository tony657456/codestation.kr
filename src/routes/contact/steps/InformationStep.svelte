<script lang="ts">
	import { InformationInput } from '$lib/constants/information';
	import WarningButton from '../buttons/WarningButton.svelte';
	import EachStep from './EachStep.svelte';
	import InputBox from './InputBox.svelte';
	export let step = 0;

	let values: {
		[key: string]: string;
	} = {
		name: '',
		phoneNumber: '',
		email: '',
		company: '',
	};
	// values['phoneNumber'];
	// values.phoneNumber;
</script>

<EachStep bind:currentStep={step} targetStep={1} isValid>
	<div class="flex w-1/2 flex-col gap-4">
		<h1 class="text-3xl text-white">2. 프로젝트 정보를 입력해주세요.*</h1>
		<div class="flex flex-col gap-4">
			{#each InformationInput as item}
				<div class="flex flex-col">
					<span class="title-color-secondary">{item.title}</span>
					<InputBox bind:value={values[item.name]} />
					<div class="mt-4 flex">
						<WarningButton class={values[item.name]?.length > 0 ? 'hidden' : ''} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</EachStep>
