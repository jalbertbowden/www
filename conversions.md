# Conversions- Convert Data and Files  

## PolyConverters  
[Data Converters - OKFN Labs](http://okfnlabs.org/dataconverters/)  
Unified python library and command line interface to convert data from one format to another (especially tabular data). Supports:  
CSV (to, from) - with type detection (dates, numbers etc)  
XLS(X) (from) - ditto  
JSON (to)  
KML to GeoJSON  
Shapefile to GeoJSON  

[Morph GeoJSON Polygons into Rectangles](https://github.com/sebastian-meier/d3.geo2rect)  

[GDAL Cheat Sheet - Cheat Sheet for GDAL/OGR Command-Line Tools](https://github.com/dwtkns/gdal-cheat-sheet)  

[Converts between OSM XML and GeoJSON](http://aaronlidman.com/osm-and-geojson/)  

[OSM and GeoJSON Repository](https://github.com/aaronlidman/osm-and-geojson)  

[How to Add an Excel File with a List of Coordinates to QGIS as a Layer?](http://gis.stackexchange.com/questions/213108/how-to-add-an-excel-file-with-a-list-of-coordinates-to-qgis-as-a-layer)  

[Convert KML to GeoJSON](http://tcm.io/2014/11/28/convert-kml-geojson/)  
[ogr2ogr: Converting KML to GeoJSON](http://gis.stackexchange.com/questions/92885/ogr2ogr-converting-kml-to-geojson)  
[toGeoJSON - Convert KML to GeoJSON, Without the Fuss](https://mapbox.github.io/togeojson/)
[toGeoJson Repository](https://github.com/mapbox/togeojson)  


## .shp Shapefile Conversions  

[Filter and Select Input Shapefile to New Output Shapefile Like ogr2ogr CLI](http://pcjericks.github.io/py-gdalogr-cookbook/layers.html#filter-and-select-input-shapefile-to-new-output-shapefile-like-ogr2ogr-cli)  

.shp to .geojson  
[How to Convert Shapefiles to GeoJSON Maps for Use on GitHub (and Why You Should)](http://ben.balter.com/2013/06/26/how-to-convert-shapefiles-to-geojson-for-use-on-github/)  
[Bulk convert Shapefiles to GeoJSON using ogr2ogr (gist)](https://gist.github.com/benbalter/5858851)  
[shp2geojson.js](https://github.com/gipong/shp2geojson.js)  
Convert shapefile to geoJSON via a web browser without Server-Side code. This conversion will unzip your file and reproject the data with correct encoding in JavaScript.  
[Convert Shapefiles to GeoJSON?](http://gis.stackexchange.com/questions/91812/convert-shapefiles-to-geojson)  


.shp to .topojson  
[Converting Shapefiles to TopoJSON in Windows](http://blog.thematicmapping.org/2013/06/converting-shapefiles-to-topojson.html)  

DEM (Digital Elevation Models) to .shp  
[Converting Digital Elevation Models To Shapefile/DXF Contours](http://freegeographytools.com/2007/converting-digital-elevation-models-to-shapefiledxf-contours)  

MapINFO Tabs to .shp  
[MapINFO Tabs to ESRI Shapefiles - FWTools ogr2ogr in Python](http://gis.stackexchange.com/questions/33629/fwtools-ogr2ogr-in-python)  

Landsat Converters & Shapefiles  
[Landsat Converters & Shapefiles](https://landsat.usgs.gov/converters-and-shape-files): Determine path/row or latitude/longitude, use shape and kml files to view scene boundaries, or view WRS-2 map.  



# Conversion Scripts and Tools  

## [GDAL](http://www.gdal.org/)  

[GDAL](http://www.gdal.org/) is a translator library for raster and vector geospatial data formats that is released under an X/MIT style Open Source license by the Open Source Geospatial Foundation. As a library, it presents a single raster abstract data model and single vector abstract data model to the calling application for all supported formats. It also comes with a variety of useful command line utilities for data translation and processing. The NEWS page describes the July 2016 GDAL/OGR 2.1.1 release.  

## [ogr2ogr](http://www.gdal.org/ogr2ogr.html)

[ogr2ogr](http://www.gdal.org/ogr2ogr.html) - GDAL library that converts simple features data between file formats.  

[Ogre - ogr2ogr web client](http://ogre.adc4gis.com/)  
[ogr2ogr Command Line Tool](http://www.gdal.org/ogr2ogr.html)  
[ogr2org.py Python Script](http://svn.osgeo.org/gdal/trunk/gdal/swig/python/samples/ogr2ogr.py)  
[Execute ogr2ogr from python](http://gis.stackexchange.com/questions/154004/execute-ogr2ogr-from-python)  



## ESRI/Arc GIS Servers  

Example JSON Call URL:
[https://watersgeo.epa.gov/ArcGIS/rest/services/OWRAD_NP21/NPDES_NP21/MapServer?f=json&pretty=true](https://watersgeo.epa.gov/ArcGIS/rest/services/OWRAD_NP21/NPDES_NP21/MapServer?f=json&pretty=true)  
Append ?f=json&pretty=true to ESRI/ArcGIS Map Server URLs.  



## Resources  
["GDAL" Tagged Questions on GIS Stack Exchange](http://gis.stackexchange.com/questions/tagged/gdal)  
["ogr2ogr" Tagged Questions on GIS Stack Exchange](http://gis.stackexchange.com/questions/tagged/ogr2ogr)  


