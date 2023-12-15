<script lang="ts">
	import { convertButtonColor, type TDelay } from '$lib/utils/scrollDetectionStyle';

	export let beforeName = '';
	export let isInView: boolean;
	export let index = 0;
	const delays: TDelay[] = [0, 150, 300, 500, 700, 700];
</script>

<div
	class="z-10 w-fit rounded-full px-5 py-2 text-xl text-white max-md:text-base {convertButtonColor(
		isInView,
		delays[index],
	)}"
>
	{beforeName}
</div>
