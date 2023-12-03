<script>
	import PriceSection from './PriceSection.svelte';
</script>

<div class="absolute flex w-full flex-col items-center justify-center">
	<span class="text-4xl text-white max-md:text-xl">Pricing</span>
	<span class="text-linear-500 py-3 text-white drop-shadow-2xl max-md:py-1 max-md:text-2xl"
		>기능별 예상 견적을 살펴보세요</span
	>
	<div class="w-3/4">
		<PriceSection />
	</div>
</div>
