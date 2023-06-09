<script lang="ts">
	export let title = 'AtoZ';
	export let description = '기획부터 디자인, 개발, QA까지 모두 진행';
	export let selected = false;
</script>

<div class="flex flex-col">
	<span class="mb-2 text-xl font-bold {selected ? 'text-neutral-900' : 'text-neutral-500'}"
		>{title}</span
	>
	<hr class="mb-4 h-[2px] {selected ? 'gradient-0' : 'bg-neutral-300'}" />
	<span class="font-medium text-neutral-500">{description}</span>
</div>
