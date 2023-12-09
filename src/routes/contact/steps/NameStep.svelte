<script lang="ts">
	import { isNotEmpty } from '$lib/utils/textValidation';
	import EachStep from './EachStep.svelte';
	import Input from './Input.svelte';
	export let step = 0;

	let value = '';
	$: isValid = value.length > 0;
</script>

<EachStep bind:currentStep={step} targetStep={0} {isValid}>
	<div class="flex w-1/2 flex-col max-md:w-full max-md:px-1">
		<h1 class="text-3xl text-white max-md:text-xl">1. 프로젝트 이름을 입력해주세요.*</h1>
		<Input bind:value name="name" validate={isNotEmpty} />
	</div>
</EachStep>
