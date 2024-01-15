<script lang="ts">
	import GradientButton from '$lib/components/GradientButton.svelte';
	import ScrollDetectContainer from '$lib/components/ScrollDetectContainer.svelte';
	import { fadeFromBottom, type TDelay } from '$lib/utils/scrollDetectionStyle';
	import UnderArrow from './UnderArrow.svelte';
	let isInView: boolean;
	const delay: TDelay = 150;
	import { contactModalShow } from '$lib/stores/contact-modal-store';
</script>

<div class="relative h-screen">
	<video
		class="bg-video__content absolute inset-0 -z-10 h-full w-full object-fill max-md:object-cover"
		playsinline
		autoplay
		muted
		loop
	>
		<source src="intro-background-video.mov" class="w-full" type="video/mp4" />
	</video>
	<div
		class="\ z-10 flex h-full w-full flex-col items-center justify-between bg-gradient-to-b from-transparent via-black/10 to-black"
	>
		<UnderArrow hidden />
		<ScrollDetectContainer bind:isInView>
			<div
				class="flex w-full flex-col items-center justify-center {fadeFromBottom(isInView, delay)}"
			>
				<span class="text-4xl font-semibold text-white max-md:text-2xl">최고의 아웃소싱 파트너</span
				>
				<div class="h-2" />
				<span class="text-gradient-primary text-5xl font-black max-md:py-1 max-md:text-3xl"
					>코드스테이션</span
				>
				<div class="h-4" />
				<span class="text-lg text-neutral-100 max-md:text-base">기획, 개발, 디자인, QA 올인원</span>
				<span class="pb-6 text-lg text-neutral-100 max-md:text-base"
					>당신이 가진 비즈니스 아이디어를 최고의 프로덕트로</span
				>
				<div class="h-4" />
				<GradientButton
					on:click={() => contactModalShow.set(true)}
					class="px-10 py-4 text-xl font-bold">코드스테이션 문의하기</GradientButton
				>

				<div class="h-2" />
			</div>
		</ScrollDetectContainer>
		<UnderArrow />
	</div>
</div>
