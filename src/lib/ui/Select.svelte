<script lang="ts">
	import type { HTMLLabelAttributes, HTMLSelectAttributes } from 'svelte/elements';

	export let value: any;
	export let labelText = '';
	export let labelProps: HTMLLabelAttributes = {};
	export let selectProps: HTMLSelectAttributes = {};
	export let error: string | undefined;
</script>

<label
	class="relative flex flex-col text-xs after:absolute after:right-[20px] after:top-[30px] after:text-cyan-950 after:content-['▼']"
	{...labelProps}
>
	<span>{labelText}</span>
	<select
		bind:value
		class="cursor-pointer appearance-none border-2 border-teal-600 px-4 py-2 text-sm"
		{...selectProps}
	>
		<slot />
	</select>
	<span class="h-4 pl-2 text-red-500">{error ?? ''}</span>
</label>
