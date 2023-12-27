<script lang="ts">
	import { Icon, X } from 'svelte-hero-icons';

	let fileInput: HTMLInputElement;
	let files: FileList;
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center justify-between">
		<span class="title-color-secondary">*기획안 업로드(선택)</span>
		<label for="file">
			<span class="block cursor-pointer rounded-xl bg-blue-500 px-4 py-2 font-bold text-white">
				파일 찾기
			</span>
		</label>
		<input hidden type="file" name="file" id="file" bind:files bind:this={fileInput} />
	</div>
	{#if files?.[0]}
		<span
			class="relative flex w-full
  resize-none items-center rounded-lg border border-neutral-700
  bg-black bg-opacity-80 px-4 py-2 text-white"
			>{files[0].name}
			<button
				on:click={() => {
					fileInput.value = '';
				}}
				type="button"
				class="absolute right-2.5 ml-auto inline-flex items-center bg-transparent"
			>
				<Icon src={X} size="24" class="text-white transition-colors duration-200" />
			</button>
		</span>
	{/if}
</div>
