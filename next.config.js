const withPWA = require('next-pwa')

module.exports = withPWA({
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
  },
  pwa: {
    dest: 'public'
  },
  async redirects() {
    return [
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