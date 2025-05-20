import type {PageServerLoad} from "../../.svelte-kit/types/src/routes/$types";
import {db} from "$lib/db";

export const load: PageServerLoad = async ({ params }) => {
    const mods = await db.mods.getAll()

    return {
        mods
    }
}