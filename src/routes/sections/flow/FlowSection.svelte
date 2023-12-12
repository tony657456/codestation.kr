<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import ScrollDetectContainer from '$lib/components/ScrollDetectContainer.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { CleanFlowSection } from '$lib/constants/clean-flow';
	import { FlowStep } from '$lib/constants/flow-step';
	import { fadeFromBottom, moveRight, type TDelay } from '$lib/utils/scrollDetectionStyle';
	import FlowCard from './FlowCard.svelte';
	let isInView: boolean;
	let moveRightSequence: string[] = ['primary', 'secondary', 'third'];
	let delay: TDelay = 75;
</script>

<Container class="min-h-screen">
	<div class="grid w-full grid-cols-2">
		<SectionTitle {...CleanFlowSection} class="col-span-1" />
		<ScrollDetectContainer bind:isInView class="col-span-1 mt-36 h-1/2">
			<div class="relative {fadeFromBottom(isInView, delay)}">
				{#if isInView}
					<div class="grid grid-cols-1 gap-y-4">
						{#each FlowStep as item, i}
							<FlowCard {...item} moveRightSequence={moveRightSequence[i]} isInView />
						{/each}
					</div>
				{/if}
			</div>
		</ScrollDetectContainer>
	</div>
</Container>
