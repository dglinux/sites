---
description: >-
  EPEL (Extra Packages for Enterprise Linux) 是由 Fedora Special Interest Group
  为企业 Linux 创建、维护和管理的一个高质量附加包集合，适用于但不仅限于 Red Hat Enterprise Linux (RHEL),
  CentOS, Scientific Linux (SL), Oracle Linux (OL)
---

# EPEL 源

### 地址

[https://mirrors.dgut.edu.cn/epel/](https://mirrors.dgut.edu.cn/epel/)

### 使用方法

执行以下命令：

```bash
sudo yum install -y epel-release
sudo sed -e 's!^mirrorlist=!#mirrorlist=!g' \
         -e 's!^#baseurl=!baseurl=!g' \
         -e 's!//download\.fedoraproject\.org/pub!//mirrors.dgut.edu.cn!g' \
         -e 's!http://mirrors\.dgut!https://mirrors.dgut!g' \
         -i /etc/yum.repos.d/epel.repo /etc/yum.repos.d/epel-testing.repo
```

