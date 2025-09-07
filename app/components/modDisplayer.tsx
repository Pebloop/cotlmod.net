import {type Mod, readMod} from "~/mods/mods";
import {useEffect, useState} from "react";
import Markdown from "react-markdown";

export function ModDisplayer({mod} : {mod: Mod}) {
    return <Component mod={mod}/>
}

function Component({mod}: {mod: Mod}) {
    const [displayInfo, setDisplayInfo] = useState<boolean>(false);
    const [markdown, setMarkdown] = useState<string>("");

    readMod(mod).then((content) => {
        setMarkdown(content);
    })

    return (
        <div>
            <div className={"min-h-screen w-full flex flex-col items-center pt-10 bg-hover absolute top-0 left-0 " + (displayInfo ? "" : "hidden")} >
                <div className={"min-h-20 w-9/10 flex flex-col bg-elevation-1 rounded-2xl"}>
                    <div className={"flex flex-row items-center justify-between p-4"}>
                        <h1 className={"text-2xl"}>{mod.name}</h1>
                        <button className={"bg-elevation-3 pl-4 pr-4 pt-2 pb-2 rounded-4xl cursor-pointer"} onClick={() => setDisplayInfo(false)}>X</button>
                    </div>
                    <div className={"flex flex-col items-start justify-start p-4 markdown"}>
                        <Markdown>{markdown}</Markdown>
                    </div>
                </div>
            </div>
            <div className="w-1/4 bg-elevation-2 rounded-2xl">
                <img src={mod.image} alt="Mod Displayer" className="w-full object-cover h-44 rounded-2xl"/>
                <div className="flex flex-row m-2">
                    {mod.tags.map(tag => {
                        return (
                            <p className="p-1 pl-3 pr-3 bg-background rounded-2xl">{tag}</p>
                        )
                    })}
                </div>
                <p className="w-full text-center text-xl">{mod.name}</p>
                <p className="w-full text-center">by <a href={mod.author_link}>{mod.author}</a></p>
                <p className="w-full p-3 text-sm">{mod.description}</p>
                <div className="flex flex-row justify-center items-center w-full">
                    <button className="bg-background p-3 rounded-2xl mr-4 mb-4 cursor-pointer" onClick={() => setDisplayInfo(true)}>More info</button>
                    <a className="bg-background p-3 rounded-2xl mb-4" href={mod.link}>Get the mod</a>
                </div>
            </div>
        </div>
    )
}