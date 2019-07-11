---
description: Arch Linux 中文社区仓库 （官方镜像）
---

# Arch Linux CN 源

Arch Linux 中文社区仓库 是由 Arch Linux 中文社区驱动的非官方用户仓库，包含中文用户常用软件、工具、字体/美化包等。部分软件包的打包脚本来源于 AUR。

### 地址

[https://mirrors.dgut.edu.cn/archlinuxcn/](https://mirrors.dgut.edu.cn/archlinuxcn/)

### 使用方法

STEP 1: 编辑`/etc/pacman.conf` ，在文件的末尾添加两行

```bash
[archlinuxcn]
Server = https://mirrors.dgut.edu.cn/archlinuxcn/$arch
```

STEP 2:

`sudo pacman -Syu archlinuxcn-keyring`

