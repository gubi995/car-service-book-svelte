<script lang="ts">
	import type { HTMLLabelAttributes, HTMLInputAttributes } from 'svelte/elements';

	export let value: any;
	export let labelText = '';
	export let labelProps: HTMLLabelAttributes = {};
	export let inputProps: HTMLInputAttributes = {};
	export let error: string | undefined;
</script>

<label class="flex flex-col text-xs" {...labelProps} {...$$restProps}>
	<span class="pl-2">{labelText}</span>
	<input
		bind:value
		type="text"
		class="border-2 border-teal-600 px-4 py-2 text-sm read-only:bg-gray-200"
		{...inputProps}
	/>
	<span class="h-4 pl-2 text-red-500">{error ?? ''}</span>
</label>
