const isProd = process.env.NODE_ENV === 'production'

const BACKEND_URL = isProd ? process.env.BACKEND_URL : ''

module.exports = {
  assetPrefix: BACKEND_URL,
  basePath: BACKEND_URL,
}
