<script>
	import Container from '$lib/components/Container.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { CleanDesignSection } from '$lib/constants/clean-design';
</script>

<Container class="min-h-screen">
	<img
		src="/images/design_background.png"
		slot="background"
		alt="design_background"
		class="absolute h-full w-full object-cover opacity-30"
	/>
	<div class="flex w-full justify-end">
		<SectionTitle {...CleanDesignSection} />
	</div>
</Container>
