import MoreStories from '../components/more-stories'
import Header from '../components/header'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Analytics from '../components/analytics'
import AmazonBanner from '../components/amazon'

export default function Index({ allPosts }) {
  const morePosts = allPosts
  return (
    <>
      <Head>
        <title>Devocionais | Novas de Cada Manhã</title>

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
        <Analytics />
      </Head>
      <Header />
      <Intro form="false"/>
      <Layout>          
        {morePosts.length > 0 && <MoreStories posts={morePosts} feed="true" />}
      </Layout>
      <AmazonBanner />
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

  return {
    props: { allPosts },
  }
}