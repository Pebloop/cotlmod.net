<script lang="ts">
    import {env} from "$env/dynamic/public";

    export let user;
    
    function logout() {
        document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
        window.location.href = '/';
    }
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
    {#if user && user.username}
        <div class="flex flex-row items-center">
            <p class="text-2xl font-bold text-center m-4">{user.username}</p>
            <button class="text-xl font-bold text-center m-4 bg-red rounded-lg p-2" on:click={logout}>Logout</button>
        </div>
    {:else}
        <div class="flex flex-row items-center">
            <a href="https://discordapp.com/api/oauth2/authorize?client_id={env.PUBLIC_CLIENT_ID}&scope=identify&response_type=code" class="text-xl font-bold text-center m-4 bg-red rounded-lg p-2">Login</a>
        </div>
    {/if}
</div>

<style>
    a {
        font-family: "Julius Sans One";
    }

    button {
        font-family: "Julius Sans One";
    }
</style>