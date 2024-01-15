<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('click');
	};
</script>

<button
	on:click={handleClick}
	class=" rounded-xl bg-blue-500 px-4 py-2 font-bold text-white {$$props.class}"
>
	<slot />
</button>
