# GitHub Pages 个人简历模板

本仓库提供三套可直接预览的中文个人简历网站。当前已选用 01「经典履历」作为根目录的 `index.html`，并根据常支鑫的简历资料填写了内容；模板选择页保存在 `gallery.html`。所有页面由 HTML 和 CSS 构成，开发者模板另外使用一小段 JavaScript 显示上海时间；无需安装依赖，也无需构建。

| 编号 | 模板 | 预览文件 | 适用方向 |
| --- | --- | --- | --- |
| 01 | 经典履历 | `templates/classic.html` | 求职、咨询、强调履历与成果 |
| 02 | 创意作品集 | `templates/creative.html` | 设计、产品、内容、创意工作 |
| 03 | 开发者主页 | `templates/developer.html` | 工程师、技术项目、开源经历 |

## 本地预览

直接打开 `index.html` 可预览当前选中的经典履历，打开 `gallery.html` 可比较三套模板。也可以在仓库根目录运行 `python3 -m http.server 8000`，然后访问 `http://localhost:8000/`。模板内的“打印 / 保存 PDF”按钮会调用浏览器打印功能，适合导出一份简历。

## 选定正式首页

在仓库根目录运行 `node scripts/select-template.mjs classic`、`node scripts/select-template.mjs creative` 或 `node scripts/select-template.mjs developer`。脚本会把选中的模板设为根目录 `index.html`，并将选择页保存为 `gallery.html`。之后仍可直接编辑 `templates/` 中的原始模板，重新运行命令更新正式首页。

## 替换示例内容

经典履历的内容来自用户提供的 `SZU-CV/main.tex`，照片来自同目录外层的证件照文件；两份 PDF 仍为原始模板的占位内容，没有用作事实来源。02 和 03 模板仍使用虚构人物“林知远”的示例资料。编辑当前模板时，先修改 `templates/classic.html`，再运行 `node scripts/select-template.mjs classic` 同步到正式首页；需要换配色或排版时，修改 `assets/classic.css`，其中颜色变量在文件开头。

## 发布到 GitHub Pages

目标仓库是公开的 `czx-beauty/czx-beauty.github.io`。GitHub Pages 已设置为从 `main` 分支的 `/(root)` 目录发布，网站地址为 `https://czx-beauty.github.io/`。根目录的 `index.html` 是经典履历，`gallery.html` 仍可查看其他模板。

正式主页展示姓名、学校、照片、学校邮箱、个人邮箱和 GitHub 账号，不展示简历中的手机号。仓库内的页面源码、照片和其他两套示例模板也公开可见。

GitHub 官方文档：[GitHub Pages 概览](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)、[配置发布源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)、[快速入门](https://docs.github.com/en/pages/quickstart)。
