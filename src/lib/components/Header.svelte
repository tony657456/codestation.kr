<script lang="ts">
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<header
	class="fixed flex w-full justify-center {scrollY > 100
		? 'bg-neutral-900'
		: 'bg-transparent'} z-50 transition-all duration-300"
>
	<div class="flex w-full max-w-5xl justify-between py-6">
		<h1 class="text-2xl font-black text-neutral-50">코드스테이션</h1>
		<button class="font-medium text-neutral-50">CONTACT</button>
	</div>
</header>
