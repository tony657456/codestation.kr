<script lang="ts">
	import Container from '../lib/components/Container.svelte';
	import { Atoz } from '../lib/constants/atoz';
	import AtozCard from './AtozCard.svelte';
</script>

<Container>
	<div class="flex w-full flex-col gap-4 py-4">
		<h1 class="text-4xl font-black">AtoZ</h1>
		<p class="font-medium text-neutral-500">기획부터 디자인, 개발, QA까지 모두 진행</p>
		<div class="grid grid-cols-4 gap-x-4">
			{#each Atoz as atoz, i}
				<AtozCard {...atoz} selected={i === 0} />
			{/each}
		</div>
	</div>
</Container>
