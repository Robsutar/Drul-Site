module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path',
          destination: 'https://drul-api.vercel.app/api/:path',
        },
      ]
    },
  }