# 中文部署教程

本文档说明如何在本地运行本项目，并部署到 GitHub Pages。

## 1. 本地准备

需要安装：

- Node.js 20 或更高版本
- npm
- Git

第一次使用时，在项目根目录运行：

```bash
npm install
```

启动本地预览：

```bash
npm run dev
```

浏览器打开：

```text
http://localhost:3000
```

## 2. 本地构建检查

部署前建议运行：

```bash
npm run lint
npm run build
```

如果两个命令都通过，说明代码检查和静态导出正常。

构建完成后会生成：

```text
out/
```

GitHub Pages 最终托管的就是这个静态目录里的 HTML、CSS 和 JS 文件。

## 3. 上传到 GitHub

如果这是一个新仓库，可以在 GitHub 创建空仓库，然后在本地执行：

```bash
git init
git add .
git commit -m "Initial TCP Lab website"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

请把 `你的用户名` 和 `你的仓库名` 替换成真实信息。

## 4. 开启 GitHub Pages

进入 GitHub 仓库页面：

1. 打开 **Settings**
2. 左侧选择 **Pages**
3. 在 **Build and deployment** 中找到 **Source**
4. 选择 **GitHub Actions**
5. 回到仓库的 **Actions** 页面，等待部署工作流完成

项目已经包含部署配置：

```text
.github/workflows/deploy.yml
```

每次推送到 `main` 分支后，GitHub Actions 会自动：

1. 安装依赖
2. 执行 `npm run build`
3. 上传 `out/`
4. 发布到 GitHub Pages

## 5. 访问网站

部署成功后，GitHub Pages 通常会给出类似地址：

```text
https://你的用户名.github.io/你的仓库名/
```

具体地址可以在：

```text
Settings -> Pages
```

中查看。

## 6. 更新网站内容

大部分内容在 `src/data` 目录中维护：

```text
src/data/research-areas.json
src/data/news.json
src/data/team.json
src/data/publications.json
src/data/outreach.json
src/data/positions.json
```

例如，新增论文时编辑：

```text
src/data/publications.json
```

新增类似结构：

```json
{
  "year": 2026,
  "authors": "Author, A., Author, B.",
  "title": "Title of the paper",
  "journal": "Journal Name"
}
```

修改后运行：

```bash
npm run build
```

确认没问题后提交并推送：

```bash
git add .
git commit -m "Update website content"
git push
```

GitHub Actions 会自动重新部署。

## 7. 替换占位图片

当前网站使用了明确标注的占位图片，包括：

- PI photo
- Graduate student photos
- Alumni photos
- WeChat QR code
- Outreach article covers
- Lab or campus image

后续可以把真实图片放入：

```text
public/
```

然后在对应页面或组件中替换 `PlaceholderImage`。

## 8. 常见问题

### GitHub Pages 可以运行 Next.js 吗？

可以，但只能运行静态导出后的结果。本项目使用：

```ts
output: "export"
```

所以部署到 GitHub Pages 后不需要 Node.js 服务器。

### GitHub Pages 能运行后端接口吗？

不能。GitHub Pages 只能托管静态文件，不能运行数据库、API Routes、Express 服务或 SSR 服务。

### 为什么本地需要 npm install？

因为源码使用 Next.js、React、TypeScript 和 Tailwind CSS。它们只在开发和构建阶段使用。部署后的 GitHub Pages 只托管静态文件。

### Actions 部署失败怎么办？

先在本地运行：

```bash
npm install
npm run lint
npm run build
```

如果本地构建失败，先修本地错误。如果本地通过但 GitHub Actions 失败，查看 Actions 页面里的错误日志。
