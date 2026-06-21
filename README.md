# YUNJI 集市 (Yunji Marketplace)

> ⚠️ **本项目为纯前端项目（Frontend Only），不包含任何后端服务、数据库或 API 接口。**
>
> 所有数据（商品、用户、购物车、消息等）均为前端模拟数据，仅用于前端展示与交互演示。Auth / Cart / Toast 等均使用 React Context 在本地维护，未对接真实后端。

一个基于 React + Vite + TailwindCSS 构建的移动端电商集市应用，提供商品浏览、分类、购物车、消息中心、个人中心等完整的电商前端功能。

## 技术栈

- **框架**: React 18
- **构建工具**: Vite 5
- **路由**: React Router DOM 6
- **样式**: TailwindCSS 3
- **状态管理**: React Context（Auth / Cart / Toast）

## 功能特性

- 首页：商品推荐、分类入口、轮播
- 分类页：商品分类浏览与筛选
- 搜索页：商品搜索
- 商品详情：商品信息展示
- 购物车：商品加入、删除、数量调整
- 结算页：订单提交
- 消息中心：系统通知与消息列表
- 个人中心：用户信息与设置
- 登录 / 注册：用户认证

## 目录结构

```
YUNJI/
├── REACT/                  # React 项目源码
│   ├── src/
│   │   ├── components/     # 通用组件（Header, BottomNav, Layout...）
│   │   ├── context/        # 全局状态（Auth, Cart, Toast）
│   │   ├── pages/          # 页面组件
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── design/                 # 设计稿与素材（不纳入版本控制）
└── README.md
```

## 快速开始

### 环境要求

- Node.js >= 16
- npm / pnpm / yarn

### 安装依赖

```bash
cd REACT
npm install
```

### 启动开发服务器

```bash
npm run dev
```

默认运行在 `http://localhost:5173`。

### 构建生产包

```bash
npm run build
```

构建产物输出到 `REACT/dist/`。

### 本地预览生产包

```bash
npm run preview
```

## 路由说明

| 路径 | 页面 |
| --- | --- |
| `/` | 首页 |
| `/category` | 分类页 |
| `/search` | 搜索页 |
| `/product/:id` | 商品详情 |
| `/cart` | 购物车 |
| `/checkout` | 结算 |
| `/messages` | 消息中心 |
| `/profile` | 个人中心 |
| `/login` | 登录 |
| `/register` | 注册 |

## License

MIT
