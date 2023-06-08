<script lang="ts">
	import Container from '../lib/components/Container.svelte';
	import { ChevronRight, Icon } from 'svelte-hero-icons';
	import { Faq } from '../lib/constants/faq';
	import FaqCard from './FaqCard.svelte';
</script>

<Container>
	<div class="flex w-full flex-col gap-4 py-4">
		<h1 class="text-4xl font-black">당신이 찾던 회사</h1>
		<p class="font-medium text-neutral-500">기획과 디자인까지 가능한 풀스택 개발자</p>
		<div>
			{#each Faq as item}
				<FaqCard {...item} />
			{/each}
		</div>
		<a
			href="https://minsu.info"
			target="_blank"
			class="flex justify-center gap-2 rounded-2xl bg-neutral-200 p-4 text-lg font-medium text-neutral-900"
		>
			<span class="text-neutral-500">개발자 포트폴리오가 궁금하신가요?</span>
			<span>개발자 포트폴리오 사이트 보기</span>
			<Icon src={ChevronRight} class="h-6 w-6" />
		</a>
	</div>
</Container>
