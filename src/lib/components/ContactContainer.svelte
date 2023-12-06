<script lang="ts">
	import ContactCofirmButton from './ContactCofirmButton.svelte';
	import WarningButton from './WarningButton.svelte';

	export let isEmpty = false;
	export let inputValue = '';
	export let step = 0;
	function validationCheck() {
		if (inputValue === '') {
			isEmpty = true;
			return;
		}
		step++;
	}
</script>

<div class="flex w-full items-center justify-center bg-black">
	<div class="flex w-1/2 flex-col gap-4">
		<h1 class="text-3xl text-white">1. 프로젝트 이름을 입력해주세요.*</h1>
		<input
			bind:value={inputValue}
			class="border-b-2 border-[#215AEF] bg-transparent p-2 text-white"
			placeholder="답변을 입력해 주세요..."
		/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={validationCheck} class="flex">
			{#if isEmpty === false && inputValue === ''}
				<ContactCofirmButton />
			{:else if inputValue !== ''}
				<ContactCofirmButton />
			{:else}
				<WarningButton />
			{/if}
		</div>
	</div>
</div>
