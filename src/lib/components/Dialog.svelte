<script lang="ts">
	import { onMount } from 'svelte';

	export let showModal: boolean = false;
	let dialog: HTMLDialogElement;
	$: if (dialog && showModal) dialog.showModal();
	$: if (dialog && !showModal) {
		dialog.close();
	}
	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	class="h-[90%] max-h-[700px] w-[95%] max-w-[1090px] rounded-md transition-all duration-700 ease-in-out max-md:px-4 {showModal
		? 'opacity-100'
		: 'opacity-0'}"
	bind:this={dialog}
	on:close={() => {
		showModal = false;
	}}
	on:click|self={() => dialog.close()}
>
	<div on:click|stopPropagation class="flex h-full w-full flex-col justify-center px-4 py-6">
		<slot />
	</div>
</dialog>
