---
description: Raspbian 是专门用于 ARM 卡片式计算机 Raspberry Pi® “树莓派”的操作系统。
---

# Raspbian 源

该帮助页面仅用于上游 Raspbian 系统（现在已经不再提供安装镜像）。对于树莓派基金会基于 Raspbian 开发的 Raspberry Pi OS，请见 [Raspberry Pi OS 帮助页面](raspberrypi.md#armhf-版本)。

### 地址

[https://mirrors.dgut.edu.cn/raspbian/](https://mirrors.dgut.edu.cn/raspbian/)

### 使用方法

STEP 1: 备份`/etc/apt/sources.list`，您可以

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

STEP 2: 执行

用如下命令替换：

```bash
sudo sed -i 's|raspbian.raspberrypi.org|mirrors.dgut.edu.cn/raspbian|g' /etc/apt/sources.list
```

**旧版**\(2018-04-19之前\)的系统可以用以下命令替换：

```bash
sudo sed -i 's|mirrordirector.raspbian.org|mirrors.dgut.edu.cn/raspbian|g' /etc/apt/sources.list
sudo sed -i 's|archive.raspbian.org|mirrors.dgut.edu.cn/raspbian|g' /etc/apt/sources.list
```

**或者**清空 `/etc/apt/sources.list` 文件（删除原文件所有内容），用以下内容取代

{% tabs %}
{% tab title="buster" %}
```text
deb http://mirrors.dgut.edu.cn/raspbian/raspbian/ buster main non-free contrib
deb-src http://mirrors.dgut.edu.cn/raspbian/raspbian/ buster main non-free contrib
```
{% endtab %}

{% tab title="stretch" %}
```text
deb http://mirrors.dgut.edu.cn/raspbian/raspbian/ stretch main contrib non-free rpi
deb-src http://mirrors.dgut.edu.cn/raspbian/raspbian/ stretch main contrib non-free rpi
```
{% endtab %}

{% tab title="jessie" %}
```text
deb http://mirrors.dgut.edu.cn/raspbian/raspbian/ jessie main non-free contrib
deb-src http://mirrors.dgut.edu.cn/raspbian/raspbian/ jessie main non-free contrib
```
{% endtab %}

{% tab title="wheezy" %}
```text
deb http://mirrors.dgut.edu.cn/raspbian/raspbian/ wheezy main non-free contrib
deb-src http://mirrors.dgut.edu.cn/raspbian/raspbian/ wheezy main non-free contrib
```
{% endtab %}
{% endtabs %}

然后

```bash
sudo apt-get update
```





