<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:fo="http://www.w3.org/1999/XSL/Format"
                version="1.0">

  <xsl:template match="/">
    <fo:root>
      <fo:layout-master-set>
        <fo:simple-page-master master-name="my-page">
          <fo:region-body margin="1cm"/>
        </fo:simple-page-master>
      </fo:layout-master-set>
      
      <fo:page-sequence master-reference="my-page">
        <fo:flow flow-name="xsl-region-body">
          <xsl:apply-templates/>
        </fo:flow>
      </fo:page-sequence>
    </fo:root>
  </xsl:template>
  
  <xsl:template match="FX">
    <fo:block font-weight="bold" space-after="10pt">
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
  <xsl:template match="speech[@speaker='Arthur']">
    <fo:block background-color="#00b2e6"  space-after="10pt">
      <xsl:value-of select="@speaker"/>:
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
  <xsl:template match="speech">
    <fo:block space-after="10pt">
      <xsl:value-of select="@speaker"/>:
      <xsl:apply-templates/>
    </fo:block>
  </xsl:template>
  
</xsl:stylesheet>
