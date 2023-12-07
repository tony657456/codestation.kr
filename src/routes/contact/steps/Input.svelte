<script lang="ts">
	import AlertText from '../AlertText.svelte';

	export let value = '';
	export let name = '';
	export let validate: (value: string) => boolean = () => true;

	let status: 'initialized' | 'valid' | 'invalid' = 'initialized';
</script>

<div class="flex flex-col gap-4">
	<input
		{name}
		bind:value
		on:input={() => {
			status = validate(value) ? 'valid' : 'invalid';
		}}
		class="border-b-2 border-[#dbe4fa] bg-transparent p-2 text-white"
		placeholder="답변을 입력해 주세요..."
	/>
	<AlertText hidden={status !== 'invalid'} />
</div>
