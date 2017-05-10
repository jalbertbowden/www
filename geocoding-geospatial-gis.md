# Geocoding, Geospatial, GIS  

### GPIN - Geographic Parcel Identification Number  
What is a GPIN?  
GPIN is an acronym for Geographic Parcel Identification Number. It is a unique number, composed of the X and Y coordinates of the center of a parcel, resulting in a 15 digit text value for each parcel, including condominiums, which distinctively identifies each parcel. The following is a schematic depicting the format for City of Fredericksburg GPINs:  
[In September, 2012, the City switched from using Tax Map ID to GPIN for the primary parcel identification number.](http://www.fredericksburgva.gov/index.aspx?NID=737)  

# Geocoding  

## [Available Geocoding Software](http://geoservices.tamu.edu/services/geocode/othergeocoders/)  

## [Texas A&M Geoservices Geocoding APIs](https://geoservices.tamu.edu/Services/Geocode/WebService/)  

## [Smarty Streets API (Free for Non-Profits)](https://smartystreets.com/free-address-verification)  
[SmartyStreets Geocoding - Sample Code for Using LiveAddress API as Well as the List Upload and ZIP Code APIs using Various Programming Languages](https://github.com/smartystreets/LiveAddressSamples)  

## Census Geocoding API  

#### Geocoding
The API accepts calls using a geographic FIPS code. These codes are available recursively through the API but if you have an application that produces a geographic coordinate point, here are ways you can convert that to a FIPS code:  
[Census Geocoder and API](http://www.census.gov/geo/maps-data/data/geocoder.html)  
[TIGERWeb Mapping Web Service](http://tigerweb.geo.census.gov/tigerwebmain/tigerweb_main.html)  
[FCC's Census Block Conversions API](http://www.fcc.gov/developer/census-block-conversions-api)  

## [Geocoding Services Web Application Programming Interface (API) 2016-06](https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html)  
[Geocoding Services Web Application Programming Interface (API) 2016-06 (PDF)](https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf)  

# [Census Geocoder](https://geocoding.geo.census.gov/)  
The Census Geocoder provides interactive and programmatic (REST) access to users interested in matching addresses to geographic locations and entities containing those addresses.  
The Census Geocoder is an address look-up tool that converts addresses to approximate coordinates (lat/lon) and returns information about the address range that includes the address and the census geography the address is within. The Census Geocoder is available as a web interface and as an API (Representational State Transfer - REST - web-based-service).

## Census Geocoder Documentation  
The Census Geocoder allows a maximum of 1000 addresses/points to be geocoding per batch.

[Census Geocoder Reference - U.S. Census Bureau](https://www.census.gov/geo/maps-data/data/geocoder.html)  
[Directions for Returning Different Geography in Results (PDF)](https://www2.census.gov/geo/pdfs/maps-data/data/GeocodingURL.pdf)  
[List of Layer Codes for Returning Different Geography in Results]()  

[Census Geocoding Services](http://census.gov/data/developers/data-sets/Geocoding-services.html)  
Data in the Geocoder

The information in the geocoder comes from our MAF/TIGER database, which holds our geographic information used for censuses and surveys. The address ranges used in the geocoder are the same address ranges that can be found in the TIGER/Line Shapefiles which are derived from the Master Address File (MAF).  

When geocoding your address, you need to select a benchmark (time period) and select a vintage of geography. The benchmark is the time period when we created a snapshot of our data (generally done twice a year). For example, Public_AR_Census2010 is the snapshot we took of the database in 2010. Public_AR_Current is the most recent snapshot we took of our dataset. The vintage of geography is the census or survey that the data relates to. For example, Census2010_Census2010 are the address ranges from the 2010 Census at the time of the 2010 Census. You can also obtain the 2010 Census address ranges as of our 2013 benchmark. The vintages you see available depends on the benchmark you selected.  

There are limitations to the address ranges found in our MAF/TIGER database. The address ranges are potential address ranges, not actual address ranges. Potential ranges include the full range of possible structure numbers even though the actual structures might not exist. The majority of the address ranges we have are for residential areas. There are limited address ranges available in commercial areas. Our address ranges are regularly updated with the most current information we have available to us.  

[Layer Code Lists (for Returning Different Geography in Results)](https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer)  



#### [Census Geographic Relationship Files[(https://www.census.gov/data/developers/geography/about-geography.html)  
]
These relationship files are provided as a tool to help data users compare the universe of Census geographies from the 1990, 2000 and 2010 Censuses. From these files, data users may determine how geographies from one Census relate to those from the prior Census.    
[Geographic Relationship Files](http://www.census.gov/geo/maps-data/data/relationship.html)  

#### More on Census Geography  
[US Census Bureau Geographic Entities and Concepts | Geocoding and Census Geographic Relationship Files_104385 (3.4 MB)](https://www.census.gov/content/dam/Census/data/developers/geoareaconcepts.pdf)  

[Understanding “Place” in Census Bureau Data Products|Geocoding and Census Geographic Relationship Files (1.9 MB)](https://www.census.gov/content/dam/Census/data/developers/understandingplace.pdf)




 
[Geocoding and Census Geographic Relationship Files](http://www.census.gov/data/developers/geography/about-geography.html)  


## TIGERweb  
[TIGERweb Geographic Entities](https://tigerweb.geo.census.gov/tigerwebmain/TIGERweb_geography.html)  
[TIGERweb Geographic Descriptions](https://tigerweb.geo.census.gov/tigerwebmain/TIGERweb_geography_details.html)  
[TIGERweb Geographic Attribute Glossary](https://tigerweb.geo.census.gov/tigerwebmain/TIGERweb_attribute_glossary.html)  
[TIGERweb Data Files (County-Based, National-Based, and State-Based)](https://tigerweb.geo.census.gov/tigerwebmain/TIGERweb_nation_based_files.html)  

[TIGERweb REST Services](https://tigerweb.geo.census.gov/tigerwebmain/TIGERweb_restmapservice.html)  


### [Getting Started - Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/start)  


## Map Projections, Coordinates, and Coordinate Systems  

[EPSG.io: Coordinate Systems Worldwide](http://epsg.io/)  
epsg.io is a map projection utility: Find a coordinate system and get position on a map.  
[EPSG.io: Coordinate Systems Worldwide Repository](https://github.com/klokantech/epsg.io)  

Find a spatial reference for most map projections

[UTM Grid Zones of the World](http://www.dmap.co.uk/utmworld.htm)  
[UTM Grid Zones of the World (PDF)](http://www.dmap.co.uk/utmworld.pdf)  

[Transverse Mercator Calculator](http://www.dmap.co.uk/ll2tm.htm)  
A facility for converting latitude/longitude co-ordinates to co-ordinates in metres on a Transverse Mercator projection. An Excel Workbook is also available on this page to carry out bulk conversions.  

[Transverse Mercator Transformation Formulae &#124; Land Information New Zealand (LINZ)](http://www.linz.govt.nz/geodetic/conversion-coordinates/projection-conversions/transverse-mercator-preliminary-computations/index.aspx)  

Transverse Mercator Transformation Formulae can convert Transverse Mercator Projection Coordinates (N,E) to their geographic equivalents and vice versa.  

[Universal Transverse Mercator (UTM) and Military Grid Reference System (MGRS)](http://www.luomus.fi/en/utm-mgrs-atlas-florae-europaeae)  

## Universal Transverse Mercator (UTM)  

    Projection: Transverse Mercator (Gauss-Krüger type) in zones 6° wide.  
    Longitude of Origin: Central meridian (CM) of each projection zone (3°, 9°, 15°, 21°, 27°, 33°, 39°, 45°, 51°, 57°, 63°, 69°, 75°, 81°, 87°, 93°, 99°, 105°, 111°, 117°, 123°, 129°, 135°, 141°, 147°, 153°, 159°, 165°, 171°, 177°, E and W).  
    Latitude of Origin: 0° (the Equator).  
    Unit: Meter.  
    False Northing: 0 meters at the Equator for the Northern Hemisphere; 10,000,000 meters at the Equator for the Southern Hemisphere.  
    False Easting: 500,000 meters at the CM of each zone.  
    Scale Factor at the Central Meridian: 0.9996.  
    Latitude Limits of System: From 80°S to 84°N.  
    Limits of Projection Zones: The zones are bounded by meridians, the longitudes of which are multiples of 6° east and west of the prime meridian.  

Universal Transverse Mercator (UTM) coordinates define two dimensional, horizontal, positions. The sixty UTM zone numbers designate 6 degree wide longitudinal strips extending from 80 degrees South latitude to 84 degrees North latitude. UTM zone characters are letters which designate 8 degree zones extending north and south from the equator. Beginning at 80° south and proceeding northward, twenty bands are lettered C through X, omitting I and O. These bands are all 8° wide except for bond X which is 12° wide (between 72-84 N).  

There are special UTM zones between 0 degrees and 36 degrees longitude above 72 degrees latitude and a special zone 32 between 56 degrees and 64 degrees north latitude:  

    UTM Zone 32 has been widened to 9° (at the expense of zone 31) between latitudes 56° and 64° (band V) to accommodate southwest Norway. Thus zone 32 it extends westwards to 3°E in the North Sea.  
    Similarly, between 72° and 84° (band X), zones 33 and 35 have been widened to 12° to accommodate Svalbard. To compensate for these 12° wide zones, zones 31 and 37 are widened to 9° and zones 32, 34, and 36 are eliminated. Thus the W and E boundaries of zones are 31: 0 - 9 E, 33: 9 - 21 E, 35: 21 - 33 E and 37: 33 - 42 E.  

## Military Grid Reference System (MGRS)  
[MGRS Scheme (XLS)](http://www.luomus.fi/sites/default/files/files/mgrs2.xls)  

The Military Grid Reference System (MGRS) is an extension of the UTM system. UTM zone number and zone character are used to identify an area 6 degrees in east-west extent and 8 degrees in north-south extent. UTM zone number and designator are followed by 100 km square easting and northing identifiers. The system uses a set of alphabetic characters for the 100 km grid squares. Starting at the 180 degree meridian the characters A to Z (omitting I and O) are used for 18 degrees before starting over. From the equator north the characters A to V (omitting I and O) are used for 100 km squares, repeating every 2,000 km. Northing designators normally begin with 'A' at the equator for odd numbered UTM easting zones.  

For even numbered easting zones the northing designators are offset by five characters, starting at the equator with 'F'. South of the equator, the characters continue the pattern set north of the equator. Complicating the system, ellipsoid junctions (spheroid junctions in the terminology of MGRS) require a shift of 10 characters in the northing 100 km grid square designators. Different geodetic datums using different reference ellipsoids use different starting row offset numbers to accomplish this.  

If 10 numeric characters are used, a precision of 1 meter is assumed. 2 characters imply a precision of 10 km. From 2 to 10 numeric characters the precision changes from 10 km, 1 km, 100 m 10 m, to 1 m.  

### MGRS 100,000-meter square identification  

    The 100,000-meter columns, including partial columns along zone, datum, and ellipsoid junctions, are lettered alphabetically, A through Z (with I and O omitted), north and south of the Equator, starting at the 180° meridian and proceeding easterly for 18°. The alphabetical sequence repeats at 18° intervals.  
    To prevent ambiguity of identifications along ellipsoid junctions changes in the order of the row letters are necessary. The row alphabet (second letter) is shifted ten letters. This decreased the maximum distance in which the 100,000-meter square identification is repeated.  
    The 100,000-meter row lettering is based on a 20-letter alphabetical sequence (A through V with I and O omitted). This alphabetical sequence is read from south to north, and repeated at 2,000,000-meter intervals from the Equator.  
    The row letters in each odd numbered 6° grid zone are read in an A through V sequence from south to north.  
    In each even-numbered 6° grid zone, the some lettering sequence is advanced five letters to F, continued sequentially through V and followed by A through V.  
    The advancement or staggering of row letters for the even-numbered zones lengthens the distance between 100,000-meter squares of the same identification.  
    Deviations from the preceding rules were mode in the past. These deviations were an attempt to provide unique grid references within a complicated and disparate world-wide mapping system.  
    Determination of 100,000-meter grid square identification is further complicated by the use of different ellipsoids.  

### The Military Grid Reference  

The MGRS coordinate for a position consists of a group of letters and numbers which include the following elements:  

    The Grid Zone Designation.  
    The 100,000-meter square letter identification.  
    The grid coordinates (also referred to as rectangular coordinates); the numerical portion of the reference expressed to a desired refinement.  
    A reference is written as an entity without spaces, parentheses, dashes, or decimal points.  
  
Examples:  
  
    18S (Locating a point within the Grid Zone Designation)  
    18SUU (Locating a point within a 100,000-meter square)  
    18SUU80 (Locating a point within a 10,000-meter square)  
    18SUU8401 (Locating a point within a 1,000-meter square)  
    18SUU836014 (Locating a point within a 100-meter square)  

To satisfy special needs, a reference can be given to a 10-meter square and a 1-meter square as follows:  

    18SUU83630143 (Locating a point within a 10-meter square)  
    18SUU8362601432 (Locating a point within a 1-meter square)  

[Coordinate Systems Overiew](http://www.colorado.edu/geography/gcraft/notes/coordsys/coordsys_f.html)  
[Datums, Ellipsoids, Grids, and Grid Reference Systems DMA Technical Manual 8358.1](http://earth-info.nga.mil/GandG/publications/tm8358.1/toc.html)  



Concise overview and map of Global Universe Transverse Mercator (UTM) Zones
[Map Projections and Coordinate Systems](http://maps.unomaha.edu/Peterson/gis/notes/MapProjCoord.html)  

["Geocoding" Tag Open Data Stack Overflow Search](http://opendata.stackexchange.com/questions/tagged/geocoding)  




