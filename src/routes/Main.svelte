<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import FirstMainSection from './FirstMainSection.svelte';
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<div class="relative flex h-screen flex-col items-center justify-center">
	<img src="main_background.png" class="absolute h-full w-full" alt="background" />
	<Container>
		<div class="flex w-full flex-col items-center justify-center">
			<FirstMainSection />
		</div>
	</Container>
</div>
