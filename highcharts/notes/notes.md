[Line, Area, and Scatter Charts](https://www.packtpub.com/books/content/line-area-and-scatter-charts)  

Highcharts.createElement() Utility Method
The Highcharts.createElement() Utility Method takes five arguments:
1. the name of the element being created
2. an object of element attributes
3. css styles to be applied to the element (in below example, we pass `null` because link elements typically are not styled (or displayed for that matter))
4. Parent Node
5. Padding

Highcharts.createElement( 'link', {
  href: 'http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,400,300,700',
  rel: 'stylesheet',
  type: 'text/css'
}, null, document.getElementsByTagName( 'head')[0], null);

From the above example, we still need to declare the default font family of the chart, in order to be able to use it. Like so:

chart: {
  ...
  style: {
    fontFamily: "'Open Sans', sans-serif"
  }
}

[Demo Using Highcharts.createElement() Utility Method to Inject HTML Elements into a HighCharts Visualization](http://jsfiddle.net/jalbertbowdenii/LbLews6h/)

## Overview of Highcharts API and Class Model

A Highcharts chart is composed of five different classes: `Chart`, `Axis`, `Series`, `Point`, and `Renderer`. Each object has methods to accomplish different tasks and properties that contain vital information about said object. They also contain properties to reference back to higher-level objects, allowing access to properties and methods of other objects. Each class object has properties to transverse through the object hierarchy.
Each Class's purpose is listed as follows:
`Chart`:
`Axis`:
`Series`:
`Point`:
`Renderer`:

Note: apart from these Classes, an `Element` class is used in combination with the `Renderer` class to render SVG elements.
Then, there is the `Highcharts` namespace, under which some API functions and variables are assembled.


## Example Callback Function - Executes After Chart Initialization
(function() {
  jQuery('#container').highcharts({
    title: {
      text: 'Fuel Consumption by Type for the Year 2012'
    },
    xAxis: {
      ...
    },
    yAxis: {
      ...
    },
    plotOptions: {
      ...
    },
    tooltip: {
      ...
    },
    series: [
      ...
    ]
  }, function () {
      console.log( this );
  });
})();

In the above Callback Function, `this` keyword refers to the top-level `chart` object; by logging `this` variable we are executing the contents of the `chart` object.




Rendering Polygons in Highcharts
[This examples renders polygons in Highcharts to fake/mimic Plot Bands along the X-Axis](http://jsfiddle.net/jalbertbowdenii/sk63d1p7/)  


## Plotbands  

[Plot Bands and Plot Lines](https://www.highcharts.com/docs/chart-concepts/plot-bands-and-plot-lines)  

[Remove Plotband](http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/xaxis/plotbands-id/)  
[Plot Band Width Demo - Resize Window to See Change](http://jsfiddle.net/jalbertbowdenii/fdTEx/6607/)  
[Plot Bands Events](http://jsfiddle.net/jalbertbowdenii/wrp016jk/)
[Add/Remove Plot Bands](http://jsfiddle.net/jalbertbowdenii/bvy3h6gs/)
