<script lang="ts">
	import Accordion from '$lib/ui/Accordion.svelte';
	import CarForm from '$lib/components/CarForm.svelte';

	export let data;
</script>

<div class="px-8 py-5">
	<h2 class="text-3xl font-bold">
		{data.form.data.make}
		{data.form.data.model}
	</h2>
	<Accordion label="Details">
		<CarForm car={data.form} action="?/update" />
	</Accordion>
	<slot />
</div>
