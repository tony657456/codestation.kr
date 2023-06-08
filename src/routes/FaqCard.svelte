<script lang="ts">
	export let type: 'question' | 'answer' = 'question';
	export let content = '기획부터 디자인, 개발, QA까지 모두 진행';
</script>

<div class="flex w-full {type === 'question' ? 'justify-start' : 'justify-end'} py-4">
	<span
		class="mb-2 rounded-2xl bg-orange-500 p-4 text-xl font-medium text-neutral-50 {type ===
		'question'
			? ' rounded-bl-none'
			: 'rounded-br-none'}">{content}</span
	>
</div>
