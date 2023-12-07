<script lang="ts">
	import EachStep from './EachStep.svelte';
	export let step = 0;

	let name = '';

	$: isValid = name.length > 0;
</script>

<EachStep bind:currentStep={step} targetStep={0} {isValid}>
	<div class="flex w-1/2 flex-col gap-4">
		<h1 class="text-3xl text-white">1. 프로젝트 이름을 입력해주세요.*</h1>
		<input
			name="name"
			bind:value={name}
			class="border-b-2 border-[#215AEF] bg-transparent p-2 text-white"
			placeholder="답변을 입력해 주세요..."
		/>
	</div>
</EachStep>
