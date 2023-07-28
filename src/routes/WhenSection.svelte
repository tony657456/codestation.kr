<script lang="ts">
	import Container from '../lib/components/Container.svelte';
	import ScrollDetectContainer from '../lib/components/ScrollDetectContainer.svelte';
	import { When } from '../lib/constants/when';
	import { fadeFromBottom, type TDelay } from '../lib/utils/scrollDetectionStyle';
	import WhenCard from './WhenCard.svelte';

	let isInView: boolean;

	const delays: TDelay[] = [75, 150, 200];
</script>

<Container dark>
	<ScrollDetectContainer bind:isInView>
		<div class="flex w-full flex-col gap-4 py-4">
			<h2 class="text-4xl font-black text-neutral-50 max-md:text-2xl {fadeFromBottom(isInView)}">
				코드스테이션에 와야할 <span class="text-gradient-0">때, 때, 때</span>
			</h2>
			<div class="grid grid-cols-3 gap-4 py-4 max-md:grid-cols-1">
				{#each When as item, i}
					<WhenCard {...item} class=" {fadeFromBottom(isInView, delays[i])}" />
				{/each}
			</div>
		</div>
	</ScrollDetectContainer>
</Container>
