import type {RequestHandler} from "@sveltejs/kit";
import {env} from "$env/dynamic/private";

export const POST: RequestHandler = async ({ url, cookies, request }) => {

    const token = request.headers.get("Authorization")?.split(" ")[1];
    const body = await request.json();

    return new Response(JSON.stringify({ message: "Mod successfully added" }), { status: 200, headers: { "Content-Type": "application/json" } });
}