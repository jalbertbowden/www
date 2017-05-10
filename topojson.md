# TopoJSON  

[TopoJSON GitHub Group](https://github.com/topojson)  

[TopoJSON (Repository)](https://github.com/topojson/topojson)  
An extension of GeoJSON that encodes topology!  
TopoJSON is an extension of GeoJSON that encodes topology. Rather than representing geometries discretely, geometries in TopoJSON files are stitched together from shared line segments called arcs. This technique is similar to [Matt Bloch’s MapShaper](http://www.cartogis.org/docs/proceedings/2006/bloch_harrower.pdf) and the [Arc/Info Export format, .e00](http://indiemaps.com/blog/2009/02/e00parser-an-actionscript-3-parser-for-the-arcinfo-export-topological-gis-format/).  

TopoJSON eliminates redundancy, allowing related geometries to be stored efficiently in the same file. For example, the shared boundary between California and Nevada is represented only once, rather than being duplicated for both states. A single TopoJSON file can contain multiple feature collections without duplication, such as states and counties. Or, a TopoJSON file can efficiently represent both polygons (for fill) and boundaries (for stroke) as two feature collections that share the same arc mesh. See [How To Infer Topology](https://bost.ocks.org/mike/topology/) for a visual explanation of how TopoJSON works. See [Command-Line Cartography](https://medium.com/@mbostock/command-line-cartography-part-1-897aa8f8ca2c) for an introduction to TopoJSON and related tools.


[msgpack for topojson](https://nelsonslog.wordpress.com/2012/11/21/msgpack-for-topojson/)  
[TopoJSON Notes, Watershed Boundaries, and HUCs](https://nelsonslog.wordpress.com/2013/02/18/topojson-notes-watershed-boundaries-and-hucs/)  
[More TopoJSON/Watershed Maps](https://nelsonslog.wordpress.com/2013/02/20/more-topojson-watershed-maps/)  
[TopoJSON for Rivers](https://nelsonslog.wordpress.com/2013/05/17/topojson-for-rivers/)  
