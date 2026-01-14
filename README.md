# Simple Blog Theme for Hexo

一个简洁、轻量的 Hexo 博客主题，支持分类、标签、归档、关于页面等常见功能。

## ✨ 特性
- 简洁清爽的界面设计
- 支持分类、标签、归档页面
- 可配置的导航菜单和侧边栏
- 响应式布局，适配移动端
- 支持自定义头像、社交链接
- （待实现）可扩展的评论系统（如 Gitalk、Valine）

## 📦 安装

在 Hexo 项目的根目录下执行：

```bash
git clone https://github.com/你的用户名/你的主题仓库.git themes/simple-blog-theme
```

然后在 Hexo 根目录的 `_config.yml` 中设置：

```yaml
theme: simple-blog-theme
```

## ⚙️ 配置

在 `themes/simple-blog-theme/_config.yml` 中可以修改以下配置：

```yaml
site:
  title: "我的 Hexo 博客"
  subtitle: "一个简洁的 Hexo 主题"
  description: "这是一个使用 Hexo 搭建的博客网站"
  author: "博主姓名"

menu:
  主页: /
  归档: /archives
  分类: /categories
  标签: /tags
  关于: /about

social:
  github: "https://github.com/你的用户名"
  twitter: "https://twitter.com/你的用户名"
```

## 🚀 使用

生成并启动本地服务器：

```bash
hexo clean
hexo generate
hexo server
```

浏览器访问：`http://localhost:4000`

## 📄 页面

确保在 `source/` 目录下有以下页面：

```bash
hexo new page about
hexo new page categories
hexo new page tags
```

并添加各自的index.md

注意：categories/下的index.md需要包含layout：
```
---
title: 分类
layout: index_category
---
```
