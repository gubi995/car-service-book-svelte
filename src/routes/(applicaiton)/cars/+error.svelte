<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="mx-8 my-5">
	<h2 class="mb-3 text-xl font-semibold">Something went wrong!</h2>
	<span class="text-sm text-cyan-800">{$page.error?.message}</span>
</div>
