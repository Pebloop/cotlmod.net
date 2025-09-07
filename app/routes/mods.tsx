import {type JSX, useEffect, useState} from "react";
import {getTags, loadMods, type Mod} from "~/mods/mods";
import {ModDisplayer} from "~/components/modDisplayer";

export default function Mods() {
    return <Component />
}

function Component({}) {
    const [mods, setMods] = useState([] as Mod[])
    const [tags, setTags] = useState<string[]>([])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [searchValue, setSearchValue] = useState<string>('')
    const [modDisplayers, setModsDisplayers] = useState<JSX.Element[]>([]);

    useEffect(() => {
        setModsDisplayers(mods.map((mod) => {
            return ModDisplayer({mod})
        }))
    }, [mods, selectedTags, searchValue])

    function selectTag(tag: string) {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag))
        } else {
            setSelectedTags([...selectedTags, tag])
        }
    }

    loadMods().then((mods) => {
        const modTags = getTags(mods)
        let filteredMods = mods.filter((mod) => {
            if (selectedTags.length == 0)
                return true
            for (let i = 0; i < mod.tags.length; i++) {
                if (selectedTags.includes(mod.tags[i]))
                    return true
            }
            return false
        })
        filteredMods = filteredMods.filter((mod) => {
            return mod.name.toLowerCase().includes(searchValue.toLowerCase());

        })
        setMods(filteredMods)
        setTags(modTags)
    })

    return (
        <div className="flex w-full h-full">
            <div className="flex flex-col bg-elevation-2 w-1/5 rounded-2xl p-4 m-4">
                <input type="text" placeholder="Search" onInput={(it) => {setSearchValue((it.target as any).value)}} className="bg-background rounded-2xl p-2 mb-4"/>
                {tags.map((tag) => (
                    <button key={tag} onClick={() => selectTag(tag)} className={"cursor-pointer p-1 rounded-xl ml-10 mr-10 " + (selectedTags.includes(tag) ? "bg-light text-black" : "bg-elevation-1 text-white")}>{tag}</button>
                ))}
            </div>
            <div className="p-4 w-full">
                {modDisplayers}
            </div>
        </div>
    )
}
