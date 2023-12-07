<script>
	import Container from '$lib/components/Container.svelte';
	import WhyBoardSection from './WhyBoardSection.svelte';
</script>

<Container class="min-h-screen">
	<div class="h-32" />
	<div class="flex h-full w-full items-center bg-black max-md:h-full">
		<div class="flex flex-col items-center max-md:py-24">
			<div class="flex text-3xl font-medium max-md:text-2xl">
				<span class="title-color-primary font-bold">코드스테이션</span>
				<span class=" text-white">을 선택해야 하는 이유</span>
			</div>
			<div class="h-3" />
			<div class="flex flex-col items-center justify-center text-neutral-200">
				<p class="max-md:text-center max-md:text-base">
					오랜 경력의 시니어 개발자와 디자이너가 작업하여
				</p>
				<span class="max-md:text-center max-md:text-base"
					>폭넓은 스택과 깔끔하고 빠른 속도의 기획, 개발과 디자인을 한 번에 챙길 수 있습니다.</span
				>
			</div>
			<div class="h-14" />
			<div class="w-full max-md:w-full"><WhyBoardSection /></div>
		</div>
	</div>
</Container>
