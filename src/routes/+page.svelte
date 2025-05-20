<script lang="ts">
    import { onMount } from 'svelte';

    export let data;

    console.log(data);
    const { mods, user, token } = data;

    onMount(() => {
        if (token) {
            document.cookie = `token=${token}; path=/; max-age=3600;`;
        }
    });
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