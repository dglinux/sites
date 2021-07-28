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
