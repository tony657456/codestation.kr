<script>
	import Container from '$lib/components/Container.svelte';
	import PriceSection from './PriceSection.svelte';
</script>

<div class="relative flex h-screen w-full flex-col items-center justify-center">
	<img src="price_background.png" class="absolute h-full w-full" alt="background" />
	<Container class="z-20 bg-transparent">
		<div class="flex w-full flex-col items-center justify-center">
			<span class="text-4xl text-white max-md:text-xl">Pricing</span>
			<span class="text-linear-500 py-3 text-white max-md:py-1 max-md:text-2xl"
				>기능별 예상 견적을 살펴보세요</span
			>
			<div class="w-full">
				<PriceSection />
			</div>
		</div>
	</Container>
</div>
