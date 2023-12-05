<script>
	import Container from '$lib/components/Container.svelte';
	import StackList from './StackList.svelte';
</script>

<Container class="min-h-screen">
	<div class="flex w-full flex-col items-center justify-center bg-black max-md:h-full max-md:py-24">
		<div class="h-40" />
		<img src="images/clean_code_icon.png" alt="clean_code_icon" class="w-12" />
		<span class="py-2 text-white underline decoration-solid">코드스테이션의 강점 03</span>
		<div class="h-8" />
		<div class="flex pb-3 text-3xl font-medium max-md:pt-3 max-md:text-2xl">
			<span class="text-white">10년차 시니어 개발자의</span>
			<span class="text-gradient-primary">&nbsp클린코드</span>
		</div>
		<p class="text-neutral-200 max-md:text-sm">
			빠른 속도의 개발실력, 폭 넓은 기술 스택, 다양한 경험으로
		</p>
		<span class="text-neutral-200 max-md:text-sm"
			>웹, 앱, 서버, 크롤러, AI 까지 작업이 가능합니다.</span
		>
		<div class="flex w-full flex-col items-center py-9">
			<span class="py-3 text-3xl font-bold text-white max-md:py-0">기술 스택</span>
			<StackList />
		</div>
	</div>
</Container>
