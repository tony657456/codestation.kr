<script>
	import Container from '$lib/components/Container.svelte';
	import BoardSection from './BoardSection.svelte';
</script>

<Container>
	<div class="flex h-screen w-full justify-center bg-black max-md:h-full">
		<div class="flex flex-col items-center justify-center max-md:py-24">
			<div class="flex py-3 text-3xl font-medium max-md:text-lg">
				<span class=" text-[#3D81B2]">코드스테이션</span>
				<span class=" text-white">을 선택해야 하는 이유</span>
			</div>
			<span class="text-white max-md:text-xs">오랜 경력의 시니어 개발자와 디자이너가 작업하여</span>
			<span class="text-white max-md:text-xs"
				>폭넓은 스택과 깔끔하고 빠른 속도의 기획, 개발과 디자인을 한번에 챙길 수 있습니다.</span
			>
			<div class="w-3/4 pt-14 max-md:w-full max-md:p-6"><BoardSection /></div>
		</div>
	</div>
</Container>
