# Arch Linux 源

### 地址

[https://mirrors.dgut.edu.cn/archlinux/](https://mirrors.dgut.edu.cn/archlinux/)

### 使用方法

STEP 1: 编辑`/etc/pacman.d/mirrorlist` ，在文件的最顶端添加

```bash
Server = https://mirrors.dgut.edu.cn/archlinux/$repo/os/$arch
```

STEP 2: 更新软件包缓存： `sudo pacman -Syy`

<div class="info">

对于国内用户，我们建议同时添加[ArchLinux CN](archlinuxcn.md)源.
</div>

