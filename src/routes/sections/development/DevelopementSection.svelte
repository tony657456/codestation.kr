<script>
	import Container from '$lib/components/Container.svelte';
	import { SayDeveloper } from '$lib/constants/say-developer';
	import DeveloperCard from './DeveloperCard.svelte';
</script>

<Container class="min-h-screen">
	{#each SayDeveloper as item}
		<DeveloperCard {...item} />
	{/each}
</Container>
