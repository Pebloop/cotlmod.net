<script lang="ts">
    import { onMount } from 'svelte';

    export let data;

    console.log(data);
    const { mods } = data;



</script>

<div>
    {#each mods as mod}
        <div class="flex flex-col items-center justify-center">
            <a href={mod.link} class="text-2xl font-bold text-center m-4">{mod.name}</a>
            <img src={mod.image} alt={mod.name} class="w-1/2 h-auto rounded-lg shadow-lg" />
            <p class="text-lg text-center m-4">{mod.description}</p>
        </div>
    {/each}
</div>

<a class="absolute right-4 bottom-4 bg-red text-white rounded-4xl w-10 h-10 p-2 shadow-lg flex justify-center items-center transition duration-300 ease-in-out"
        href="/mod/new" aria-label="Create New Mod">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
    </svg>
</a>