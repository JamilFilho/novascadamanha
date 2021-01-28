module.exports = {
    async redirects() {
      return [
        {
          source: '/devocional-whatsapp',
          destination: '/newsletter/devocional-whatsapp',
          permanent: true,
        },
      ]
    },
  }