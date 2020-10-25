const plugins = require('./config/plugins')
const nav = require('./config/nav')

module.exports = {
  // 一旦开启评论，这个就不要在改动了
  title: 'WHL Blog',
  description: '👩‍💻Personal Blog',
  themeConfig: {
    logo: '/images/logo.svg',
    navbar: true,
    sidebar: 'auto',
    nav: nav
  },
  plugins
}
