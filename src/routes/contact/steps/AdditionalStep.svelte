<script lang="ts">
	import FileUploader from '$lib/components/FileUploader.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import EachStep from './EachStep.svelte';
	export let step = 0;

	let value = '';
	$: isValid = value.length > 0;
</script>

<EachStep bind:currentStep={step} targetStep={5} {isValid} isLastStep>
	<div class="flex w-1/2 flex-col gap-4 max-md:w-full max-md:px-1">
		<h1 class="text-3xl text-white max-md:text-xl">6. 프로젝트에 대해 더 설명해주세요.*</h1>
		<div class="flex flex-col gap-4">
			<div class="flex flex-col">
				<span class="title-color-secondary">*추가 설명(선택)</span>
				<TextArea name="additionalInformation" />
			</div>
			<FileUploader />
		</div>
	</div>
</EachStep>
