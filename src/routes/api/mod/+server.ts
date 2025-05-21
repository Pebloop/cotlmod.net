import type {RequestHandler} from "@sveltejs/kit";
import { db } from '$lib/db';

export const POST: RequestHandler = async ({ request }) => {

    const token = request.headers.get("Authorization")?.split(" ")[1];
    const body = await request.json();

    const userResponse = await fetch('https://discord.com/api/v10/users/@me', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!userResponse.ok) {
        return new Response(JSON.stringify({ message: "Invalid token" }), { status: 401, headers: { "Content-Type": "application/json" } });
    }

    const user = await userResponse.json();

    await db.mods.add({
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        name: body.name,
        description: body.description,
        author: user.id,
        version: body.version,
        link: body.link,
        image: body.image,
        tags: body.tags,
    })

    return new Response(JSON.stringify({ message: "Mod successfully added" }), { status: 200, headers: { "Content-Type": "application/json" } });
}