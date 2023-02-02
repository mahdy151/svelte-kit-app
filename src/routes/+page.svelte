<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	onMount(() => console.log('Mounted Home Page'))
	onDestroy(() => console.log('Unmounted Home Page'))
	async function subscribe(event: Event) {
		const form = event.target as HTMLFormElement
		const data = new FormData(form)
		await fetch('/api/v1/posts', {
			method: 'POST',
			body: data,
		})
	}
</script>

<h1>HOME PAGE</h1>
 <form on:submit|preventDefault={subscribe}>
	<input type="email" name="email">
	<button>Subsscribe</button>
 </form>