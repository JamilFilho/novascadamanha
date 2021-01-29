import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import fs from 'fs'
import {generateRss} from '../lib/feed.js'
import Header from '../components/header'
import Ads from '../components/adsense'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1, 10)
  return (
    <>
      <Head>
        <title>Novas de Cada Manhã | Devocionais diários para iniciar sua manhã.</title>

        <meta name='application-name' content='Novas de Cada Manhã' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Novas de Cada Manhã' />
        <meta name='description' content='Devocionais diários para iniciar sua manhã.' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#282c35' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#282c35' />

        <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#282c35' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />

        <script src="/assets/scripts/sharer.min.js"></script>
        <script src="https://static.mailerlite.com/js/w/webforms.min.js?v28bf44f740701752bfc6767bc7e171d4" type="text/javascript" />
        <Ads/>
      </Head>

      <Header />

      <Intro form="true"/>
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
    'content',
    'ogImage'
  ])
  
  const rss = await generateRss(allPosts)
  fs.writeFileSync('./public/feed.xml', rss)

  return {
    props: { allPosts },
  }
}
