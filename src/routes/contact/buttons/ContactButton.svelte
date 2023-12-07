<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ConfirmButton from './ConfirmButton.svelte';

	const dispatch = createEventDispatcher();

	const handleClick = (
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		},
	) => {
		dispatch('click', e);
	};
</script>

<button
	on:click={(e) => {
		handleClick(e);
	}}
	class="flex w-1/2 justify-start"
>
	<ConfirmButton />
</button>
