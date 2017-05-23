# GeoJSON File Format

# [GeoJSON](http://geojson.org/)  
GeoJSON is a format for encoding a variety of geographic data structures.  

  <figure class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="p">{</span>
  <span class="s2">"type"</span><span class="err">:</span> <span class="s2">"Feature"</span><span class="p">,</span>
  <span class="s2">"geometry"</span><span class="err">:</span> <span class="p">{</span>
    <span class="s2">"type"</span><span class="err">:</span> <span class="s2">"Point"</span><span class="p">,</span>
    <span class="s2">"coordinates"</span><span class="err">:</span> <span class="p">[</span><span class="mf">125.6</span><span class="p">,</span> <span class="mf">10.1</span><span class="p">]</span>
  <span class="p">},</span>
  <span class="s2">"properties"</span><span class="err">:</span> <span class="p">{</span>
    <span class="s2">"name"</span><span class="err">:</span> <span class="s2">"Dinagat Islands"</span>
  <span class="p">}</span>
<span class="p">}</span></pre></figure>  

GeoJSON supports the following geometry types: Point, LineString, Polygon, MultiPoint, MultiLineString, and MultiPolygon. Geometric objects with additional properties are Feature objects. Sets of features are contained by FeatureCollection objects.  

## [The GeoJSON Specification (RFC 7946)](https://tools.ietf.org/html/rfc7946)
In 2015, the Internet Engineering Task Force (IETF), in conjunction with the original specification authors, formed a [GeoJSON WG](https://datatracker.ietf.org/wg/geojson/charter/) to standardize GeoJSON. [RFC 7946](https://tools.ietf.org/html/rfc7946) was published in August 2016 and is the new standard specification of the GeoJSON format, replacing the 2008 GeoJSON specification.  


[GeoJSON Format Summary](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)  
GeoJSON is a format for encoding a variety of geographic data structures. A GeoJSON object may represent a geometry, a feature, or a collection of features. GeoJSON uses the [JSON standard](http://www.json.org/). The GeoJSONP feed uses the same JSON response, but the GeoJSONP response is wrapped inside the function call, eqfeed_callback. 


Usage
GeoJSON is intended to be used as a programatic interface for applications.

Output
{
  type: "FeatureCollection",
  metadata: {
    generated: Long Integer,
    url: String,
    title: String,
    api: String,
    count: Integer,
    status: Integer
  },
  bbox: [
    minimum longitude,
    minimum latitude,
    minimum depth,
    maximum longitude,
    maximum latitude,
    maximum depth
  ],
  features: [
    {
      type: "Feature",
      properties: {
        mag: Decimal,
        place: String,
        time: Long Integer,
        updated: Long Integer,
        tz: Integer,
        url: String,
        detail: String,
        felt:Integer,
        cdi: Decimal,
        mmi: Decimal,
        alert: String,
        status: String,
        tsunami: Integer,
        sig:Integer,
        net: String,
        code: String,
        ids: String,
        sources: String,
        types: String,
        nst: Integer,
        dmin: Decimal,
        rms: Decimal,
        gap: Decimal,
        magType: String,
        type: String
      },
      geometry: {
        type: "Point",
        coordinates: [
          longitude,
          latitude,
          depth
        ]
      },
      id: String
    },
    …
  ]
}



https://macwright.org/2015/03/23/geojson-second-bite.html