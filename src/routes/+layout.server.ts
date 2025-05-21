import type { LayoutServerLoad } from '../../.svelte-kit/types/src/routes/$types';

export const load: LayoutServerLoad = async ({ cookies,  url }) => {
    let access_token = url.searchParams.get('access_token');
    //const refresh_token = url.searchParams.get('refresh_token');
    //const expires_in = url.searchParams.get('expires_in');

    if (!access_token) {
        access_token = cookies.get('token') || null;
    }

    if (!access_token) {
        return {
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
        user,
        token: access_token
    }
}