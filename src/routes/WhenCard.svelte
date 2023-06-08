<script lang="ts">
	export let title = 'When';
	export let description = '기획부터 디자인, 개발, QA까지 모두 진행';
	export let imageUrl = '';
</script>

<div class="flex flex-col gap-y-4 rounded-2xl bg-neutral-50 p-4">
	<img src={imageUrl} alt={title} class="aspect-square w-full" />
	<h3 class="text-lg font-bold text-neutral-900">
		{title} <span class="text-gradient-0">때</span>
	</h3>
	<p class="text-neutral-500">{description}</p>
</div>
