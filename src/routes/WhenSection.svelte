<script lang="ts">
	import Container from '../lib/components/Container.svelte';
	import { When } from '../lib/constants/when';
	import WhenCard from './WhenCard.svelte';
</script>

<Container dark>
	<div class="flex w-full flex-col gap-4 py-4">
		<h1 class="text-4xl font-black text-neutral-50 max-md:text-2xl">
			코드스테이션에 와야할 <span class="text-gradient-0">때, 때, 때</span>
		</h1>
		<div class="grid grid-cols-3 gap-4 py-4 max-md:grid-cols-1">
			{#each When as item}
				<WhenCard {...item} />
			{/each}
		</div>
	</div>
</Container>
