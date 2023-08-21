import { json } from '@sveltejs/kit';

import { CarSchema } from '$lib/types/car';
import { readCarJson, updateCarJson } from '../utils';

export function GET({ params }) {
	const cars = readCarJson();

	const car = cars.find(({ chassisNumber }) => chassisNumber === params.id);

	if (!car)
		return json(
			{
				error: 'Car not found with the provided chassis number.'
			},
			{ status: 404 }
		);

	return json(car);
}

export async function PATCH({ request }) {
	const cars = readCarJson();
	const car = await request.json();
	const carToUpdate = CarSchema.safeParse(car);

	if (!carToUpdate.success)
		return json(
			{
				error: carToUpdate.error.formErrors.fieldErrors
			},
			{ status: 400 }
		);

	const carIndexToUpdate = cars.findIndex(
		(car) => car.chassisNumber === carToUpdate.data.chassisNumber
	);

	if (carIndexToUpdate === -1)
		return json(
			{
				error: 'Car not found with the provided chassis number.'
			},
			{ status: 404 }
		);

	cars[carIndexToUpdate] = { ...cars[carIndexToUpdate], ...carToUpdate.data };

	updateCarJson(cars);

	return new Response(undefined, { status: 200 });
}
