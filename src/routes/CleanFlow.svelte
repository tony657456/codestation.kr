<script>
	import Container from '$lib/components/Container.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { CleanFlowSection } from '$lib/constants/clean.flow';
</script>

<Container>
	<div class="h-screen w-full">
		<SectionTitle {...CleanFlowSection} />
	</div>
</Container>
