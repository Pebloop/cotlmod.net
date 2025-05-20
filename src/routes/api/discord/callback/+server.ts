import type {RequestHandler} from "@sveltejs/kit";
import {env} from "$env/dynamic/private";

export const GET: RequestHandler = async ({ url, cookies }) => {

    const code = url.searchParams.get("code");
    const creds = btoa(`${env.CLIENT_ID}:${env.CLIENT_SECRET}`);

    if (!code) {
        return new Response(JSON.stringify({ error: 'No code provided' }), { status: 400 });
    }

    const body = new URLSearchParams();
    body.append("client_id", env.CLIENT_ID);
    body.append("client_secret", env.CLIENT_SECRET);
    body.append("grant_type", "authorization_code");
    body.append("code", code);

    const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}`,
      {
          method: 'POST',
          headers: {
              Authorization: `Basic ${creds}`,
          },
        body: body,
      });
    const json = await response.json();

    console.log('Response from Discord:', json);

    if (response.ok) {
        const accessToken = json.access_token;
        const refreshToken = json.refresh_token;
        const expiresIn = json.expires_in;

        // Set the cookies
        cookies.set('access_token', accessToken, {path: '/', expires: new Date(expiresIn)});
        cookies.set('refresh_token', refreshToken, {path: '/', expires: new Date(expiresIn)});

        // Redirect to the mods page
        return new Response(null, { status: 302, headers: { Location: '/' } });
    } else {
        return new Response(JSON.stringify({ error: json.error }), { status: 500 });
    }
}