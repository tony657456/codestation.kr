<script>
	import GradientButton from '$lib/components/GradientButton.svelte';
</script>

<div class="flex {$$props.class}">
	<GradientButton class="grid grid-cols-2 items-center justify-center gap-2 py-2 pl-4 pr-1 text-sm">
		<span>확인</span>
		<img src="images/check.png" alt="check" class="w-3" />
	</GradientButton>
	<div class="flex items-center justify-center pl-3 text-sm text-white">
		<span>Enter</span>
		<img src="images/enter.png" class="w-3 object-contain text-sm" alt="enter" />
		<div class="w-1" />
		<span>를 누르십시오</span>
	</div>
</div>
