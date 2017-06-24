# XML - eXtensible Markup Language  

he eXtensible Markup Language (XML) format, may be new to some people. Like HTML, XML is defined by tags enclosing content. Unlike HTML, the tags are mostly defined by the user to describe their own data. The XML standard defines how tags are organized and how to manipulate them. XML is natively stored in Unicode, a 32-bit plain text standard that supercedes ASCII. The power and simplicity of XML has led to implementations on every major platform. These features make XML an excellent candidate for long-term storage of data and metadata.For metadata, XML has the added advantages of being searchable (in a metadata clearinghouse, for example) and displayable via style sheets.  

To access an XML data set ... you can open the files directly in Microsoft Excel or Access 2003 or higher. Other high-end database systems such as SQL Server and Oracle, not to mention XML-centric databases such as Tamino can import XML files.  

To view an XML metadata document ... you will need to use a style sheet. The use of style sheets allows one to generate the XML once, but display it in different formats by simply changing the style sheet used. The impact of this can be seen by opening this [metadata file](https://www.fs.usda.gov/rds/archive/Content/metadata/ocean.plain.xml.txt); this is the raw XML. If you open the [same file](https://www.fs.usda.gov/rds/archive/Content/metadata/ocean.plain.xml) in Internet Explorer (IE) 4.5 or later, it looks different. Microsoft incorporated a simple style sheet for displaying XML. One can also specify a style sheet to use in the XML file. This can insulate a regular data user from raw XML, as can be seen by opening this version of the [metadata file](https://www.fs.usda.gov/rds/archive/Content/metadata/ocean.nbii.xml) in IE. This style sheet started out as an ESRI/FGDC display for FGDC metadata and has been extended by the archiving team to handle [BDP metadata](https://www.fs.usda.gov/rds/archive/Metadata/Standards). Here is the [stylesheet the archive uses to display our XML metadata: NBII_classic.xsl](https://www.fs.usda.gov/rds/archive/Content/metadata/NBII_classic.xsl). Simply download this file and put it into the same folder as FGDC compliant metadata XML file.  

[XML Metadata Example in Plain Text](files/xml-file-format-metadata-example-in-plain-text-ocean.plain.xml.txt)  
[XML Metadata Example](files/xml-file-format-metadata-example-ocean.plain.xml)  
[XML Metadata Example with BDP Style Sheet](files/xml-file-format-metadata-example-with-bdp-style-sheet-ocean.nbii.xml)  
[XSL Standard for USDA Forest Service Research Data Archive Metadata XML](files/xsl-file-format-usda-forest-service-research-data-archive-metadata-xml-stylesheet-for-archives-metadata-nbii-classic.xsl)  
[Formats - XML](https://www.fs.usda.gov/rds/archive/UsingFormats/XML)
