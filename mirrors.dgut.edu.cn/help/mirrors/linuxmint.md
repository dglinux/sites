# Linux Mint 源

Linux Mint 是一款基于 Ubuntu 的用户友好的发行版。

## 地址

https://mirrors.dgut.edu.cn/linuxmint/

## 使用方法

首先更改 Ubuntu 源

```bash
sudo sed -i 's/\w\+.ubuntu.com/mirrors.dgut.edu.cn/g' /etc/apt/source.list.d/official-package-repositories.list
```

然后更改 Linux Mint 源

```bash
sudo sed -i 's|packages.linuxmint.com|mirrors.dgut.edu.cn/linuxmint|g' /etc/apt/source.list.d/official-package-repositories.list
```

更新软件源缓存

```bash
sudo apt update
```
