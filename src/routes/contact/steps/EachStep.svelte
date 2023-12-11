<script lang="ts">
	import ContactButton from '../buttons/ContactButton.svelte';

	export let currentStep = 0;
	export let targetStep = 0;

	export let isValid = false;
	export let isLastStep = false;

	const handleClick = () => {
		currentStep++;
	};

	$: visible = currentStep === targetStep;
</script>

<div
	class="flex min-h-screen w-full flex-col items-center justify-center bg-black {visible
		? 'flex'
		: 'hidden'} "
>
	<slot />
	<div class="h-3" />
	{#if currentStep === targetStep}
		<ContactButton
			on:click={(e) => {
				if (isLastStep === true) return;
				e.detail.preventDefault();
				if (isValid === false) return;
				handleClick();
			}}
		/>
	{/if}
</div>
