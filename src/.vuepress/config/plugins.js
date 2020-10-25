const moment = require('moment')
const Secret = require('./secret')

module.exports = {
  '@vuepress/last-updated': {
    transformer: (timestamp, lang) => {
      moment.locale(lang)
      return moment(timestamp).format('LLLL')
    }
  },
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: '发现新内容可用',
      buttontext: '刷新'
    }
  },
  '@vssue/vuepress-plugin-vssue': {
    platform: 'github-v4',
    owner: 'whl-gh',
    repo: 'docs',
    clientId: Secret.github.clientId,
    clientSecret: Secret.github.clientSecret
  }
}
