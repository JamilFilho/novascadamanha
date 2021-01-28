import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../components/post-body'
import Layout from '../components/layout'
import Header from '../components/header'
import PostHeader from '../components/post-header'
import PostShare from '../components/sharer'
import PostComments from '../components/comments'
import { getPostBySlug, getAllPosts } from '../lib/api'
import Head from 'next/head'
import markdownToHtml from '../lib/markdownToHtml'
import Meta from '../components/meta'
import Ads from '../components/adsense'

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
    <Head>
      <title>{post.title} | Novas de Cada Manhã </title>

      <meta name="title" content={`${post.title} | Novas de Cada Manhã `} />
      <meta name="description" content={post.excerpt} />

      {/* <meta property="og:type" content="article" />
      <meta property="article:author" content={`${post.author.name}`} />
      <meta property="article:published_time" content={post.date}></meta>

      <meta property="og:url" content={`https://novasdecadamanha.com.br/${post.slug}`} />
      <meta property="og:title" content={`${post.title} | Novas de Cada Manhã `} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={post.ogImage.url} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://novasdecadamanha.com.br/${post.slug}`} />
      <meta property="twitter:title" content={`${post.title} | Novas de Cada Manhã `} />
      <meta property="twitter:description" content={post.excerpt} />
      <meta property="twitter:image" content={post.ogImage.url} /> */}
      <Meta post={post}/>
      <Ads />
    </Head>
    <Header />
    {router.isFallback ? (
        <h1>Carregando...</h1>
      ) : (
    <>
      <article>
        <PostHeader title={post.title} excerpt={post.excerpt}/>

        <Layout>
          <PostBody content={post.content} author={post.author} />
          <PostShare title={post.title} url={post.slug}></PostShare>
          <PostComments slug={post.slug} />
        </Layout>

      </article>
    </>
    )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'date',
    'excerpt',
    'author',
    'ogImage',
    'content'
  ])
  const content = await markdownToHtml(post.content || '')
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
