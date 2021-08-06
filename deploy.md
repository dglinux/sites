# 部署指南

TL; DR

```shell
docker build -f Dockerfile.home -t linux.dgut.edu.cn .
docker build -f Dockerfile.mirrors -t mirrors.dgut.edu.cn .

docker run --restart unless-stopped -p 3001:3000 -d linux.dgut.edu.cn
docker run --restart unless-stopped -p 3002:3000 -d mirrors.dgut.edu.cn
```

------

这个仓库使用 [SvelteKit](https://kit.svelte.dev/docs#adapters) 和 [`@sveltejs/adapter-node`](https://github.com/sveltejs/kit/tree/b18a45c1a71f019e3ace43035fcc3d8561cd7ac9/packages/adapter-node) 编译并打包服务器端代码，而 `@sveltejs/adapter-node` 基于 [esbuild](https://esbuild.github.io/api/#transform-api)。这带来一件非常酷的事情：服务端的*所有代码*都可以打包进单个 Node.js 可执行文件里。这意味着我们可以直接拿着这个文件，放到任何 Node.js 12.x+ 环境下都能运行。不用关心烦人的依赖，也不用在生产环境中安装 Yarn、npm 这样的开发环境工具。

当然，这里打包的只是程序，博客文章或帮助页面是没有打包的。因此在 Dockerfile 中将它们复制到了 `build/` 下，一并带走。

经过配置，网站的所有静态文件都在 `/assets/` 下（除 `/favicon.ico`）。包括编译后的 CSS 和 JS 等，这些在 `/assets/app/` 下。`linux.dgut.edu.cn` 和 `mirrors.dgut.edu.cn` 下都有一个 `nginx.conf`，里面写了网站要运行起来至少需要 host 的一些路径。在同一个域名下部署其他服务（如流量监控）时请避开这些路径。

Dockerfile 中没有打包 Nginx，因此这里的 `nginx.conf` 只是示例。如需容器化 Nginx 请使用 docker-compose。仓库没有包含 `robots.txt`，为了避免镜像站 serve 的文件被搜索引擎索引导致的资源浪费，部署时请注意添加该文件。

旧的镜像站前端将静态文件放在 `/static/assets` 下，而将 tunasync 的 API 放在 `/static/status.json`，将 MirrorZ 的 API 放在 `/static/mirrorz.json`。因为有第三方的服务依赖这些 API，这边不方便更改，因此可以认为 `/static/` 下都来自后端。

------

Serve 镜像文件可以用 `autoindex/autoindex.xslt` 模板以获得更美观的索引。
