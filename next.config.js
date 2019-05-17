const withOffline = require('next-offline')

module.exports = withOffline({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }
  },
})
