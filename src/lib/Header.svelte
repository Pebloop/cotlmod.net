<script lang="ts">
    import {env} from "$env/dynamic/public";
</script>

<div class="w-full bg-gray-2 h-20 rounded-b-md shadow-md flex items-center justify-between">
    <a href="/" class="pl-6">
        <h1 class="text-3xl font-bold text-center text-gray-800"><img src="/cotlmod_logo.svg" alt="logo"/> </h1>
    </a>
    <div class="flex flex-row items-center ">
        <a href="/" class="text-2xl font-bold text-center m-4">Mods</a>
        <hr class="stroke-1 w-0.5 h-10 bg-white"/>
        <a href="/tutorials" class="text-2xl font-bold text-center m-4">Tutorials</a>
        <hr class="stroke-1 w-0.5 h-10 bg-white"/>
        <a href="/tools" class="text-2xl font-bold text-center m-4">Tools</a>
        <hr class="stroke-1 w-0.5 h-10 bg-white"/>
        <a href="https://discord.gg/MUjww9ndx2" target="_blank" rel="noreferrer" class="text-2xl font-bold text-center m-4">Discord</a>
    </div>
    <div class="flex flex-row items-center">
        <a href="https://discordapp.com/api/oauth2/authorize?client_id={env.PUBLIC_CLIENT_ID}&scope=identify&response_type=code" class="text-xl font-bold text-center m-4 bg-red rounded-lg p-2">Login</a>
    </div>
</div>

<style>
    a {
        font-family: "Julius Sans One";
    }
</style>