import type {RequestHandler} from "@sveltejs/kit";
import {env} from "$env/dynamic/private";

export const GET: RequestHandler = async ({ url }) => {

    const code = url.searchParams.get("code");
    const creds = btoa(`${env.CLIENT_ID}:${env.CLIENT_SECRET}`);

    const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}`,
      {
          method: 'POST',
          headers: {
              Authorization: `Basic ${creds}`,
          },
      });
    const json = await response.json();

    if (response.ok) {
        const accessToken = json.access_token;
        const refreshToken = json.refresh_token;
        const expiresIn = json.expires_in;

        // Save the tokens to the database
        // await db.tokens.create({ accessToken, refreshToken, expiresIn });

        // Redirect to the mods page
        return new Response(
            JSON.stringify({
                accessToken,
                refreshToken,
                expiresIn,
            })
          , { status: 302, headers: { Location: '/' } });
    } else {
        return new Response(JSON.stringify({ error: json.error }), { status: 500 });
    }
}