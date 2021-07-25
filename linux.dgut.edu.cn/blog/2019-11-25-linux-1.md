---
title: 回顾 | Linux系统安装以及基本命令
layout: post
author: dgtao
category: ubuntu  install
---

主讲人：**42yeah**
  
  本次分享会大致为大家讲解了一些Linux系统的发展，以及Linux_Ubuntu系统在虚拟机上的安装流程，一些基本且重要的操作命令。下有分享会的录播视频以及PPT，大家需要可自行下载。



[录播视频](http://pan.dgut.edu.cn/drive/share/open_sharepage/6e2afb69-6808-4c5f-aaf9-c039f473fe79:bingosoft)

[PPT](http://pan.dgut.edu.cn/drive/share/open_sharepage/bca95c0b-fa62-429d-88e7-64c4695e50f8:bingosoft)


## 分享会流程

---

首先，向大家介绍了一些 **操作系统** 的基本概念，Linux系统 **Ubuntu** 的基本介绍以及优点，以及开源的重要性 ！！

### Ubuntu 系统安装流程：

> -  电脑准备好 [Ubuntu_19.10](https://mirrors.dgut.edu.cn/ubuntu-releases/19.10/ubuntu-19.10-desktop-amd64.iso) 系统镜像以及开源虚拟机 [VirtualBox6.0.14](https://download.virtualbox.org/virtualbox/6.0.14/VirtualBox-6.0.14-133895-Win.exe )
>
> -  先进行虚拟机的安装，选定好合适的地方，next，install；
>
> -  安装完成打开VirtualBox，点击界面新建；
>
> -  输入好听的名字，选择合适的存放虚拟机文件，继续；
>
> -  内存大小建议2G以上，起码满足正常使用，继续；
>
> -  创建虚拟硬盘，然后选择VDI类型，选择动态分配，继续；
>
> -  选择安装位置，设置硬盘大小，再点击创建。
>
> -  返回主界面，右击设置处理器数量，建议2个起步，建议关闭3D加速。
>
> -  点击启动，选择事先准备的镜像文件，开始安装Ubuntu
>
> -  进入系统主界面选择系统语言，推荐英语，点击安装Ubuntu
>
> -  推荐选择正常安装，然后关闭安装时的下载更新，继续
>
> -  选择清除整个硬盘并安装Ubuntu，操作的是虚拟机，不用担心
>
> -  选择时区，然后设置用户名以及密码，开始安装…...Waiting...
>
> -  安装完成后，点击重启，回车进入系统！

就这样，一个全新的 Linux 系统 Ubuntu 就安装完成了，可以开始你们的表演了..........

******

### 基本命令的使用

打开终端，也就是Terminal，光标移至工作目录，右击就可以看见了

- echo HELLO WORLD     输出HELLO　WORLD

  

- cd [目录名称］　　　     切换工作路径

  

- ls                                       列出当前路径可见文件，  接参数－ａ显示所有文件

  

- pwd                                 显示当前目录路径

  

- touch [文件名称］　　　创建文件

  

- mkdir [目录名称］           创建文件目录

  

- rm　　                             删除文件，－ｒ删除目录，－ｆ强制删除

	 rm -rf /* 　　一个有故事的命令，别轻易尝试！

.............................................................................................（略）

另外，可以使用 APT 进行安装一些包以及软件

 sudo apt-get install [包名/软件名]

例如：

``` shell
~$ sudo apt-get install neofetch
```

安装完成，执行 neofetch，即可显示很帅的系统信息！

![](/assets/linuxOne/1574676998.png)

接下来，推荐一些有趣好玩的包，大家可以了解了解

```javascript
mc         Tmux      emacs       Lynx      

Cowsay     lolcat     cmatrix     nyancat
```



大家可以自行去自己的Ubuntu 下进行安装体验，虽然有些作用不大，好看就完事了嘛

当然啦，大家也可以在Ubuntu下进行开发，C/C++/Rust/Golang 等在 Linux 环境下有几乎最好的支持！

IDE 譬如 VSCode 和 Jetbrains 全家桶也在 Linux 上有，大家可以自行进入相应的官网进行下载安装。



### 重定向、管道符的使用

---

#### 重定向

重定向这东西，简单的说，**输入重定向是指文件导入到命令中，而输出重定向是把原来要输出到屏幕上的数据信息写入指定文件中**。

​												输入重定向中符号的作用

| 符号                 | 作用                                         |
| :-------------------- | :-------------------------------------------- |
| 命令  <   文件       | 将文件作为命令的标准输入                     |
| 命令  <<  分界符     | 从标准输入中读入，直到遇见分界符才停止       |
| 命令  <文件1>  文件2 | 将文件1作为命令的标准输入并将标准输出到文件2 |

​												输出重定向中符号的作用

| 符号            | 作用                                           |
| :-------------- | ---------------------------------------------- |
| 命令  >  文件   | 将标准输出重定向到一个文件中（清空原文件数据） |
| 命令  2>  文件  | 将错误输出重定向到一个文件中（清空原文件数据） |
| 命令  >>  文件  | 将标准输出重定向到一个文件中（追加原文件数据） |
| 命令  2>>  文件 | 将错误输出重定向到一个文件中（追加原文件数据） |

比如说：

``` shell
~$ touch test.txt
~$ echo "DGUT GNU/Linux 协会" > test.txt
~$ cat test.txt
DGUT GNU/Linux 协会
```



#### 管道符 ####

简之而言，管道符的作用就是 

**把前一个命令原本要输出到屏幕的数据当作是后一个命令的标准输入**

执行格式  **"命令A \| 命令B"**  

好比说：ps aux | grep "dgtao"  ，
就是在 **ps aux** 的标准输出搜索 "dgtao"；

``` shell
~$ ps aux | grep "dgtao"
avahi       708  0.0  0.0   8532  3628 ?        Ss   00:48   0:00 avahi-daemon: 
running [dgtao-virtual-machine.local]
dgtao       930  0.0  0.1  18808  9776 ?        Ss   00:48   0:00 /lib/systemd/s
ystemd --user
dgtao       932  0.0  0.0  20860  2960 ?        S    00:48   0:00 (sd-pam)
dgtao       956  0.0  0.3 1679944 18692 ?       S<sl 00:48   0:01 /usr/bin/pulse
audio --daemonize=no
.....................................................(过多不宜显示)
```

当然，信息过多的话我们还可以这样：

```shell
~$ ps aux | grep "dgtao" | more
avahi       708  0.0  0.0   8532  3628 ?        Ss   00:48   0:00 avahi-daemon: 
running [dgtao-virtual-machine.local]
dgtao       930  0.0  0.1  18808  9776 ?        Ss   00:48   0:00 /lib/systemd/s
ystemd --user
dgtao       932  0.0  0.0  20860  2960 ?        S    00:48   0:00 (sd-pam)
dgtao       956  0.0  0.3 1679944 18692 ?       S<sl 00:48   0:01 /usr/bin/pulse
audio --daemonize=no
--More--
```

就这样啦，管道符的作用远不止这些，更多的作用可以自行去了解了解。

----

虽然已经安装好了自己的 Linux 系统，掌握了一些基本命令，但 Linux 系统的使用远不止这些，更多的功能大家可以自己学习，

​									Bye