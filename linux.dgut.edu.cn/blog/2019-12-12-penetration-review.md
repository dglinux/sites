---
title: 回顾 | Web渗透测试以及实战
category: event
author: dgtao
excerpt: 分享会回顾：Web渗透测试以及实战
---





主讲人：菜夹膜  

  

本次分享会主要向大家讲解Web渗透测试的介绍以及运用 **Burp Suite** 以及 **Sqlmap** 进行实战，由于直播视频未准备好，故本次分享会不提供录播视频，下面提供课程资料以及课程PPT ！



[课程资料](http://pan.dgut.edu.cn/drive/share/open_sharepage/ae4b6c53-2428-4d06-8cc8-eada8886b1e5:bingosoft)

![感谢菜夹膜dalao](/assets/penetration-1/kenway.jpg)


## 分享会流程

首先，向大家介绍黑客一词的起源，从而向大家介绍最大的黑客组织匿名者Anonymous，以及其的一些光辉事迹。 当然，大家可能第一次接触黑客一词是从影视中开始的，好比说，The Matrix，MR.ROBOT，以及热剧 亲爱的热爱的 等等等，这些影剧都是对“黑客”的一种呈现。


### Web简单入门

浏览器的开发者工具(F12)：

> - Elements 查看当前文档的DOM信息   
>  
> -  Console 查看调试用的，也可以直接写JS代码  
>  
> - Source 查看当前资源文件的（CSS,JS,IMAGE）  
>  
> - Network 查看网络请求的  
>  
> - Resources 查看本地资源信息的（cookie,local storage,session storage等）  

大家可以使用开发者工具查看网页的源码，进行一些网页参数的修改等等等，更多的用法等您去探索.....

![DGLINUX](/assets/penetration-1/cas.jpg)


### Burp Suite 安装使用

安装流程：

>  - 首先安装 jre-8u211-windows-x64 运行环境  
>
>  - 解压Burp_Suite_Pro_v1.7.32压缩包中的文件夹  
>
>  - 到存放软件目录中，运行burp-loader-keygen，然后点击Run   
>
>   - 在弹出的窗口中，复制keygen中的license文本并粘贴  
>
>  - 选择Manual activation，将request中的文本复制到keygen的Activation request文本框中    
>- 再复制生成的Response到软件中  

Burp Suite 是用于攻击Web应用程序的集成平台，包含了多种工具。具体使用教程大家可以查询相关文档，遇到的问题可以群里讨论。

![Burp Suite](/assets/penetration-1/burp-suite.png)

### Sqlmap 安装使用

 Sqlmap是基于python环境的，所以在这之前需要安装python环境 

 相关指令参数的介绍：

`python sqlmap.py`

>- **-h**                     获得脚本的帮助提示
>
>  - **-u + url**              使用脚本对网站进行sql注入
>
>- **-p + parameter** 选定要注入的参数
>
>-  **-v**              可以控制log输出的等级
>
>- **--current-db**      爆破当前数据库库名
>
>- **--tables**              爆破数据库中所有的所有表
>
>- **--columns**          爆破表中所有的列
>
>- **--time-sec**          DBMS响应的延迟时间（默认为5秒）
>
>- **--proxy**               使用代理服务器连接到目标URL
>
>- **--cookie**               指定cookie

等等等，这里就不一一列出了！

Sqlmap是开源的自动化SQL注入工具，完全支持 MySQL、Oracle、PostgreSQL.....等多种数据库管理系统，可以提供一个简单的URL，Burp或WebScarab请求日志文件，文本文档中的完整http请求或者Google的搜索，匹配出结果页面，也可以自己定义一个正则来判断那个地址去测试......等等，更多应用感兴趣的小伙伴可自行探索。。。

![SQLMAP](/assets/penetration-1/sqlmap.png)

---

好了，本次回顾到此结束！感兴趣的小伙伴可以自行了解更多应用；

当然遇到啥问题，可以发群里面讨论！

告辞
