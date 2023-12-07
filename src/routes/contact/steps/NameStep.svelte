<script lang="ts">
	import WarningButton from '../buttons/WarningButton.svelte';
	import EachStep from './EachStep.svelte';
	import InputBox from './InputBox.svelte';
	export let step = 0;

	let value = '';
	$: isValid = value.length > 0;
</script>

<EachStep bind:currentStep={step} targetStep={0} {isValid}>
	<div class="flex w-1/2 flex-col">
		<h1 class="text-3xl text-white">1. 프로젝트 이름을 입력해주세요.*</h1>
		<InputBox bind:value />
		<div class="mt-4 flex">
			<WarningButton class={isValid ? 'hidden' : ''} />
		</div>
	</div>
</EachStep>
