<script lang="ts">
	import GradientBorderContainer from '$lib/components/GradientBorderContainer.svelte';
	import { createEventDispatcher } from 'svelte';
	import { Check, Icon } from 'svelte-hero-icons';
	export let number = '';
	export let value = '';

	export let selected = false;

	export const dispacher = createEventDispatcher();
</script>

<button
	on:click|preventDefault={() => {
		selected = !selected;
	}}
>
	<GradientBorderContainer padding={selected ? '3px' : '2px'}>
		<div class="flex items-center justify-between px-2 py-1">
			<div class="flex items-center">
				<div
					class="flex h-6 w-6 items-center justify-center rounded-full border border-blue-500 text-sm {selected
						? 'bg-blue-400 text-white'
						: 'text-blue-500'}"
				>
					<span>{number}</span>
				</div>
				<span class="mx-2 text-lg text-blue-500 {selected ? 'font-bold' : ''}">{value}</span>
			</div>
			<Icon src={Check} class="h-6 w-6 text-blue-500 {!selected ? 'opacity-0' : ''}" />
		</div>
	</GradientBorderContainer>
</button>
