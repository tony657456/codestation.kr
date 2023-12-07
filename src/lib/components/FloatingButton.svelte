<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let scrollY: number;
</script>

<svelte:window bind:scrollY />
{#if scrollY > 50}
	<div
		class="sticky bottom-0 right-0 z-50 flex justify-end p-4 max-md:justify-center md:hidden"
		transition:fade
	>
		<a
			href="/contact"
			transition:fly={{ y: 100, duration: 500 }}
			class="gradient-primary flex w-full items-center
				justify-center justify-self-end rounded-2xl p-4 text-lg
				font-bold text-neutral-100 shadow-2xl md:hidden">문의하기</a
		>
	</div>
{/if}
