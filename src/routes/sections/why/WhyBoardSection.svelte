<script lang="ts">
	import { Board } from '$lib/constants/main.boards';
	import ScrollDetectContainer from '$lib/components/ScrollDetectContainer.svelte';
	import { fadeFromBottom, type TDelay } from '$lib/utils/scrollDetectionStyle';
	import WhyBoardCard from './WhyBoardCard.svelte';

	let isInView: boolean;

	const delays: TDelay[] = [75, 150, 200];
</script>

<ScrollDetectContainer bind:isInView>
	<div class="grid w-full grid-cols-3 gap-4 py-4 max-md:grid-cols-1 max-md:gap-4">
		{#each Board as item, i}
			<WhyBoardCard {...item} class={fadeFromBottom(isInView, delays[i])} />
		{/each}
	</div>
</ScrollDetectContainer>
