<script lang="ts">
	import { onMount } from 'svelte';
	import Container from '../lib/components/Container.svelte';
	import ScrollDetectContainer from '../lib/components/ScrollDetectContainer.svelte';
	import { Atoz } from '../lib/constants/atoz';
	import { fadeFromBottom } from '../lib/utils/scrollDetectionStyle';
	import AtozCard from './AtozCard.svelte';
	import { fade } from 'svelte/transition';

	let selectedIndex = 0;
	let interval: NodeJS.Timer;

	function startAnimation() {
		interval = setInterval(() => {
			selectedIndex++;
			if (selectedIndex === Atoz.length) {
				selectedIndex = 0;
			}
		}, 3000);
	}
	onMount(() => {
		interval = setInterval(() => {
			selectedIndex++;
			if (selectedIndex === Atoz.length) {
				selectedIndex = 0;
			}
		}, 3000);
		return () => clearInterval(interval);
	});

	let isInView: boolean;
</script>

<Container>
	<ScrollDetectContainer bind:isInView>
		<div class="flex w-full flex-col gap-4 py-4">
			<h1 class="text-4xl font-black {fadeFromBottom(isInView)}">AtoZ</h1>
			<p class="font-medium text-neutral-500 {fadeFromBottom(isInView, 75)}">
				기획부터 디자인, 개발, QA까지 모두 진행
			</p>
			<div class="grid grid-cols-4 gap-x-4 {fadeFromBottom(isInView, 100)}">
				{#each Atoz as atoz, i}
					<AtozCard
						{...atoz}
						selected={i === selectedIndex}
						on:mouseenter={() => {
							selectedIndex = i;
							clearInterval(interval);
						}}
						on:mouseleave={() => {
							startAnimation();
						}}
					/>
				{/each}
			</div>
			{#key selectedIndex}
				<p class="-mt-4 font-medium text-neutral-500 {fadeFromBottom(isInView, 150)}" in:fade>
					{Atoz[selectedIndex].description}
				</p>
			{/key}
		</div>
	</ScrollDetectContainer>
</Container>
