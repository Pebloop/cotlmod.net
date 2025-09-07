import type {Route} from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "COTLMODS" },
        { name: "description", content: "The Cult of The Lamb mods website." },
    ];
}

export default function Load() {
    return <span></span>
}