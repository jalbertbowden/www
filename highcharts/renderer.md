# [Renderer - Highcharts](http://api.highcharts.com/highcharts/Renderer)  

Allows direct access to the Highcharts rendering layer in order to draw primitive shapes like circles, rectangles,paths or text directly on a chart, or independent from any chart. The Renderer represents a wrapper object for SVGin modern browsers and VML in IE < 8.  
An existing chart's renderer can be accessed through chart.renderer. To create a renderer independent from a chart, use var renderer = new Highcharts.Renderer(parentNode, width, height); where parentNode is the HTML element where you want to add it.  
The Renderer's methods are chained wherever possible, so you can initiate an element then call for example attr and css and add on that element in one statement.  



[Renderer.rect Documentation](http://api.highcharts.com/highcharts/Renderer.rect)  

[http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/renderer-rect/](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/renderer-rect/)  
[Renderer - Rect on Chart](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/renderer-rect-on-chart/)