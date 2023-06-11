<script lang="ts">
	import ScrollDetectContainer from '../lib/components/ScrollDetectContainer.svelte';
	import { fadeFromBottom } from '../lib/utils/scrollDetectionStyle';

	let isInView: boolean;
</script>

<ScrollDetectContainer bind:isInView>
	<div class="gradient-0 flex flex-col items-center justify-center py-[160px]">
		<div class="flex flex-col {fadeFromBottom(isInView)}">
			<span class="text-3xl font-black text-neutral-50"
				>온라인 서비스는 <br class="hidden max-md:block" />코드스테이션에서,</span
			>
			<span class="text-3xl font-black text-neutral-50"
				>웹과 앱이 필요한 <br class="hidden max-md:block" />모든 문제를 해결해드립니다.</span
			>
		</div>
	</div>
</ScrollDetectContainer>
