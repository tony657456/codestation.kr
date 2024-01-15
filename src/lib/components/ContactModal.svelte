<!-- show dialog -->
<script lang="ts">
	let href = 'https://whattime.co.kr/codestation/contatct?time_zone=Asia%2FSeoul';
	import Dialog from '$lib/components/Dialog.svelte';
	import { contactModalShow } from '$lib/stores/contact-modal-store';
</script>

<Dialog bind:showModal={$contactModalShow}>
	<iframe
		title="프로젝트 신규 문의"
		src={href}
		class="h-full w-full"
		height="100%"
		frameborder="0"
		width="100%"
	/>
</Dialog>
