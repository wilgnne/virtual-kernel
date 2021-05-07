const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://wilgnne.github.io/virtual-kernel/' : '',
}
