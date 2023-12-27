<script lang="ts">
	export let value = '';
	export let name = '';
</script>

<textarea
	{name}
	bind:value
	class="resize-none border-b-2 border-blue-600 bg-transparent p-2 text-white"
	placeholder="답변을 입력해 주세요..."
	rows="5"
	cols="50"
/>
