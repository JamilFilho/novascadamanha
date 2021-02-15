const withPWA = require('next-pwa')

module.exports = withPWA({
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    BASE_URL: process.env.BASE_URL
  },
  pwa: {
    dest: 'public'
  },
  async redirects() {
    return [
      {
        source: '/amazon',
        destination: 'https://amzn.to/3tU4Q50',
        permanent: true,
      },
      {
        source: '/devocional-whatsapp',
        destination: '/devocional/whatsapp',
        permanent: true,
      },
      {
        source: '/newsletter/devocional-whatsapp',
        destination: '/devocional/whatsapp',
        permanent: true,
      },
      {
        source: '/sobre',
        destination: '/editorial/sobre',
        permanent: true,
      },
      {
        source: '/confissao-de-fe',
        destination: '/editorial/sobre',
        permanent: true,
      },
    ]
  },
})