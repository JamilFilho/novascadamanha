module.exports = {
    async redirects() {
      return [
        {
          source: '/devocional-whatsapp',
          destination: '/newsletter/devocional-whatsapp',
          permanent: true,
        },
        {
          source: '/sobre',
          destination: '/editorial/sobre',
          permanent: true,
        },
        {
          source: '/confissao-de-fe',
          destination: '/editorial/confissao-de-fe',
          permanent: true,
        },
      ]
    },
  }