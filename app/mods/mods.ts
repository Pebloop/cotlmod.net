export interface Mod {
    name: string;
    author: string;
    author_link: string;
    image: string;
    tags: string[];
    description: string;
    link: string;
    page: string;
}

export const mods = [
    "/mods/custom_spine_loader.json"
]

export async function loadMod(index: number) : Promise<Mod | null> {
    const meta = await fetch(mods[index]);
    if (!meta) return null;
    const json = await meta.json()

    return json as Mod;
}

export async function loadMods() : Promise<Mod[]> {
    let list: Mod[] = []

    for (let i = 0; i < mods.length; i++) {
        const mod = await loadMod(i)
        if (mod != null) {
            list.push(mod)
        }
    }

    return list
}

export async function readMod(mod: Mod) : Promise<string> {
    const readme = await fetch(mod.page);
    return await readme.text()
}

export function getTags(mods: Mod[]) {
    let list: string[] = []
    for (let i = 0; i < mods.length; i++) {
        const mod = mods[i];
        for (let j = 0; j < mod.tags.length; j++) {
            const tag = mod.tags[j];
            if (!list.includes(tag)) {
                list.push(tag)
            }
        }
    }
    return list
}