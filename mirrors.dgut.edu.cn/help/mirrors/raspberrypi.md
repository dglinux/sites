# Raspberry Pi OS 源

Raspberry Pi OS 是树莓派基金会为单板计算机树莓派开发的操作系统。分为 armhf、arm64 和 x86 三个版本。

* [armhf 版本](#armhf-版本)基于 [Raspbian](raspbian.md)，适用于所有树莓派（32 位）。
* [arm64 版本](#arm64-版本)基于 [Debian](debian.md)，适用于包括树莓派 2B v1.2 和 CM3 在内以后型号的树莓派（64 位）。
* [x86 版本](#x86-版本)同样基于 [Debian](debian.md)，适用于 i386 和 amd64 架构的计算机。

<div class="info">

如果你不知道自己在用哪个版本，那么你很可能在用 [armhf 版本](#armhf-版本)。
</div>

## 地址

https://mirrors.dgut.edu.cn/raspberrypi/

## armhf 版本

首先更改 Raspbian 源：

```bash
sudo sed -i 's|raspbian.raspberrypi.org|mirrors.dgut.edu.cn/raspbian|g' /etc/apt/sources.list
```

然后更改树莓派源：

```bash
sudo sed -i 's|archive.raspberrypi.org/debian|mirrors.dgut.edu.cn/raspberrypi|g' /etc/apt/sources.list.d/raspi.list
```

最后更新软件源：

```bash
sudo apt update
```

## arm64 版本

首先更改 Debian 源：

```bash
sudo sed -i 's/deb.debian.org/mirrors.dgut.edu.cn/g' /etc/apt/sources.list
```

然后更改树莓派源：

```bash
sudo sed -i 's|archive.raspberrypi.org/debian|mirrors.dgut.edu.cn/raspberrypi|g' /etc/apt/sources.list.d/raspi.list
```

最后更新软件源：

```bash
sudo apt update
```

## x86 版本

首先更改 Debian 源：

```bash
sudo sed -e 's/ftp.debian.org/mirrors.dgut.edu.cn/g'\
         -e 's|security.debian.org|mirrors.dgut.edu.cn/debian-security|g'\
         -i /etc/apt/sources.list
```

然后更改树莓派源：

```bash
sudo sed -i 's|archive.raspberrypi.org/debian|mirrors.dgut.edu.cn/raspberrypi|g' /etc/apt/sources.list.d/raspi.list
```

最后更新软件源：

```bash
sudo apt update
```
