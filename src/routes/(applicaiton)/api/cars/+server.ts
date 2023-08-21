import { json } from '@sveltejs/kit';

import { CarSchema } from '$lib/types/car';

import { readCarJson, updateCarJson } from './utils';

export function GET() {
	return json({ cars: readCarJson() });
}

export async function POST({ request }) {
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

	const { chassisNumber } = carToUpdate.data;

	if (cars.find(({ chassisNumber: cn }) => cn === chassisNumber))
		return json(
			{
				error: `There is already a car registered with ${chassisNumber} chassis number.`
			},
			{ status: 400 }
		);

	updateCarJson([...cars, carToUpdate.data]);

	return json(undefined, { status: 201 });
}
