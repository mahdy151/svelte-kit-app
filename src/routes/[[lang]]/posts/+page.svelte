<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	onMount(() => console.log('Mounted Posts Page'))
	onDestroy(() => console.log('Unmounted Posts Page'))
	async function getPosts() {
		const response = await fetch('/api/v1/posts')
		const posts = await response.json()
		return posts.data
	}
</script>

<h1>POSTS PAGE</h1>
<p>you can <a href="/posts/create">+create</a> post here</p>

{#await getPosts()}
	<p>loading...</p>
{:then posts} 
	<pre>
		{JSON.stringify(posts, null,2)}
	</pre>
{:catch error}
	<p>{error.message}</p>
{/await}

<style>
	h1 {
		color: aqua;
	}
</style>
