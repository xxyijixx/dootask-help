import { DefaultTheme } from "vitepress";

export const enSidebar: DefaultTheme.Sidebar = {
  "/en/": [
    {
      text: "🗝️ &ensp; 快速开始",
      collapsed: false,
      items: [
        { text: "快速了解 Dooask", link: "/en/basic/quick-start" },
        { text: "AI助手", link: "/en/basic/Aiass-dootask" },
        { text: "仪表盘", link: "/en/basic/dashboard" },
        { text: "任务日历", link: "/en/basic/clander" },
      ],
    },
    {
      text: "🛠️ &ensp; 账号与设置",
      collapsed: false,
      items: [
        { text: "账号注册", link: "/en/functions/account/account-register" },
        { text: "账号登录", link: "/en/functions/account/account-login" },
        { text: "个人设置", link: "/en/functions/account/personal-setting" },
        {
          text: "系统设置（管理员）",
          link: "/en/functions/account/system-setting",
        },
      ],
    },
    {
      text: "💬 &ensp; 即时沟通",
      collapsed: false,
      items: [
        { text: "消息状态", link: "/en/functions/im/sf" },
        { text: "会话标记", link: "/en/functions/im/sign" },
        { text: "消息编辑", link: "/en/functions/im/edit" },
        { text: "创建群组", link: "/en/functions/im/create-group" },
        { text: "匿名消息", link: "/en/functions/im/anonymous" },
        { text: "表情回复消息", link: "/en/functions/im/emoji-reply" },
        { text: "群接龙", link: "/en/functions/im/group-riddle" },
        { text: "群投票", link: "/en/functions/im/grooup-vote" },
      ],
    },
    {
      text: "✅ &ensp; 项目与任务管理",
      collapsed: false,
      items: [
        { text: "项目成员管理", link: "/en/functions/projects/team-management" },
        { text: "项目权限管理", link: "/en/functions/projects/access-control" },
        { text: "项目归档", link: "/en/functions/projects/project-archiving" },
        { text: "任务管理", link: "/en/functions/projects/task" },
        { text: "任务模板", link: "/en/functions/projects/task-templates" },
        { text: "任务标签", link: "/en/functions/projects/task-tags" },
        { text: "工作流设置", link: "/en/functions/projects/workflow" },
        { text: "多种任务展示模式", link: "/en/functions/projects/view-modes" },
      ],
    },
    {
      text: "📦 &ensp; 工具与功能模块",
      collapsed: false,
      items: [
        {
          text: "签到打卡",
          collapsed: true,
          items: [
            { text: "多种打卡方式", link: "/en/functions/checkin/many-ways" },
            { text: "签到设置(管理员)", link: "/en/functions/checkin/setting" },
            { text: "数据导出(管理员)", link: "/en/functions/checkin/export" },
          ],
        },
        {
          text: "审批中心",
          collapsed: true,
          items: [
            { text: "提交审批", link: "/en/functions/approval/submit" },
            { text: "处理审批", link: "/en/functions/approval/approve" },
            { text: "数据导出(管理员)", link: "/en/functions/approval/export" },
            { text: "自定义审批流程(管理员)", link: "/en/functions/approval/process" },
          ],
        },
        {
          text: "OKR管理",
          collapsed: true,
          items: [
            { text: "OKR管理", link: "/en/functions/okr/okr-basic" },
            { text: "OKR结果分析", link: "/en/functions/okr/okr-analysis" },
          ],
        },
        {
          text: "团队管理",
          collapsed: true,
          items: [
            {
              text: "团队管理(管理员)",
              link: "/en/functions/team/member-management",
            },
            // { text: "组织架构调整", link: "/en"},
            // { text: "员工离职处理", link: "/en"},
          ],
        },
        {
          text: "文件管理",
          collapsed: true,
          items: [
            { text: "文件管理", link: "/en/functions/file/type" },
            { text: "文件共享和访问权限", link: "/en/functions/file/share" },
            { text: "文件展示方式", link: "/en/functions/file/show" },
          ],
        },
        { text: "工作报告", link: "/en/functions/report" },
        { text: "提醒功能", link: "/en/functions/reminders" },
        { text: "AI机器人", link: "/en/functions/ai/index" },
      ],
    },
    {
      text: "🚀 &ensp; 部署与集成",
      link: "/en/deploy/index",
    },
    {
      text: "🤝 &ensp; 支持与帮助",
      link: "/en/support/group",
    },
    {
      text: "📚 &ensp; 文档完善中",
      link: "/en/more",
    },
  ],
};
