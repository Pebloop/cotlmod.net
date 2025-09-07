import {useState} from "react";
import {TutorialInstall} from "~/routes/tutorials/install.tutorial";

export default function Tutorials() {
    return <Component />
}

function Component() {
    const [selectedTutorial, setSelectedTutorial] = useState(0)

    const tutorials = [
        {
            index: 0,
            name: "How to install a mod",
            page: TutorialInstall()
        }
    ]

    return (<div className={"flex flex-row justify-center"}>
        <div className={"flex flex-col bg-elevation-2 w-1/5 rounded-2xl p-4 m-4 justify-start"}>
            {tutorials.map((tuto) => {
                return (<button className={"text-left hover:bg-elevation-3 p-1 pl-2 pr-2 rounded-2xl " + (selectedTutorial == tuto.index ? "bg-elevation-3" : "cursor-pointer")}>{tuto.name}</button>)
            })}
        </div>
        <div className={"bg-elevation-1 w-1/2 rounded-2xl p-4 m-4 justify-start"}>
            {tutorials[selectedTutorial].page}
        </div>
    </div>)
}