---
description: Termux 是一个安卓终端模拟器以及 Linux 环境的应用，使用 Termux 完全不需要设置任何东西或者 root 。一个最小系统会自动安装好 —— 并且接下来的包可以通过 APT 包管理器安装。
---

# Termux 源

### 地址 

[https://mirrors.dgut.edu.cn/termux/](https://mirrors.dgut.edu.cn/termux/)

### 使用方法

STEP 1: 备份 `sources.list`: 

```bash
cp $PREFIX/etc/apt/sources.list $PREFIX/etc/apt/sources.list.bak
vim $PREFIX/etc/apt/sources.list
```

STEP 2: 把源内容更改为 [https://mirrors.dgut.edu.cn/termux/](https://mirrors.dgut.edu.cn/termux/)

```bash
deb https://mirrors.dgut.edu.cn/termux stable main
```

STEP 3: 同步源索引

```bash
apt update
```
