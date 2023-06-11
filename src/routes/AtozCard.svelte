<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let title = 'AtoZ';
	export let selected = false;

	const dispatch = createEventDispatcher();

	const handleMouseEnter = () => {
		dispatch('mouseenter');
	};

	const handleMouseLeave = () => {
		dispatch('mouseleave');
	};
</script>

<div
	class="flex cursor-pointer flex-col"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	<span class="mb-2 text-xl font-bold {selected ? 'text-neutral-900' : 'text-neutral-500'}"
		>{title}</span
	>
	<hr class="mb-4 h-[2px] {selected ? 'gradient-0' : 'bg-neutral-300'}" />
</div>
