<script lang="ts">
	export let type: 'question' | 'answer' = 'question';
	export let content = '기획부터 디자인, 개발, QA까지 모두 진행';
</script>

<div class="flex w-full {type === 'question' ? 'justify-start' : 'justify-end'} py-2">
	<span
		class="max-w-[80%] rounded-2xl p-4 text-xl font-medium text-neutral-50 max-md:text-base {type ===
		'question'
			? ' rounded-bl-none bg-red-500'
			: 'rounded-br-none bg-orange-500'}">{content}</span
	>
</div>
