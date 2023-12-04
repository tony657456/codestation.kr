<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import GradientButton from '$lib/components/GradientButton.svelte';
	import UnderArrow from './UnderArrow.svelte';
</script>

<Container class="h-screen">
	<img src="main-background.png" slot="background" class="h-full w-full" alt="background" />
	<div class="flex w-full flex-col items-center justify-between">
		<UnderArrow hidden />
		<div class="flex w-full flex-col items-center justify-center">
			<span class="text-4xl font-semibold text-white max-md:text-xl">최고의 아웃소싱 파트너</span>
			<div class="h-2" />
			<span class="text-gradient-primary text-5xl font-black max-md:py-1 max-md:text-2xl"
				>코드스테이션</span
			>
			<div class="h-4" />
			<span class="text-lg text-neutral-100 max-md:text-sm">기획, 개발, 디자인 올인원</span>
			<span class="pb-6 text-lg text-neutral-100 max-md:text-sm"
				>아이디어에서 현실로의 완벽한 비즈니스</span
			>
			<div class="h-4" />
			<a href="/contact">
				<GradientButton>코드스테이션 문의하기</GradientButton>
			</a>
		</div>
		<UnderArrow />
	</div>
</Container>
