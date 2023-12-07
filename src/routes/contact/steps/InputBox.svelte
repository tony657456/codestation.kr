<script lang="ts">
	export let value = '';
</script>

<div class="flex flex-col">
	<input
		name="name"
		bind:value
		class="border-b-2 border-[#dbe4fa] bg-transparent p-2 text-white"
		placeholder="답변을 입력해 주세요..."
	/>
</div>
