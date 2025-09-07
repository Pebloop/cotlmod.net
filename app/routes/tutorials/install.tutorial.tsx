export function TutorialInstall() {
    return <Component />
}

function Component() {
    return (<div className={"markdown"}>
        <h1> How to install a mod</h1>
        <p>
            You can install a mod either with a modloader or manually. Using a modloader is easier but you'll only be
            able to download mod that come from Thunderstore.
        </p>
        <h2>Install with a modloader</h2>
        <ul>
            <li>
                Download and install r2modman: <a href="https://cult-of-the-lamb.thunderstore.io/package/ebkr/r2modman">https://cult-of-the-lamb.thunderstore.io/package/ebkr/r2modman</a>
            </li>
            <li>
                Launch r2modman and select Cult of the Lamb
            </li>
            <li>
                Select your profile and in the online section choose the mods you want to install
            </li>
            <li>
                Click on "Start modded" and enjoy !
            </li>
        </ul>
        <h2>Install manually</h2>
        <p>Video tutorials by hayper are available here : </p>
        <ul>
            <li>
                <a href="https://youtu.be/d93RhVxg-Xo">https://youtu.be/d93RhVxg-Xo (Windows)</a>
            </li>
            <li>
                <a href="https://youtu.be/yRtDe9ZuzlE">https://youtu.be/yRtDe9ZuzlE (macOS/Linux)</a>
            </li>
        </ul>
        <h3>Download and install bepindex</h3>
        <ul>
            <li>
                Download BepIndEx: <a href="https://thunderstore.io/c/cult-of-the-lamb/p/BepInEx/BepInExPack_CultOfTheLamb/">https://thunderstore.io/c/cult-of-the-lamb/p/BepInEx/BepInExPack_CultOfTheLamb/</a>
            </li>
            <li>
                Go to your game folder (on steam: right click on your game &gt; Manage &gt; Browse local files
            </li>
            <li>
                Copy the zip content of BepInEx into your game folder
            </li>
            <li>
                Launch the game to load BepInEx
            </li>
            <li>
                Quit the game
            </li>
            <li>
                Copy paste the desired mod zip into BepInEx &gt; plugins
            </li>
            <li>
                Launch the game and enjoy
            </li>
        </ul>
    </div>)
}