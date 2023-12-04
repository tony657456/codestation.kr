<script>
	import Container from '$lib/components/Container.svelte';
</script>

<Container>
	<div class="flex h-screen w-full items-center justify-center bg-black">
		<div class="flex w-1/3 flex-col gap-4">
			<h1 class="text-3xl text-white">1. 프로젝트 이름을 입력해주세요.*</h1>
			<input
				class="w-full border-b-2 border-[#215AEF] bg-transparent p-3 text-white"
				placeholder="답변을 입력해 주세요..."
			/>
			<div class="flex">
				<button class="h-10 w-20 rounded-full bg-[#3B82F6]">확인</button>
				<span>Enter</span>
			</div>
		</div>
	</div>
</Container>
