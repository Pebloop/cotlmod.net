import type {PageServerLoad} from "../../.svelte-kit/types/src/routes/$types";
import {db} from "$lib/db";

export const load: PageServerLoad = async ({ cookies }) => {
    const accessToken = cookies.get('access_token');
    const mods = await db.mods.getAll()

    if (!accessToken) {
        return {
            mods,
            user: null
        }
    }

    const response = await fetch('https://discordapp.com/api/v10/users/@me', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const user = await response.json();

    return {
        mods,
        user
    }
}