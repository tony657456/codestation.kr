<script lang="ts">
	import ScrollDetectContainer from '$lib/components/ScrollDetectContainer.svelte';
	import { CleanCodeBoard } from '$lib/constants/clean-code-board';
	import { fadeFromBottom, type TDelay } from '$lib/utils/scrollDetectionStyle';
	import StackCard from './StackCard.svelte';

	let isInView: boolean;

	const delays: TDelay[] = [75, 150, 200];
</script>

<ScrollDetectContainer bind:isInView class="w-full">
	<div class="grid w-full grid-cols-5 gap-4 py-4 max-md:grid-cols-1 max-md:gap-2">
		{#each CleanCodeBoard as item, i}
			<StackCard {...item} class={fadeFromBottom(isInView, delays[i])} />
		{/each}
	</div>
</ScrollDetectContainer>
