<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let number = '';
	export let value = '';

	export let selected = false;

	const dispatch = createEventDispatcher();
	function handleClick() {
		dispatch('click');
	}
</script>

<button
	class="rounded-2xl border {selected ? 'border-sky-400' : 'border-sky-800'}"
	on:click|preventDefault={handleClick}
>
	<div class="flex items-center justify-start px-2 py-1">
		<div
			class="rounded-full border border-sky-300 px-2 text-sm text-sky-300 {selected
				? 'bg-sky-500'
				: ''}"
		>
			{number}
		</div>
		<span class="mx-2 text-lg text-sky-300 {selected ? 'font-bold' : ''}">{value}</span>
	</div>
</button>
