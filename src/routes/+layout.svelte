<script lang="ts">
	import '../app.css';
	import Header from "$lib/Header.svelte";
	import { onMount } from 'svelte';

	export let data;
	const { user, token } = data;

	onMount(() => {
		if (token) {
			document.cookie = `token=${token}; path=/; max-age=3600;`;
		}
	});

	let { children } = $props();
</script>

<Header user="user" />

{@render children()}
