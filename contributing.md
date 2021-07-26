# 贡献指南

## mirrors.dgut.edu.cn

`mirrors.dgut.edu.cn/help` 下存放的是镜像站的帮助页面，分为两个部分 `mirrors` 和 `others`。新增页面只需要在 `mirrors` 下新建一个 `.md` 文件。镜像源帮助页面的文件名（不包括后缀名）需要和镜像源的名称相同，这样镜像站首页就可以在对应的条目后面显示一个帮助链接。帮助页面的后缀名只能是 `.md`，不能是 ~~`.markdown`、`.mdown`~~ 等等。

支持 GitHub Flavored Markdown (GFM) 的所有语法。

### 自定义元素

除 GFM 外还支持这些自定义元素：


```markdown
<div class="info">

提示内容
</div>

<div class="warning">

警告内容
</div>

<div class="error">

警告内容（强烈）
</div>
```

三者分别会渲染成蓝色、橙色和红色的提示栏。请注意内容前面必须有一行空行，这是为了使 marked 将里面包含的内容其识别为 Markdown 而不是 HTML。

### 页面间链接

页面间可以互相链接，必须使用相对路径而非绝对路径。如 `mirrors/archlinux.md` 要创建一个指向 `mirrors/archlinuxcn.md` 的连接，就要这么写

```markdown
[Arch Linux CN 源](./archlinuxcn.md)
```

或者

```markdown
[Arch Linux CN 源](archlinuxcn.md)
```

网页中会自动转换为绝对路径，并去掉 `.md` 后缀。就像这样 `/help/mirrors/archlinuxcn`。

若要在 `mirrors/archlinux.md` 里创建一个指向 `others/faq.md` 的连接，需要这么写

```markdown
[常见问题](../others/faq.md)
```

同样，会自动转换为 `/help/others/faq`。

### 标题

另外请注意每个页面都必须包含一个一级标题，这个一级标题将被用作页面标题。

### 官方镜像站标记

如果我们的某个镜像源被上游列入了官方镜像站，可以在 `mirrors.dgut.edu.cn/src/lib/official-mirrors.js` 中加入该镜像源的名称。这样镜像站首页这个源的名称后就会加上一个 `official` 的标记。

## linux.dgut.edu.cn

这是协会主页。博客文章放在 `blog` 下。文件命名按照

```
<年>-<月>-<日>-<文章slug>.md
```

文章 slug 就是一段简短的标题的英文翻译，显示在 URL 里的，多个单词之间通过 `-` 分隔（dash-case）。比如上面这个文件名称就会输出这样的网页 URL

```
/blog/<分类>/<年>/<月>/<日>/<文章slug>
```

其中分类字段由文章内的 front matter 指定。Front matter 就是文件开头的这样一段东西：

```markdown
---
title: <文章标题>
author: <作者>
category: <文章分类>
---
```

现在仅支持这三个字段。没错，和镜像站帮助页面不同，这里的标题不是由文章内的一级标题指定，而是在 front matter 里指定。至于为什么会这样，是因为以前的协会主页用的 Jekyll 就是这样，这里我们继承它的行为。

由于分类字段会反映在 URL 上，并且这里还实现了一个按照分类浏览的功能，分类字段请不要随便填写。现在有这三个分类：

| 分类 | 用途 |
|:---|:---|
| event | 协会活动，如分享会、SFD |
| news | 协会新闻，如招新 |
| knowledge | 知识库 |

### 页面间链接

页面间链接和镜像站帮助页面类似，只需要指定文件系统内的 Markdown 文件的相对位置，网页内就会自动转化为绝对位置。如

```
2020-10-30-join-2020.md -> /blog/news/2020/10/30/join-2020
```

### 静态文件

静态文件放在 `pulic/assets` 下，在文章中引用时就是 `/assets/` 下。这个后面还可能会改。

### 自定义元素

和镜像站帮助页面一样支持那三个自定义元素。
