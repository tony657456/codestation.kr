<script lang="ts">
	import ScrollDetectContainer from '$lib/components/ScrollDetectContainer.svelte';
	import { PriceBoard } from '$lib/constants/price.board';
	import { fadeFromBottom, type TDelay } from '$lib/utils/scrollDetectionStyle';
	import PriceCard from './PriceCard.svelte';

	let isInView: boolean;

	const delays: TDelay[] = [75, 150, 200];
</script>

<ScrollDetectContainer bind:isInView class="w-full">
	<div class="h-6" />
	<div class="grid grid-cols-2 gap-4 py-4 max-md:grid-cols-1 max-md:gap-4">
		{#each PriceBoard as item, i}
			<PriceCard {...item} class=" {fadeFromBottom(isInView, delays[i])}" />
		{/each}
	</div>
</ScrollDetectContainer>
