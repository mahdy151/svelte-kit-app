<script lang="ts">
	import type { PageData } from "./$types"


	// import { onMount, onDestroy } from 'svelte'
	// onMount(() => console.log('Mounted Posts Page'))
	// onDestroy(() => console.log('Unmounted Posts Page'))
	// async function getPosts() {
	// 	const response = await fetch('/api/v1/posts')
	// 	const posts = await response.json()
	// 	return posts.data
	// }
	export let data: PageData
</script>

<h1>POSTS PAGE</h1>
<p>you can <a href="/posts/create">+create</a> post here</p>


<p>Showing {data.posts.data.length} posts.</p>
{#each data.posts.data as post }
	<ul>
		<li>
			<h4>{post.title}</h4>
			<span>{post.content}</span>
			<p>
				author:{post.author}<br>
				comments:{post.comment_nu}
			</p>			
		</li>
	</ul>
	
{/each}
<!-- {#await getPosts()}
	<p>loading...</p>
{:then posts} 
	<p>Showing {posts.length} posts.</p>

	{#each posts as post}
		<ul>
			<li>
				<h4>
					{post.title}
				</h4>
				<span>
					{post.content}
				</span>
				<p>
					author:{post.author}<br>
					comments:{post.comment_nu}
				</p>
			</li>
		</ul>		
	{/each}
{:catch error}
	<p>{error.message}</p>
{/await} -->

<style>
	h1 {
		color: aqua;
	}
</style>
