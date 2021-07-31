# Termux 源

Termux 是一个安卓终端模拟器以及 Linux 环境的应用，使用 Termux 完全不需要设置任何东西或者 root 。一个最小系统会自动安装好 —— 并且接下来的包可以通过 APT 包管理器安装。

### 地址 

[https://mirrors.dgut.edu.cn/termux/](https://mirrors.dgut.edu.cn/termux/)

### 使用方法

Termux 将软件包分为 `termux-apt`, `game`, `science`, `unstable`, `root`, `x11` 六个仓库，并默认启用了 `termux-apt`, `game`, `science` 仓库。更改镜像源时要同时更改这几个仓库。

STEP 1: 更改主仓库源: 

```bash
cp $PREFIX/etc/apt/sources.list $PREFIX/etc/apt/sources.list.bak
vim $PREFIX/etc/apt/sources.list
```

```diff
 # The main termux repository:
-deb https://packages.termux.org/apt/termux-main/ stable main
+deb https://mirrors.dgut.edu.cn/termux/apt/termux-main/ stable main
```

STEP 2: 更改 `$PREFIX/etc/apt/sources.list.d` 下其他仓库源

```bash
sed -i 's|packages.termux.org|mirrors.dgut.edu.cn/termux|g' $PREFIX/etc/apt/sources.list.d/*.list
```

STEP 3: 同步源索引

```bash
apt update
```
