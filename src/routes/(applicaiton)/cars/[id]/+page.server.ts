import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

import { CarSchema } from '$lib/types/car';

export const actions = {
	update: async (event) => {
		const {
			params: { id: chassisNumber },
			fetch
		} = event;
		const form = await superValidate(event, CarSchema);

		if (!form.valid) {
			return fail(400, { form });
		}

		const response = await fetch(`/api/cars/${chassisNumber}`, {
			method: 'PATCH',
			body: JSON.stringify(form.data)
		});

		if (!response.ok)
			return fail(response.status, {
				message: `Failed to update car with ${chassisNumber} chassis number.`
			});

		return { form };
	}
};
