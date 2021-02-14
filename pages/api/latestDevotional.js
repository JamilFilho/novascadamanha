import { getAllPosts } from '../../lib/api'

export default async function handler(req, res) {
    const postsResponse = await getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'excerpt',
        'content',
        'ogImage'
    ])
    const latestPost = postsResponse[0]
    res.json(latestPost)
}