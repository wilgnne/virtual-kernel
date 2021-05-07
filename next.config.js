const isProd = process.env.NODE_ENV === 'production'

const BACKEND_URL = isProd ? 'virtual-kernel/' : ''

module.exports = {
  assetPrefix: BACKEND_URL,
  env: {
    BACKEND_URL: BACKEND_URL,
  },
}
