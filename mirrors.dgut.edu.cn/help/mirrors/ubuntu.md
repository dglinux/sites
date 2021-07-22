# Ubuntu 源

### 地址

[https://mirrors.dgut.edu.cn/ubuntu/](https://mirrors.dgut.edu.cn/ubuntu/)

### 使用方法

将 `/etc/apt/sources.list` 文件中 Ubuntu 默认的源地址 `http://archive.ubuntu.com/` 替换为 `http://mirrors.dgut.edu.cn` 

STEP 1: 备份`/etc/apt/sources.list`，您可以

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

STEP 2: 执行

```bash
sudo sed -i 's/archive.ubuntu.com/mirrors.dgut.edu.cn/g' /etc/apt/sources.list
sudo apt-get update
```

{% hint style="info" %}
如果你在安装时选择的语言不是英语，默认的源地址通常不是 `http://archive.ubuntu.com/` ， 而是 `http://<country>.archive.ubuntu.com/ubuntu/` ，如 `http://cn.archive.ubuntu.com/ubuntu/` ， 此时只需将上面的命令进行相应的替换即可，即 `sudo sed -i 's/cn.archive.ubuntu.com/mirrors.dgut.edu.cn/g' /etc/apt/sources.list` 
{% endhint %}

{% hint style="warning" %}
如遇无法拉取 https 源的情况，请先使用 http 源先安装 `apt-transport-https`。
{% endhint %}



