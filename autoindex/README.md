# Auto-index template for Nginx

Dependency: `nginx-full` or `nginx-extra`. See [wiki](https://wiki.debian.org/Nginx) for details.

```nginx
location / {
    autoindex on;
    autoindex_format xml;
    xslt_stylesheet /var/www/mirrors.dgut.edu.cn/autoindex.xslt request_uri='$request_uri';
}
```
