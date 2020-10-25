// 顶部菜单栏配置
module.exports = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Self', link: '/self/' },
  { text: 'External', link: 'https://google.com' },
  {
    text: 'Languages',
    ariaLabel: 'Language Menu',
    items: [
      { text: 'Chinese', link: '/language/chinese/' },
      { text: 'Japanese', link: '/language/japanese/' }
    ]
  },
]
