<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8" />
<xsl:param name="request_uri" />

<xsl:template match="/">
<xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html&gt;</xsl:text>

<html>
    <head>
        <title>Index of <xsl:value-of select="$request_uri" /> - DGUT Open Source Software Mirrors</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/static/assets/autoindex.css" />
    </head>
    <body style="display:none">
        <div class="stripe" />
        <div class="container">
            <header>
                <a class="titlebar" href="/">
                    <img src="/static/assets/logo.png" alt="DGLinux Logo" />
                    <span class="title">东莞理工学院 镜像站</span>
                </a>
                <nav>
                    <ul>
                        <li><a href="https://linux.dgut.edu.cn/">Home</a></li>
                        <li><a href="https://linux.dgut.edu.cn/blog">Blog</a></li>
                        <li><a href="https://t.me/dgutlinux/">Channel</a></li>
                        <li><a href="/help">Wiki</a></li>
                        <li class="active"><a href="/">Mirrors</a></li>
                    </ul>
                </nav>
            </header>
            <h1><xsl:value-of select="$request_uri" /></h1>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last modified</th>
                            <th>Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><a href="../">../</a></td></tr>

                        <xsl:for-each select="list/directory">
                            <tr>
                                <td><a href="{.}/"><xsl:value-of select="." />/</a></td>
                                <td><xsl:value-of select="./@mtime" /></td>
                            </tr>
                        </xsl:for-each>

                        <xsl:for-each select="list/file">
                            <tr>
                                <td><a href="{.}"><xsl:value-of select="." /></a></td>
                                <td><xsl:value-of select="./@mtime" /></td>
                                <td><xsl:value-of select="./@size" /></td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </div>
        </div>
    </body>
</html>

</xsl:template>
</xsl:stylesheet>
