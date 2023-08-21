import { error } from '@sveltejs/kit';

import { CarsSchema } from '$lib/types/car';

export async function load({ fetch }) {
	const response = await fetch('/api/cars');

	if (!response.ok) throw error(response.status, { message: 'Failed to fetch cars.' });

	const data = await response.json();

	return CarsSchema.parse(data);
}
