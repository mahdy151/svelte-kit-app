import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;
import faunadb from 'faunadb';
// const client = new faunadb.Client({
// secret: "fnAE7p7E7_ACWgo8QiBmP0yXVYfMe2IluuBAKJdj"
// })
// export async function getAllPosts() {
// const result = await client.query(
//     faunadb.query.Map(
//     faunadb.query.Paginate(faunadb.query.Match(faunadb.query.Index("all_post"))),
//     faunadb.query.Lambda("X", faunadb.query.Get(faunadb.query.Var("X")))
//     )
// );
// return result;
// }