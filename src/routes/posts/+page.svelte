<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	onMount(() => console.log('Mounted Posts Page'))
	onDestroy(() => console.log('Unmounted Posts Page'))
</script>

<h1>POSTS PAGE</h1>
<p>you can <a href="/posts/create">+create</a> post here</p>

<style>
	h1 {
		color: aqua;
	}
</style>
