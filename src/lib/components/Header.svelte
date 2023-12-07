<script lang="ts">
	import Button from './Button.svelte';

	let scrollY: number;

	$: show = scrollY > 100;
</script>

<svelte:window bind:scrollY />
<header
	class="fixed z-50 flex w-full
	justify-center {show && 'bg-black'}
	transition-all duration-300 ease-in-out"
>
	<div
		class="flex w-full max-w-5xl items-center justify-between py-8 max-md:justify-center max-md:py-6"
	>
		<a href="/">
			<img src="logo_name.png" alt="codestation_logo" class="w-[200px] max-md:w-[180px]" />
		</a>
		<a
			href="/contact"
			on:click={(e) => {
				e.preventDefault();
				window.location.pathname = '/contact';
			}}
		>
			<Button
				class="transition-all duration-300 ease-in-out max-md:hidden {show
					? 'opacity-100'
					: 'opacity-0'}">문의하기</Button
			>
		</a>
	</div>
</header>
