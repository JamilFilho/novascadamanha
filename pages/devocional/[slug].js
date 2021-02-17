import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Header from '../../components/header'
import { getPageBySlug, getAllPages } from '../../lib/apiNewsletterPage.js'
import Head from 'next/head'
import markdownStyles from '../../components/markdown-styles.module.css'
import markdownToHtml from '../../lib/markdownToHtml'

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

      <meta property="og:type" content="article" />

      <meta property="og:url" content={`https://novasdecadamanha.com.br/${post.slug}`} />
      <meta property="og:title" content={`${post.title} | Novas de Cada Manhã `} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={post.ogImage.url} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://novasdecadamanha.com.br/${post.slug}`} />
      <meta property="twitter:title" content={`${post.title} | Novas de Cada Manhã `} />
      <meta property="twitter:description" content={post.excerpt} />
      <meta property="twitter:image" content={post.ogImage.url} />
    </Head>

    <Header />
    {router.isFallback ? (<h1>Carregando...</h1>) : (
      <>
        <article className="flex flex-col lg:flex-row">
          <div className={`h-screen lg:h-screen lg:fixed lg:left-0 lg:top-0 lg:w-1/2 pt-20 flex flex-col items-center justify-center bg-${post.headerColor}`}>
            <p className="px-4 text-xl text-center font-medium text-white mb-8">{post.excerpt}</p>
            <a className={`text-xl px-6 py-4 rounded text-${post.headerColor} bg-white`} href={post.buttonLink} target="_blanck">
              {post.buttonText}
            </a>
          </div>

          <div className="lg:absolute lg:right-0 lg:top-0 lg:mt-20 py-12 px-10 lg:w-1/2">
            <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </>
    )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPageBySlug(params.slug, [
    'title',
    'slug',
    'buttonText',
    'buttonLink',
    'headerColor',
    'excerpt',
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
  const posts = getAllPages(['slug'])

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
