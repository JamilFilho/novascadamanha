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
import AmazonBanner from '../components/amazon'

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
      
      <Meta post={post}/>
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
          
          <div className="w-11/12 lg:hidden mx-auto flex flex-row flex-wrap justify-around">
            <iframe style={{width:'120px', height:'240px' }} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=novascadamanha-20&language=pt_BR&marketplace=amazon&region=BR&placement=6586027403&asins=6586027403&linkId=c8d2b019a43ee11c630c5872462710d9&show_border=true&link_opens_in_new_window=true"></iframe>

            <iframe style={{width:'120px', height:'240px' }}  marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=novascadamanha-20&language=pt_BR&marketplace=amazon&region=BR&placement=8543304652&asins=8543304652&linkId=71619acd0401f5d512b636901373fa16&show_border=true&link_opens_in_new_window=true"></iframe>

            <iframe style={{width:'120px', height:'240px' }}  marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=novascadamanha-20&language=pt_BR&marketplace=amazon&region=BR&placement=8543302358&asins=8543302358&linkId=722c439ec18f4433279704c4b620550e&show_border=true&link_opens_in_new_window=true"></iframe>
          </div>

          <div className="w-10/12 lg:max-w-3xl mx-auto mt-12">
            <PostShare title={post.title} url={post.slug}></PostShare>
          </div>
          <PostComments slug={post.slug} />
          <AmazonBanner />
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
