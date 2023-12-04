<script>
	import Container from '$lib/components/Container.svelte';
	import SayDeveloperSection from '$lib/components/SayDeveloperSection.svelte';
	import { SayDeveloper } from '$lib/constants/say-developer';
</script>

<div class="h-screen w-full">
	<Container class="h-full">
		{#each SayDeveloper as item}
			<SayDeveloperSection {...item} />
		{/each}
	</Container>
</div>
