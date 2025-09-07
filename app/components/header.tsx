import {changePage} from "~/store/pageStore";
import store from "~/store";

export function Header() {
  return (
    <nav className="flex items-center justify-between p-3 pl-5 bg-elevation-3 rounded-b-2xl">
        <a href="/" className="flex items-center justify-center text-lg">
            <img src="/logo_title.svg" alt="Logo" className="w-52" />
        </a>
        <div className="flex items-center justify-center text-lg">
            <button className="hover:underline" onClick={() => store.dispatch(changePage("MODS"))}>MODS</button>
            <hr className="border-l-1 h-6 rounded-2xl ml-2 mr-2"/>
            <button className="hover:underline" onClick={() => store.dispatch(changePage("TUTORIALS"))}>TUTORIALS</button>
            <hr className="border-l-1 h-6 rounded-2xl ml-2 mr-2"/>
            <button className="hover:underline" onClick={() => store.dispatch(changePage("TOOLS"))}>TOOLS</button>
            <hr className="border-l-1 h-6 rounded-2xl ml-2 mr-2"/>
            <a href="https://discord.gg/3PBUg43y" className="hover:underline">DISCORD</a>
        </div>
    </nav>
  );
}
