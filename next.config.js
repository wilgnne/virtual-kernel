module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/scheduler',
        permanent: true,
      },
    ]
  },
}
