# Legend - Highcharts.js  

[Highcharts Legend Chart Object](http://api.highcharts.com/highcharts/legend)  
The Highcharts Legend chart object is a box containing a symbol and name for each series item or point item in the chart. Each series (or points in case of pie charts) is represented by a symbol and its name in the legend.  
It is possible to [override the symbol creator function and create custom legend symbols](http://jsfiddle.net/jalbertbowdenii/ha75rojd/).  

[Highcharts Legend Object](http://api.highcharts.com/highcharts/Legend)  
Each chart only has one; the legend object is available from `chart.legend`.  

[Disable Chart Legend Example](http://www.java2s.com/Tutorials/highcharts/Example/Legend/Disable_chart_legend.htm)  

## Accessing Legend Object(s)  

`jQuery(chart.series).each(function(){
    this.legendSymbol.attr('width',8);
    this.legendSymbol.attr('height',8);
    this.legendSymbol.attr('x',this.legendLine.attr('translateX')-17);
    this.legendSymbol.attr('y',this.legendLine.attr('translateY')-4);
});`


[Highcharts Symbol in Legend](https://stackoverflow.com/questions/10551727/highcharts-symbol-in-legend)
[Demo of predefined, image and custom marker symbols](http://jsfiddle.net/gh/get/jquery/2/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-marker-symbol/)

## linkedTo  
[fiddle](http://jsfiddle.net/hnc27nf2/)  
[Custom Highcharts Legend Symbol](https://stackoverflow.com/questions/36302395/custom-highcharts-legend-symbol)

[Legend Toggle - Highcharts Extension](https://bitbucket.org/jkowalleck/highcharts-legendextension/src)  
HighchartsExtension: LegendToggle
Extension for Highcharts3 and Highstocks1.3 to add the Chart some functions:
legendHide()
legendShow()
legendToggle()
[](http://jsfiddle.net/jalbertbowdenii/u0qcw7sq/)
[](http://jsfiddle.net/jalbertbowdenii/93005ye4/)

[Add/Remove Legend Demo](http://jsfiddle.net/jalbertbowdenii/rw7qpa1p/)  
[Remove Legend Demo](http://jsfiddle.net/jalbertbowdenii/cfueureg/)  


## showInLegend  

[Filtering Legend of a Highcharts by Only Visible Series](https://stackoverflow.com/questions/13600741/filtering-legend-of-a-highcharts-by-only-visible-series)  


