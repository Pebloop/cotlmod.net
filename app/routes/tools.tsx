export default function Tools() {
  return <Component />
}

function Component() {
    return (<div className="flex flex-col items-center justify-center">
        <div className="flex flex-col w-1/2">
            <div className="flex flex-col w-full bg-elevation-1 rounded-2xl p-4">
                <h1 className="font-bold text-2xl font-bold text-gray-900">BepInEx</h1>
                <p>
                    BepInEx is the framework that allow you to modify a unity game (Cult of the Lamb here).
                    You can download it here : <a className={"text-light"} href={"https://thunderstore.io/c/cult-of-the-lamb/p/BepInEx/BepInExPack_CultOfTheLamb/"}>https://thunderstore.io/c/cult-of-the-lamb/p/BepInEx/BepInExPack_CultOfTheLamb/</a>
                </p>
            </div>
            <div className="flex flex-col w-full bg-elevation-2 rounded-2xl p-4">
                <h1 className="font-bold text-2xl font-bold  text-right">COTL_API</h1>
                <p>
                    COTL_API is an api mod created by Hayper in order to make mod creation easier.
                    You can download it here: <a className={"text-light"} href="https://thunderstore.io/c/cult-of-the-lamb/p/xhayper/COTL_API/">https://thunderstore.io/c/cult-of-the-lamb/p/xhayper/COTL_API/</a>.
                    You'll also find the api documentation here : <a className={"text-light"} href="https://cotl-api.vercel.app/">https://cotl-api.vercel.app/</a>.
                </p>
            </div>
        </div>
    </div>)
}