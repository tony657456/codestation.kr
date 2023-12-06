<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ContactButton from '../buttons/ContactButton.svelte';

	export let currentStep = 0;
	export let targetStep = 0;

	export let isValid = false;
	export let isLastStep = false;

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('click');
		currentStep++;
	};

	$: visible = currentStep === targetStep;
</script>

<div
	class="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-black {visible
		? 'flex'
		: 'hidden'} "
>
	<slot />
	<ContactButton
		mode={isValid ? 'confirm' : 'warning'}
		on:click={(e) => {
			if (isLastStep === true) return;
			e.detail.preventDefault();
			if (isValid === false) return;
			handleClick();
		}}
	/>
</div>
