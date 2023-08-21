import { error } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import { CarSchema } from '$lib/types/car';

export async function load({ params: { id: chassisNumber }, fetch }) {
	const response = await fetch(`/api/cars/${chassisNumber}`);

	if (!response.ok)
		throw error(response.status, {
			message: `Failed to load car with ${chassisNumber} chassis number.`
		});

	const data = await response.json();

	return { form: superValidate(data, CarSchema) };
}
