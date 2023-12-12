<script lang="ts">
	import { moveRight } from '$lib/utils/scrollDetectionStyle';

	export let beforeName = '';
	export let nextName = '';
	export let isInView: boolean;
	export let moveRightSequence: string;
</script>

<div class="flex">
	<div class="color-change z-10 rounded-full px-5 text-xl text-white">{beforeName}</div>

	<div
		class="{moveRight(
			isInView,
			moveRightSequence,
		)} absolute rounded-full bg-blue-500 px-5 text-xl text-white"
	>
		{nextName}
	</div>
</div>
