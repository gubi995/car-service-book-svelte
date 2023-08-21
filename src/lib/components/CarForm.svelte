<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { SuperValidated } from 'sveltekit-superforms';

	import { CarSchema } from '$lib/types/car';
	import Input from '$lib/ui/Input.svelte';
	import Select from '$lib/ui/Select.svelte';
	import Button from '$lib/ui/Button.svelte';

	export let action: string;
	export let car: SuperValidated<typeof CarSchema>;

	const { form, errors, enhance, submitting } = superForm(car, {
		dataType: 'json',
		validators: CarSchema
	});
</script>

<form class="mt-4 flex flex-col" method="POST" use:enhance {action}>
	{#if !car}
		<input type="text" />
		<Input bind:value={$form.make} labelText="Make" error={$errors.make?.at(0)} />
		<Input bind:value={$form.model} labelText="Model" error={$errors.model?.at(0)} />
	{/if}
	<Input
		bind:value={$form.chassisNumber}
		labelText="Chassis number"
		inputProps={{ readonly: Boolean(car) }}
		error={$errors.chassisNumber?.at(0)}
	/>
	<Input
		bind:value={$form.plateNumber}
		labelText="Plate number"
		error={$errors.plateNumber?.at(0)}
	/>
	<Select
		bind:value={$form.fuelType}
		labelText="Fuel type"
		selectProps={{ value: $form.fuelType }}
		error={$errors.fuelType?.at(0)}
	>
		{#each ['Diesel', 'Petrol', 'CNG'] as option}
			<option value={option}>{option}</option>
		{/each}
	</Select>
	<Input
		bind:value={$form.year}
		labelText="Year"
		inputProps={{ type: 'number' }}
		error={$errors.year?.at(0)}
	/>
	<Input
		bind:value={$form.enginePerformance}
		labelText="Engine performance"
		error={$errors.enginePerformance?.at(0)}
	/>
	<Input
		bind:value={$form.motorNumber}
		labelText="Motor number"
		error={$errors.motorNumber?.at(0)}
	/>
	<Select bind:value={$form.metric} labelText="Metric" error={$errors.metric?.at(0)}>
		{#each ['km', 'mi'] as option}
			<option value={option}>{option}</option>
		{/each}
	</Select>
	<Input bind:value={$form.mileage} labelText="Mileage" error={$errors.mileage?.at(0)} />
	<Input
		bind:value={$form.serviceInterval}
		labelText="Service interval"
		error={$errors.serviceInterval?.at(0)}
	/>

	<h3 class="mb-2 mt-3 font-semibold">Owner details</h3>
	<Input bind:value={$form.owner.name} labelText="Name" error={$errors.owner?.name?.at(0)} />
	<Input
		bind:value={$form.owner.address}
		labelText="Address"
		error={$errors.owner?.address?.at(0)}
	/>
	<Input
		bind:value={$form.owner.phoneNumber}
		labelText="Phone number"
		error={$errors.owner?.phoneNumber?.at(0)}
	/>

	<Button type="submit" disabled={!submitting} className="mt-5 w-[150px] self-center">
		{#if car}
			Update
		{:else}
			Create
		{/if}
	</Button>
</form>
