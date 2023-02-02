import type { RequestHandler } from './$types'
import query from 'faunadb'
import db from '$lib/db/database'

const allPostsIndex = 'all_post'

export const GET: RequestHandler = async () => {
	try {
		const result = await db.query(query.Map(query.Paginate(query.Match(query.Index(allPostsIndex))), (ref) => query.Select("data", query.Get(ref))))

		const options: ResponseInit = {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=0, s-magage=60'
			}
		}

		return new Response(JSON.stringify(result), options)
	} catch (error) {
		console.error(error)
		const options: ResponseInit = {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		}
		return new Response(JSON.stringify({ error: error }), options)
	}
}
