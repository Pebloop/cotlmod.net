<script lang="ts">
	import '../app.css';
	import Header from "$lib/Header.svelte";
	import { onMount } from 'svelte';


	export let data;
	const props = data;
	console.log(props);

	onMount(() => {
		if (props.token) {
			document.cookie = `token=${props.token}; path=/; max-age=3600;`;
		}
	});

</script>

<Header user={props.user} />

<slot />
