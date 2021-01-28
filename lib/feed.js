import markdownToHtml from '../lib/markdownToHtml'
const SITE_URL = 'https://novasdecadamanha.com.br'

export async function generateRssItem(post) {
    const content = await markdownToHtml(post.content || '')
    
    return `
        <item>
            <guid>${SITE_URL}/${post.slug}</guid>
            <title>${post.title}</title>
            <description>${post.excerpt}</description>
            <image>
                <url>${post.ogImage.url}</url>
                <title>${post.title}</title>
                <link>${SITE_URL}/${post.slug}</link>
            </image>
            <link>${SITE_URL}/${post.slug}</link>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <content:encoded><![CDATA[${content}]]></content:encoded>
        </item>
    `
}

export async function generateRss(posts) {
    const itemsList = await Promise.all(posts.map(generateRssItem))

    return `
        <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
        <channel>
            <title>Novas de Cada Manhã</title>
            <link>${SITE_URL}</link>
            <description>Devocionais diários para iniciar sua manhã.</description>
            <language>pt</language>
            <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
            <atom:link href="${SITE_URL}" rel="self" type="application/rss+xml"/>
            ${itemsList.join('')}
        </channel>
        </rss>
  `
}