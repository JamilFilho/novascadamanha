export default function Meta({post}) {
    return(
        <>
        <meta name='application-name' content='Novas de Cada Manhã' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Novas de Cada Manhã' />
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

        <meta property="og:type" content="article" />
        <meta property="article:author" content={`${post.author.name}`} />
        <meta property="article:published_time" content={post.date}></meta>

        <meta property="og:url" content={`https://novasdecadamanha.com.br/${post.slug}`} />
        <meta property="og:title" content={`${post.title} | Novas de Cada Manhã `} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.ogImage.url} />
        <meta name='twitter:creator' content='@CadaManha' />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://novasdecadamanha.com.br/${post.slug}`} />
        <meta property="twitter:title" content={`${post.title} | Novas de Cada Manhã `} />
        <meta property="twitter:description" content={post.excerpt} />
        <meta property="twitter:image" content={post.ogImage.url} />
        <script src="/assets/scripts/clarity.js" />
        <script src="/assets/scripts/sharer.min.js" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-181514130-1"></script>
        <script async src="/assets/scripts/analytics.js"></script>
        </>
    )
}