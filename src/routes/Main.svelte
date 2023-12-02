<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import FirstMainSection from './FirstMainSection.svelte';
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<Container>
	<div class="relative flex h-screen w-full flex-col items-center justify-center">
		<img src="main_background.png" class="h-full w-full" alt="background" />
		<FirstMainSection />
	</div>
</Container>
