# Kali Linux 源

### 地址

[https://mirrors.dgut.edu.cn/kali/](https://mirrors.dgut.edu.cn/kali/)

### 使用方法

STEP 1: 编辑`/etc/apt/sources.list`，在文件最前面添加

```text
deb https://mirrors.dgut.edu.cn/kali kali-rolling main non-free contrib
deb-src https://mirrors.dgut.edu.cn/kali kali-rolling main non-free contrib
```

STEP 2: 执行

```bash
sudo apt-get update
```





