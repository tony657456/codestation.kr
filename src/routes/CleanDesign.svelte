<script>
	import Container from '$lib/components/Container.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { CleanDesignSection } from '$lib/constants/clean.design';
</script>

<div class="relative flex h-screen flex-col items-center justify-center">
	<img src="/images/design_background.png" alt="design_background" class="absolute h-full w-full" />
	<Container class="z-20 h-screen bg-transparent">
		<div class="flex w-full justify-end">
			<SectionTitle {...CleanDesignSection} />
		</div>
	</Container>
</div>
