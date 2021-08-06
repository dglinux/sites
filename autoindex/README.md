# Auto-index template for Nginx

```nginx
location / {
    autoindex on;
    autoindex_format xml;
    xslt_stylesheet /var/www/mirrors.dgut.edu.cn/mirrors.xslt request_uri='$request_uri';
}
```
