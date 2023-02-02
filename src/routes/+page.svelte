<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	onMount(() => console.log('Mounted Home Page'))
	onDestroy(() => console.log('Unmounted Home Page'))
</script>

<h1>HOME PAGE</h1>
