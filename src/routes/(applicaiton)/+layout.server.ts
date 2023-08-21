import { redirect } from '@sveltejs/kit';

export function load({ url }) {
	const isLoggedIn = true;

	if (!isLoggedIn) throw redirect(303, `/login?redirectTo=${url.pathname ?? '/cars'}`);
	if (url.pathname === '/') throw redirect(303, '/cars');
}
