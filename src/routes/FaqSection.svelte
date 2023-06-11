<script lang="ts">
	import Container from '../lib/components/Container.svelte';
	import { ChevronRight, Icon } from 'svelte-hero-icons';
	import { Faq } from '../lib/constants/faq';
	import FaqCard from './FaqCard.svelte';
</script>

<Container>
	<div class="flex w-full flex-col gap-4 py-4">
		<h1 class="text-4xl font-black">FAQ</h1>
		<p class="font-medium text-neutral-500">
			예상되는 질문들에 미리 답변드립니다. 자세한 사항은 문의 주시면 빠르게 답변드리겠습니다.
		</p>
		<div>
			{#each Faq as item}
				<FaqCard {...item} />
			{/each}
		</div>
		<a
			href="https://minsu.info"
			target="_blank"
			class="flex items-center justify-center gap-2 rounded-2xl bg-neutral-200 p-4 text-lg font-medium text-neutral-900"
		>
			<div class="flex gap-x-2 max-md:flex-col max-md:items-end">
				<span class="text-neutral-500">개발자 포트폴리오가 궁금하신가요?</span>
				<span>개발자 포트폴리오 사이트 보기</span>
			</div>
			<Icon src={ChevronRight} class="h-6 w-6" />
		</a>
	</div>
</Container>
