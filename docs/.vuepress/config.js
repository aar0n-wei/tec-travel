import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '技术之旅',
  description: '长风破浪会有时，直挂云帆济沧海',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'Java',
        link: '/java/java体系结构.md',
      },
      {
        text: 'Linux',
        link: '/linux/linux常用命令.md',
      },
      {
        text: 'Group',
        children: [
          {
            text: 'SubGroup',
            children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          },
        ],
      },
      '/bar/README.md',
    ],
  }),
})