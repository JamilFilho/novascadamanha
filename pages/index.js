import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import BannerAd from '../components/banner-ad'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import fs from 'fs'
import {generateRss} from '../lib/feed.js'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1, 10)
  return (
    <>
      <Head>
        <title>Novas de Cada Manhã | Devocionais diários para iniciar sua manhã.</title>
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      </Head>

      <Intro />
        {heroPost && (
          <HeroPost title={heroPost.title} author={heroPost.author} slug={heroPost.slug} excerpt={heroPost.excerpt} />
        )}
      <Layout>          
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'excerpt',
    'content'
  ])
  
  const rss = await generateRss(allPosts)
  fs.writeFileSync('./public/feed.xml', rss)

  return {
    props: { allPosts },
  }
}
