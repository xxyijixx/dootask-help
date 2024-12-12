import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN', //语言
  title: "Dootask Helpers",
  description: "A VitePress Site",
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
          { text: ' &emsp;&emsp; 了解Dooask', link: '/basic/Learnabout-dootask' },
          { text: ' &emsp;&emsp; 登录和注册', link: '/basic/Login&register-dootask' },
          { text: ' &emsp;&emsp; 通知公告', link: '/basic/Notices-dootask' },
          { text: ' &emsp;&emsp; 账户设置', collapsed:true,
            items: [
              { text: ' &emsp;&emsp; 基本设置', link: '/basic/Count-dootask'  },
              { text: ' &emsp;&emsp; 个人设置', link: '/basic/Personalset-dootask' },
              { text: ' &emsp;&emsp; 系统设置', link: '/basic/Systemset-dootask' },
            ]
          },
        ],
      },

      {
        text: '🛠 &ensp; 功能',
        collapsed:true,
        items: [
          { text: ' &emsp;&emsp; 签到功能', link: '/functions/Check-in-dootask' },
          { text: ' &emsp;&emsp; 提醒功能', link: '/functions/Reminders-dootask'},
          { text: ' &emsp;&emsp; 审批中心', link: '/functions/Approval-dootask' },
          { text: ' &emsp;&emsp; 会话聊天', link: '/functions/Chat-dootask' },
        ],
      },
      {
        text: '🪜 &ensp; 部署',
        collapsed:true,
        items: [
          { text: ' &emsp;&emsp; 部署Dooask', link: '/basic/Install-dootask' },
        ],
      },

      {
        text: '📖 &ensp; 项目',
        collapsed:true,
        items: [
          { text: ' &emsp;&emsp; 了解项目', link: '/projects/Learnpro-dootask' },
          { text: ' &emsp;&emsp; 创建项目', link: '/projects/Createpro-dootask'},
          { text: ' &emsp;&emsp; 任务列表', link: '/projects/Tasklist-dootask' },
          { text: ' &emsp;&emsp; 项目进展', link: '/projects/Progress-dootask' },
        ],
      },
      {
        text: '💬 &ensp; 任务',
        collapsed:true,
        items: [
          { text: ' &emsp;&emsp; 任务的使用', link: '/task/Taskuse-dootask'},
          { text: ' &emsp;&emsp; 任务优先级', link: '/task/Taskpriority-dootask' },
          { text: ' &emsp;&emsp; 评论与新闻', link: '/task/Commentnews-dootask' },
          { text: ' &emsp;&emsp; 次要任务', link: '/task/Secondtask-dootask' },
        ],
      },
      {
        text: '📉 &ensp; Okr',
        collapsed:true,
        items: [
          { text: ' &emsp;&emsp; Okr的使用', link: '/okr/Okruse-dootask' },
          { text: ' &emsp;&emsp; Okrx', link: '/okr/Okrx-dootask' },
          { text: ' &emsp;&emsp; Okrxx', link: '/okr/Okrxx-dootask' },
          { text: ' &emsp;&emsp; Okrxxx', link: '/okr/Okrxxx-dootask' },
        ],
      },
      {
        text: '🏆 &ensp; 团队',
        collapsed:true,
        items: [
          { text: ' &emsp;&emsp; 团队和成员', link: '/team/Teammember-dootask' },
          { text: ' &emsp;&emsp; 团队管理', link: '/team/Teammanage-dootask' },
          { text: ' &emsp;&emsp; 团队设置', link: '/team/Teamset-dootask' },
          { text: ' &emsp;&emsp; 成员分组', link: '/team/Membergroup-dootask' },
        ],
      },
      {
        text: '📄 &ensp; 文件',
        collapsed:true,
        items: [
          { text: ' &emsp;&emsp; 文件类型', link: '/file/Filetype-dootask' },
          { text: ' &emsp;&emsp; 文件共享', link: '/file/Fileshare-dootask' },
          { text: ' &emsp;&emsp; 访问权限', link: '/file/Access-dootask' },
          { text: ' &emsp;&emsp; 文件显示', link: '/file/Fileshow-dootask' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
