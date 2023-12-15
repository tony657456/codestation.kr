<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import ScrollDetectContainer from '$lib/components/ScrollDetectContainer.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { CleanFlowSection } from '$lib/constants/clean-flow';
	import { AfterName, BeforeName } from '$lib/constants/flow-step';
	import AfterCard from './AfterCard.svelte';
	import BeforeCard from './BeforeCard.svelte';
	let isInView: boolean;
	let outerWidth: number;
	let largestWidth: number;
</script>

<Container class="min-h-screen">
	<div class="grid w-full grid-cols-2 items-center max-md:grid-cols-1 max-md:items-start">
		<SectionTitle {...CleanFlowSection} class="col-span-1" />
		<ScrollDetectContainer bind:isInView class="col-span-1">
			<div class="relative flex" bind:offsetWidth={outerWidth}>
				<div class="flex flex-col items-center justify-center gap-y-4">
					{#each BeforeName as item, index}
						<BeforeCard {...item} {isInView} {index} />
					{/each}
				</div>
				{#each AfterName as item, index}
					{#if index === 2}
						<AfterCard
							{...item}
							{isInView}
							{outerWidth}
							{index}
							{largestWidth}
							bind:innerWidth={largestWidth}
						/>
					{:else}
						<AfterCard {...item} {isInView} {outerWidth} {index} {largestWidth} />
					{/if}
				{/each}
			</div>
		</ScrollDetectContainer>
	</div>
</Container>
