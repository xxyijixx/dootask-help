import { defineConfig } from "vitepress";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "Zh_CN", //语言
  title: "Dootask Helpers",
  description: "A VitePress Site",
  cleanUrls: true,
  ignoreDeadLinks: false, //关闭忽略死链，不配置即可，非常不建议设置为true
  //多语言
  locales: {
    root: {
      label: "简体中文",
      lang: "Zh_CN",
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
    },
  },
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    logo: "/logo.svg",
    search:{
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "🗝️ &ensp; 开始",
        collapsed: false,
        items: [
          {
            text: "快速了解 Dooask",
            link: "/basic/quick-start",
          },
          {
            text: "AI助手",
            link: "/basic/Aiass-dootask",
          },
          {
            text: "仪表盘",
            link: "/basic/dashboard",
          },
        ],
      },

      {
        text: "🛠 &ensp; 功能",
        collapsed: false,
        items: [
          {
            text: "账号与设置",
            items: [
              { text: "账号注册", link: "/functions/account/account-register" },
              { text: "账号登录", link: "/functions/account/account-login" },
              { text: "个人设置", link: "/functions/account/personal-setting" },
              { text: "系统设置（管理员）", link: "/functions/account/system-setting" },
            ],
            collapsed: false,
          },
          {
            text: "即时沟通",
            items: [
              { text: "消息状态", link: "/functions/im/sf" },
              { text: "会话标记", link: "/functions/im/sign" },
              { text: "消息编辑", link: "/functions/im/edit" },
              { text: "创建群组", link: "/functions/im/create-group" },
              { text: "匿名消息", link: "/functions/im/anonymous" },
              { text: "表情回复消息", link: "/functions/im/emoji-reply" },
              { text: "群接龙", link: "/functions/im/group-riddle" },
              { text: "群投票", link: "/functions/im/grooup-vote" },
            ],
            collapsed: false,
          },
          {
            text: "签到功能",
            items: [
              { text: "多种打卡方式", link: "/functions/checkin/many-ways" },
              { text: "(管理员)签到设置", link: "/functions/checkin/setting" },
              { text: "(管理员)数据导出", link: "/functions/checkin/export" },
            ],
            collapsed: true,
          },
    
          {
            text: "审批中心",
            items: [
              { text: "提交审批", link: "/functions/approval/submit" },
              { text: "处理审批", link: "/functions/approval/approve" },
              { text: "(管理员)数据导出", link: "/functions/approval/export" },
              { text: "(管理员)自定义审批流程", link: "/functions/approval/process" },
            ],
            collapsed: true,
          },
          {
            text: "OKR",
            collapsed: true,
            items: [
              { text: "OKR管理", link: "/functions/okr/okr-basic" },
              { text: "OKR结果分析", link: "/functions/okr/okr-analysis" },
            ],
          },
          {
            text: "项目",
            collapsed: false,
            items: [
              {
                text: "项目成员管理",
                link: "/functions/projects/team-management",
              },
              {
                text: "项目权限管理",
                link: "/functions/projects/access-control",
              },
              {
                text: "项目归档",
                link: "/functions/projects/project-archiving",
              },
              {
                text: "任务管理",
                link: "/functions/projects/task"
              },
              {
                text: "任务模板",
                link: "/functions/projects/task-templates",
              },
              {
                text: "任务标签",
                link: "/functions/projects/task-tags",
              },
              {
                text: "工作流设置",
                link: "/functions/projects/workflow",
              },
              {
                text: "多种任务展示模式",
                link: "/functions/projects/view-modes",
              },
              {
                text: "AI辅助任务创建",
                link: "/functions/projects/ai-assistance",
              },
            ],
          },
          {
            text: "团队管理",
            collapsed: true,
            items: [
              { text: "(管理员)团队管理", link: "/functions/team/member-management" },
              { text: "工作汇报", link: "/functions/team/work-report"}
            ],
          },
          {
            text: "文件",
            collapsed: true,
            items: [
              { text: "文件类型", link: "/functions/file/type" },
              { text: "文件共享和访问权限", link: "/functions/file/share" },
              { text: "文件显示", link: "/functions/file/show" },
            ],
          },
          { text: "提醒功能", link: "/functions/reminders" },
          {
            text: "AI机器人",
            link: "/functions/ai/index",
          },
        ],
      },
      {
        text: "部署",
        link: "/deploy/index"
      },
      {
        text: "支持",
        link: "/support/group" 
      },
      {
        text: "文档完善中",
        link: "/more",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/kuaifan/dootask" },
    ],
  },
});
