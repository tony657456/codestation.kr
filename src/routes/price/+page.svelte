<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Price from './Price.svelte';
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<Container>
	<div class="relative flex w-full flex-col items-center justify-center">
		<img src="price_background.png" class="h-screen w-full" alt="background" />
		<Price />
	</div>
</Container>
