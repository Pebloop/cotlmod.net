import type {PageServerLoad} from "../../.svelte-kit/types/src/routes/$types";
import {db} from "$lib/db";

export const load: PageServerLoad = async ({ cookies,  url }) => {
    let access_token = url.searchParams.get('access_token');
    const refresh_token = url.searchParams.get('refresh_token');
    const expires_in = url.searchParams.get('expires_in');

    if (!access_token) {
        access_token = cookies.get('access_token') || null;
    }

    const mods = await db.mods.getAll()

    if (!access_token) {
        return {
            mods,
            user: null,
            token: null
        }
    }

    const response = await fetch('https://discord.com/api/v10/users/@me', {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    const user = await response.json();

    return {
        mods,
        user,
        token: access_token
    }
}