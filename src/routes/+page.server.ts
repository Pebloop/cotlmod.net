import { db } from '$lib/db';

export const load = async ({ cookies, url }) => {
	const mods = await db.mods.getAll();
	
	return {
		mods
	}
}