<script>
	import Container from '$lib/components/Container.svelte';
	import PriceSection from './PriceSection.svelte';
</script>

<Container class="z-20 min-h-screen bg-transparent">
	<img
		src="price_background.png"
		class="h-full w-full object-cover"
		slot="background"
		alt="background"
	/>
	<div class="flex w-full flex-col items-center justify-center">
		<span class="text-4xl font-semibold text-white max-md:text-xl">Pricing</span>
		<span class="text-linear-500 py-3 text-white max-md:py-1 max-md:text-2xl"
			>기능별 예상 견적을 살펴보세요</span
		>
		<div class="w-full">
			<PriceSection />
		</div>
	</div>
</Container>
