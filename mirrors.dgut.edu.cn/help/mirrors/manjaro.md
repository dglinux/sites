# Manjaro Linux 源

### 地址

[https://mirrors.dgut.edu.cn/manjaro/](https://mirrors.dgut.edu.cn/manjaro/)

### 使用方法

STEP 1: 编辑`/etc/pacman.d/mirrorlist` ，在文件的最顶端添加

```bash
Server = https://mirrors.dgut.edu.cn/manjaro/stable/$repo/$arch
```

STEP 2: 更新软件包缓存： `sudo pacman -Syy`

<div class="info">

对于国内用户，您可以添加[ArchLinux CN](archlinuxcn.md)源以丰富在中国的使用体验.但可能有未定义的影响.
</div>
