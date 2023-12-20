<script lang="ts">
	export let hidden = false;
</script>

<div
	class="flex items-center justify-center gap-2 rounded-full border border-red-500 px-3 py-2 text-sm text-red-500 {hidden
		? 'hidden'
		: ''}"
>
	<img src="images/warning.webp" alt="warning" class="w-3" />
	<span class="text-sm">답변을 입력해 주세요</span>
</div>
