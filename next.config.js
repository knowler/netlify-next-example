const withOffline = require('next-offline')
const withTypeScript = require('@zeit/next-typescript')

module.exports = withOffline(withTypeScript({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
    }
  },
}))
