import type { Car } from '$lib/types/car';

import { readFileSync, writeFileSync } from 'fs';

export const readCarJson = () => {
	const carsJSON = readFileSync('src/lib/db/cars.json').toString();
	const { cars } = JSON.parse(carsJSON) as { cars: Car[] };

	return cars;
};

export const updateCarJson = (cars: Car[]) => {
	writeFileSync('src/lib/db/cars.json', JSON.stringify({ cars }));
};
