<script>
	import Container from '$lib/components/Container.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { CleanFlowSection } from '$lib/constants/clean-flow';
</script>

<Container class="min-h-screen">
	<!-- <img src="main-background.png" slot="background" class="h-full w-full" alt="background" /> -->
	<SectionTitle {...CleanFlowSection} />
</Container>
