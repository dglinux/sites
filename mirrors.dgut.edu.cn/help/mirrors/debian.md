# Debian 源

### 地址

[https://mirrors.dgut.edu.cn/debian/](https://mirrors.dgut.edu.cn/debian/)

### 收录架构

`amd64`、`i386`、`arm64`、`armhf`

### 使用方法

STEP 1: 备份`/etc/apt/sources.list`，您可以

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

STEP 2: 执行

```bash
sudo sed -i 's/deb.debian.org/mirrors.dgut.edu.cn/g' /etc/apt/sources.list
sudo apt-get update
```

<div class="warning">

如遇无法拉取 https 源的情况，请先使用 http 源先安装 `apt-transport-https` \(Debian Buster 及以上版本不需要\)。但Debian不靠https保证可信性。
</div>
