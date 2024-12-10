import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN', //语言
  title: "Dootask Helpers",
  description: "A VitePress Site",
  titleTemplate: '另起标题会覆盖title',
  cleanUrls: true,
  appearance:'dark', //默认主题
  ignoreDeadLinks: false, //关闭忽略死链，不配置即可，非常不建议设置为true
  //多语言
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    },
    fr: {
      label: 'French',
      lang: 'fr',
      link: '/fr/',
    }
  },
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '🗝️ &ensp; 基本',
        collapsed:true,
        items: [
          { text: '了解Dooask', link: '/Learnabout-dootask' },
          { text: '安装Dooask', link: '/Install-dootask' },
          { text: '登录和注册', link: '/Login&register-dootask' },
          { text: '通知公告', link: '/Notices-dootask' },
          { text: '账户设置', link: '/Count-dootask' },
        ],
      },
      {
        text: '📖 &ensp; 项目',
        collapsed:true,
        items: [
          { text: '了解项目', link: '/Learnpro-dootask' },
          { text: '创建项目', link: '/Createpro-dootask' },
          { text: '任务列表', link: '/Tasklist-dootask' },
          { text: '项目进展', link: '/Progress-dootask' },
        ],
      },
      {
        text: '🗞️ &ensp; 任务',
        collapsed:true,
        items: [
          { text: '任务的使用', link: '/Taskuse-dootask' },
          { text: '任务优先级', link: '/Taskpriority-dootask' },
          { text: '评论与新闻', link: '/Commentnews-dootask' },
          { text: '次要任务', link: '/Secondtask-dootask' },
        ],
      },
      {
        text: '📉 &ensp; Okr',
        collapsed:true,
        items: [
          { text: 'Okr的使用', link: '/Taskuse-dootask' },
          { text: 'Okrxxx', link: '/Taskpriority-dootask' },
          { text: 'Okrxxx', link: '/Commentnews-dootask' },
          { text: 'Okrxxx', link: '/Secondtask-dootask' },
        ],
      },
      {
        text: '🏆 &ensp; 团队',
        collapsed:true,
        items: [
          { text: '团队和成员', link: '/Teammember-dootask' },
          { text: '团队管理', link: '/Teammanage-dootask' },
          { text: '团队设置', link: '/Teamset-dootask' },
          { text: '成员分组', link: '/Membergroup-dootask' },
        ],
      },
      {
        text: '📄 &ensp; 文件',
        collapsed:true,
        items: [
          { text: '文件类型', link: '/Filetype-dootask' },
          { text: '文件共享', link: '/Fileshare-dootask' },
          { text: '访问权限', link: '/Access-dootask' },
          { text: '文件显示', link: '/Fileshow-dootask' },
        ],
      },
     

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
