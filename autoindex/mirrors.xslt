<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8" />
<xsl:param name="request_uri" />

<xsl:template match="/">
<xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html&gt;</xsl:text>

<html>
    <head>
        <title>Index of <xsl:value-of select="$request_uri" /></title>
    </head>
    <body>
        <h1><xsl:value-of select="$request_uri" /></h1>
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
                        <td><a href="{.}" download="{.}"><xsl:value-of select="." /></a></td>
                        <td><xsl:value-of select="./@mtime" /></td>
                        <td><xsl:value-of select="./@size" /></td>
                    </tr>
                </xsl:for-each>
            </tbody>
        </table>
    </body>
</html>

</xsl:template>
</xsl:stylesheet>
