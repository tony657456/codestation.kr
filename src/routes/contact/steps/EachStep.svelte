<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ContactButton from '../buttons/ContactButton.svelte';
	import { Backspace, Icon } from 'svelte-hero-icons';

	export let currentStep = 0;
	export let targetStep = 0;

	export let isValid = false;
	export let isLastStep = false;

	const handleClick = () => {
		currentStep++;
	};

	// const handleBackClick = () => {
	// 	currentStep--;
	// };

	$: visible = currentStep === targetStep;
</script>

<!-- <button
	on:click={(e) => {
		e.preventDefault();
		handleBackClick;
	}}
>
	<Icon src={Backspace} class="col-span-1 h-6 w-6 text-white {visible ? 'flex' : 'hidden'} mt-32" />
</button> -->
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
