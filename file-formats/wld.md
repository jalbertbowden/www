# .wld World File - ESRI ArcGIS CAD Transformations  

NOTE: [not to be confused with ESRI World Files](world-files-esri.md)  


## [World Files](http://webhelp.esri.com/arcgisdesktop/9.2/index.cfm?id=2581&pid=2577&topicname=World_files)  
World files are used to define a two-point (similarity) transformation for CAD datasets in ArcGIS. They contain the source (from) and destination (to) coordinate values of a transformation and can be managed in ArcMap. World files are not required to transform CAD datasets, since interactive transformation tools exist in ArcMap. However, world files can help streamline the transformation process. The following section provides detailed information about how you can work with world files in ArcGIS.


The world file structure
A world file is a text file (.wld) containing one or four pairs of x,y coordinates. The first pair of coordinates is the x,y location of any known control point in your drawing file. The second pair of x,y coordinates is a new location in geographic space where you want the CAD drawing control point to be in ArcMap. These coordinates comprise the first point of the two-point transformation. The remaining pairs of coordinates follow the same structure as the first and second pairs. They make up the second point of the two-point transformation.

The world file format is as follows:

x,y location in CAD drawing	space	{x,y location in geographic space}
<From X1,From Y1>		<To X1,To Y1>
<From X2,From Y2>		<To X2,To Y2>

Here is an example of the contents of a world file:

26315.299650,11063.153340 519481.78700,94276.547000
28854.942990,11110.990860 519505.85500,93502.99800
</code>

Note: Tip
The universal world file is for defining a transformation for all CAD drawings in a workspace. esri_cad.wld will apply to all CAD drawings in that folder, which do not already have a world file designated. If one exists for a specific CAD drawing it will override the esri_cad.wld file.

[World File Calculator](http://web.archive.org/web/20160304051310/http://egb13.net/2009/03/worldfile-calculator/)  
[World File Calculator.js](http://web.archive.org/web/20160309015149/http://egb13.net/jscripts/worldfile.js)

