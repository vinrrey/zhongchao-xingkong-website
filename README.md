# 湖南中超星空科技有限公司 企业官网

基于 Next.js 14 + TypeScript + Tailwind CSS 构建的现代化企业官网。

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本
```bash
npm run build
npm start
```

## 🔐 后台管理系统

### 默认登录账号
```
用户名: admin
密码: admin123
```

### 修改账号密码
编辑文件 `src/lib/auth.config.ts`：
```typescript
export const ADMIN_CREDENTIALS = {
  username: '你的用户名',
  password: '你的密码',
}
```

⚠️ **生产环境建议**：使用环境变量存储密码，不要直接写在代码中。

### 后台功能
- 📊 数据概览
- 🏢 公司信息管理
- 💼 业务管理
- 📰 新闻动态
- 📨 留言管理
- ⚙️ 系统设置

## 📁 项目结构

```
zhongchao-xingkong-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # 首页
│   │   ├── layout.tsx         # 根布局
│   │   ├── globals.css        # 全局样式
│   │   ├── admin/             # 管理后台
│   │   │   ├── page.tsx       # 后台首页
│   │   │   └── login/         # 登录页
│   │   └── api/               # API 接口
│   │       └── auth/          # 认证接口
│   ├── components/            # React 组件
│   │   ├── Header.tsx         # 头部导航
│   │   ├── Hero.tsx           # 首屏横幅
│   │   ├── Services.tsx       # 业务领域
│   │   ├── About.tsx          # 关于我们
│   │   ├── Advantages.tsx     # 企业优势
│   │   ├── Contact.tsx        # 联系我们
│   │   └── Footer.tsx         # 页脚
│   └── lib/                   # 工具库
│       └── auth.config.ts     # 认证配置
├── public/                    # 静态资源
│   └── logo.png              # 公司 Logo (请放置您的 logo)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 自定义 Logo

将您的 logo 文件放置到 `public/logo.png`，网站会自动加载。

建议 Logo 尺寸：正方形，建议 512x512 像素或更大。

## 📦 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **认证**: JWT + Cookies

## 🔧 环境要求

- Node.js 18.17 或更高版本
- npm 或 yarn

## 📝 公司信息

- **公司全称**: 湖南中超星空科技有限公司
- **注册资本**: 200万元
- **成立时间**: 2025年10月
- **地址**: 长沙市雨花区同升街道环保中路188号14、15栋1004

## 📄 许可证

本项目仅供湖南中超星空科技有限公司内部使用。
