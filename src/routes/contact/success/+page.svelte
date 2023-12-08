<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let restTime = 10;
	onMount(() => {
		const timer = setInterval(() => {
			restTime--;
			if (restTime === 0) {
				clearInterval(timer);
				goto('/');
			}
		}, 1000);
	});
</script>

<div class="relative h-screen">
	<video
		class="bg-video__content absolute inset-0 -z-10 h-full w-full object-fill max-md:object-cover"
		playsinline
		autoplay
		muted
		loop
	>
		<source src="/videos/success.mp4" class="w-full" type="video/mp4" />
	</video>
	<div class="z-10 flex h-full w-full flex-col items-center justify-center">
		<div class="flex w-full flex-col items-center justify-center">
			<span class="text-4xl font-semibold text-white max-md:text-2xl"
				>프로젝트 문의주셔서 감사합니다</span
			>
			<div class="h-4" />
			<span class="text-md text-neutral-100 max-md:text-base"
				>영업일 3일 이내로 연락드리겠습니다</span
			>
			<span class="text-md pb-6 text-neutral-100 max-md:text-base"
				>{restTime}초 뒤 랜딩페이지로 이동합니다</span
			>
		</div>
	</div>
</div>
