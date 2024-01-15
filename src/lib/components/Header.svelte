<script lang="ts">
	import { page } from '$app/stores';
	import { contactModalShow } from '$lib/stores/contact-modal-store';
	import Button from './Button.svelte';

	let scrollY: number;

	$: show = scrollY > 100;
</script>

<svelte:window bind:scrollY />
<header
	class="fixed z-50 flex w-full
	justify-center {show && 'bg-black'}
	transition-all duration-300 ease-in-out
	{$page.url.pathname === '/contact/success' && 'hidden'}"
>
	<div
		class="flex w-full max-w-5xl items-center justify-between py-8 max-md:justify-center max-md:py-6"
	>
		<a href="/">
			<img src="/logo_name.png" alt="codestation_logo" class="w-[200px] max-md:w-[180px]" />
		</a>

		<Button
			on:click={() => contactModalShow.set(true)}
			class="transition-all duration-300 ease-in-out max-md:hidden {show
				? 'opacity-100'
				: 'opacity-0'} {$page.url.pathname === '/contact' ? 'hidden' : ''}">문의하기</Button
		>
	</div>
</header>
