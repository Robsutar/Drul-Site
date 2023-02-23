module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path',
          //destination: 'https://drul-api.vercel.app/api/:path',
          destination: 'http://localhost:3001/api/:path'
        },
      ]
    },
  }