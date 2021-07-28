# 代码维护指南

本页是给代码维护者的指南。

这个仓库包含了协会两个主页的前端代码，使用 [Svelte 前端框架](https://svelte.dev)编写，并使用 [SvelteKit 框架](https://kit.svelte.dev)构建。在开始维护代码前，建议先阅读这几个文档：

* [现代 JavaScript 教程](https://zh.javascript.info/)
* [Svelte Tutorial](https://svelte.dev/tutorial/basics)
* [SvelteKit Docs](https://kit.svelte.dev/docs)

这个仓库使用 [Yarn](https://classic.yarnpkg.com/lang/en/) 作为包管理器，请安装 Node.js \(12.x+\) 和 Yarn。

```shell
# Arch Linux
sudo pacman -S nodejs yarn
# Debian
sudo apt install nodejs yarnpkg
```

> 注：Debian 下的 Yarn 可执行文件名为 `yarnpkg` 而不是 `yarn`，后面的指南中请自行替换。

这个仓库是一个 _monorepo_，意思就是把多个包的代码放进一个仓库里。这里包含三个包，它们的包名和依赖关系如下：

```
.
├── linux.dgut.edu.cn: @dglinux/linux.dgut.edu.cn -> @dglinux/sites-common
├── mirrors.dgut.edu.cn: @dglinux/mirrors.dgut.edu.cn -> @dglinux/sites-common
└── common: @dglinux/sites-common
```

这里处理仓库内互相依赖关系使用的是 [Yarn 的 workspace 功能](https://classic.yarnpkg.com/en/docs/workspaces/)，所有包的依赖都可以直接在仓库根路径下一次性全部安装。

```shell
yarn
```

## 开发环境

要启动一个开发环境服务器，`cd` 进 `linux.dgut.edu.cn` 或 `mirrors.dgut.edu.cn`，然后运行

```shell
yarn dev
```

> 可使用 `--help` 参数查看帮助。

代码更改后会自动刷新页面。

要格式化代码，`cd` 进仓库的根路径，然后运行

```shell
yarn format
```

如果你用 VSCode，可以安装 Prettier 插件自动完成。

## 生产环境

要启动生产环境服务器，`cd` 进 `linux.dgut.edu.cn` 或 `mirrors.dgut.edu.cn`，然后运行

```shell
yarn build
```

会在 `build/` 路径下生成生产环境服务器的 Node.js 代码。如果只是本地预览一下生产环境，可以运行

```shell
yarn preview
```

关于部署，请见[部署指南](deplot.md)。
