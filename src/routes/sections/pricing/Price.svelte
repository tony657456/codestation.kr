<script>
	import Container from '$lib/components/Container.svelte';
	import PriceSection from './PriceSection.svelte';
</script>

<Container class="z-20 min-h-screen bg-transparent">
	<div slot="background" class="relative h-full w-full">
		<img
			src="price_background.png"
			class="absolute inset-0 -z-10 h-screen w-full object-cover"
			alt="background"
		/>
		<div class="h-full w-full bg-gradient-to-b from-black via-black/10 to-transparent" />
	</div>
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
