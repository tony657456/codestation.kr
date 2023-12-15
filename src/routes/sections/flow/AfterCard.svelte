<script lang="ts">
	import type { TDelay } from '$lib/utils/scrollDetectionStyle';
	export let afterName = '';
	export let outerWidth = 0;
	export let isInView: boolean;
	export let index: number;
	export let largestWidth: number;
	export let innerWidth: number = 0;
	let eachHeight: number;
	$: eachTop = eachHeight + 16;
	const delays: TDelay[] = [0, 150, 300, 500, 700];
</script>

<div
	bind:offsetWidth={innerWidth}
	bind:offsetHeight={eachHeight}
	class="absolute left-0 flex translate-x-0 flex-col gap-y-4 transition-all delay-{delays[
		index
	]} duration-1000"
	style="
  top: {eachTop * index}px;
  {isInView
		? ` transform: translate(${outerWidth - innerWidth - (largestWidth - innerWidth) / 2}px);
opacity:100%;
}
`
		: 'opacity: 0;'}"
>
	<div
		class="gradient-primary z-10 w-fit rounded-full px-5 py-2 text-xl text-white max-md:text-base"
	>
		{afterName}
	</div>
</div>
