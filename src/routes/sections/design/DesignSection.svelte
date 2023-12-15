<script>
	import Container from '$lib/components/Container.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { CleanDesignSection } from '$lib/constants/clean-design';
</script>

<Container class="min-h-screen items-center">
	<div slot="background" class="relative h-full w-full">
		<img
			src="/images/design_background.png"
			alt="design_background"
			class="absolute -z-10 h-full w-full object-cover"
		/>
		<div class="h-full w-full bg-gradient-to-b from-black via-black/50 to-black" />
	</div>
	<div class="flex w-full justify-end">
		<SectionTitle {...CleanDesignSection} />
	</div>
</Container>
