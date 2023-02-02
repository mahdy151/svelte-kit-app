import type { PageLoad } from './$types';
import faunadb from 'faunadb';

export const load: PageLoad = (async ({ fetch }) => {
    const response = await fetch('/api/v1/posts')
    const posts = await response.json()
    return {posts}
}) satisfies PageLoad;