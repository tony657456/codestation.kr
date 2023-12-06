<script lang="ts">
	import EachStep from './EachStep.svelte';
	export let step = 0;

	let information = '';

	$: isValid = information.length > 0;
</script>

<EachStep bind:currentStep={step} targetStep={1} {isValid} isLastStep>
	<div class="flex w-1/2 flex-col gap-4">
		<h1 class="text-3xl text-white">2. 프로젝트 정보를 입력해주세요.*</h1>
		<input
			name="information"
			bind:value={information}
			class="border-b-2 border-[#215AEF] bg-transparent p-2 text-white"
			placeholder="답변을 입력해 주세요..."
		/>
	</div>
</EachStep>
