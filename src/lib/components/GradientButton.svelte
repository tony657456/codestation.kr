<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('click');
	};
</script>

<button
	on:click={handleClick}
	class="gradient-primary box-border items-center rounded-full text-white {$$props.class}"
>
	<slot />
</button>
