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
        <!-- <link rel="stylesheet" href="/static/assets/autoindex.css" /> -->
        <style>*{margin:0;padding:0;font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace}body{background:#121212;color:#ccc}@media (prefers-color-scheme: light){body{background:#ffffff;color:#333}}a{color:#52a50e;text-decoration:underline dotted rgb(82,165,14) 2px}a:hover{color:#63c910;text-decoration-color:#6ad115}body{border-top:5px solid rgb(82,165,14)}.c{box-sizing:border-box;padding:2em 15px;margin:0 auto}@media (min-width: 780px){.c{width:750px}}@media (min-width: 1000px){.c{width:970px}}@media (min-width: 1200px){.c{width:1170px}}.t{overflow-x:auto}table{border-spacing:.2rem .5em;width:100%}td,th{text-align:left}th{text-transform:uppercase}h1{font-weight:500;font-size:2em;margin-left:.2rem}.s{margin:.2em .2rem 1em}</style>
    </head>
    <body>
        <div class="c">
            <h1><xsl:value-of select="$request_uri" /></h1>
            <div class="s"><xsl:value-of select="count(//directory)"/> directories, <xsl:value-of select="count(//file)"/> files</div>
            <div class="t">
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
