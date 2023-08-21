<script lang="ts">
	export let customClass = '';
</script>

<button
	class="flex justify-center bg-cyan-900 p-3 text-sm text-cyan-200 disabled:bg-gray-500 {customClass}"
	{...$$restProps}><slot /></button
>
