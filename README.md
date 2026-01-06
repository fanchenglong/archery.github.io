# 射箭吧网站

一个专业的射箭社区网站，提供课程、装备介绍和社区交流功能。

## 项目结构

```
archery-website/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── script.js       # JavaScript交互
└── README.md           # 项目说明
```

## 功能特点

### 🎯 主要功能

- **首页轮播**: 吸引人的渐变背景和欢迎信息
- **关于射箭**: 介绍射箭的历史、现代竞技和身心锻炼价值
- **课程设置**: 提供初级、中级、高级三个等级的课程
- **装备展示**: 展示各种射箭装备（反曲弓、复合弓、传统弓等）
- **社区动态**: 展示最新活动、技术分享和装备推荐
- **联系我们**: 提供联系方式和在线咨询表单

### 🎨 设计特点

- 现代化响应式设计
- 紫色渐变主题色彩
- 流畅的动画效果
- 移动端友好

### ⚡ 交互功能

- 平滑滚动导航
- 表单提交处理
- 课程报名功能
- 页面加载动画
- 卡片悬停效果

## 使用方法

### 直接打开

1. 双击 `index.html` 文件
2. 或在浏览器中打开该文件

### 使用本地服务器（推荐）

```bash
# 使用Python启动简单服务器
cd archery-website
python3 -m http.server 8000

# 然后在浏览器访问
http://localhost:8000
```

### 使用VS Code Live Server

1. 安装 Live Server 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

## 技术栈

- **HTML5**: 语义化标签
- **CSS3**: Flexbox、Grid布局、渐变、动画
- **JavaScript**: 原生JS，DOM操作

## 自定义修改

### 修改颜色主题

在 `css/style.css` 中修改以下变量：

```css
/* 主色调 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### 添加新内容

1. 在 `index.html` 中添加新的section
2. 在 `css/style.css` 中添加对应样式
3. 在 `js/script.js` 中添加交互逻辑（如需要）

### 添加图片

1. 创建 `images/` 目录
2. 将图片放入该目录
3. 在HTML中引用：`<img src="images/your-image.jpg">`

## 未来改进

- [ ] 添加用户注册/登录功能
- [ ] 集成在线预约系统
- [ ] 添加会员中心
- [ ] 集成支付功能
- [ ] 添加视频教学板块
- [ ] 开发后台管理系统
- [ ] 集成社交媒体分享
- [ ] 添加多语言支持

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge
- Opera

## 许可证

MIT License

## 联系方式

如有问题或建议，请联系：info@archery-club.com

---

© 2026 射箭吧. 保留所有权利.
