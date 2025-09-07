import type { Route } from "./+types/home";
import { Header } from "~/components/header";
import {getPage} from "~/store/pageStore";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import Tutorials from "~/routes/tutorials";
import Mods from "~/routes/mods";
import Tools from "~/routes/tools";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "COTLMODS" },
    { name: "description", content: "The Cult of The Lamb mods website." },
  ];
}

export default function Home() {
    const page = useSelector(getPage);
    let pageElement = Mods()

    switch (page) {
        case "MODS":
            pageElement = Mods()
            break;
        case "TUTORIALS":
            pageElement = Tutorials()
            break;
        case "TOOLS":
            pageElement = Tools()
            break;
    }

    return (<main className="h-screen flex flex-col">
        <Header />
        {pageElement}
    </main>);
}
