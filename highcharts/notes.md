Highcharts

[creating a highchart plugin that adds vertical lines from data points to x-axis]
http://codeinjs.blogspot.com/2013/07/creating-highchart-plugin-that-adds.html
[Highcharts jquery graphing library example with dynamic json data source]
https://jonathanmanning.com/2012/10/31/highcharts-jquery-graphing-library-example-with-json-data-source/
http://tutsnare.com/onclick-open-new-chart-highcharts/
http://tutsnare.com/demo/highchart.html


[Toggle Anything](http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/members/series-update/)  



## URLs/Code  
[Highcharts-cheatsheet.js](https://gist.github.com/LeCoupa/bbcc8ab7807b9eea1d67)
https://gist.githubusercontent.com/LeCoupa/bbcc8ab7807b9eea1d67/raw/d2af6334262f6b1cd625dc4a6fafda7bc79816fb/1-highcharts-cheatsheet.js
https://gist.githubusercontent.com/LeCoupa/bbcc8ab7807b9eea1d67/raw/d2af6334262f6b1cd625dc4a6fafda7bc79816fb/2-highcharts-cheatsheet.js
https://gist.githubusercontent.com/LeCoupa/bbcc8ab7807b9eea1d67/raw/d2af6334262f6b1cd625dc4a6fafda7bc79816fb/3-highcharts-cheatsheet.js
[Highcharts Code](https://code.highcharts.com/)  
[data.json](https://code.highcharts.com/modules/data.js)  
[JSONP Callback](https://www.highcharts.com/samples/data/jsonp.php?filename=analytics.csv&callback=jQuery21308746522116422886_1497658380841&_=1497658380842)  
[highcharts.js](https://code.highcharts.com/highcharts.js)  
[highcharts-more.js](https://code.highcharts.com/highcharts-more.js)  
ALL PRODUCTS - STYLE BY CSS
If you are styling your charts using CSS, load the javascript files from the /js/ directory. For these files, presentational code is removed, and CSS is required to style the chart.  
The default Highcharts CSS stylesheet can be downloaded from /css/highcharts.css.  
[highcharts.css](https://code.highcharts.com/css/highcharts.css)  
[highcharts.js](https://code.highcharts.com/js/highcharts.js)  
[highcharts.src.js](https://code.highcharts.com/js/highcharts.src.js)  
[highcharts-more.js](https://code.highcharts.com/js/highcharts-more.js)  
[highstock.js](https://code.highcharts.com/stock/js/highstock.js)  
[map.js](https://code.highcharts.com/maps/js/modules/map.js)  
[https://code.highcharts.com/5.0.0/css/highcharts.css](https://code.highcharts.com/5.0.0/css/highcharts.css)  
[https://code.highcharts.com/5/js/highcharts.js](https://code.highcharts.com/5/js/highcharts.js)  



## addSeries

addSeries accept redraw as second parameter.
So you can call it with it set to false and then the last one as true, which is the default.

var series = [ series1, series2, series3, series4 ],
    i = 0;

for( ; i < 4; i++ ) {
    chart.addSeries( series[i], false );
}

chart.addSeries(series5);
You can do the same to remove:

while( chart.series.length > 1 ){
    chart.series[0].remove( false );
}

chart.series[0].remove();
https://stackoverflow.com/questions/19669869/how-to-add-multiple-series-in-highcharts-synchronously

Zones
[Color Zones](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/series/color-zones-simple/)
[Zones on XAxis](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/series/color-zones-zoneaxis-x/)
[Animation Demo](http://jsfiddle.net/jalbertbowdenii/066pnmfc/)
[Loading Demo](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/loading/hideduration/)
[Adding and removing classes from svg elements with jQuery](https://martinwolf.org/blog/2014/12/adding-and-removing-classes-from-svg-elements-with-jquery)


## Tooltips
[Fixed Tooltip Highlighter](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/tooltip/positioner/)  

http://jsfiddle.net/e4HCn/2/
https://stackoverflow.com/questions/19656043/highcharts-change-datalabel-option-inside-by-function
http://jsfiddle.net/highcharts/YDWQC/
http://www.java2s.com/Tutorials/highcharts/Example/Axis/Add_two_y_axis_in_opposite_sides_with_different_text.htm
http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/tickpositions-tickpositioner/

tickPositions[lastPoint]
http://jsfiddle.net/jlbriggs/zXLZA/4/
https://codepen.io/jalbertbowden/pen/LLRMdY
http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/chart-addseries/
http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/chart-addaxis/


[http://jsfiddle.net/jalbertbowdenii/1kfhtwko/](http://jsfiddle.net/jalbertbowdenii/1kfhtwko/)
http://jsfiddle.net/jalbertbowdenii/1j6n41k0/
[https://codepen.io/jalbertbowden/pen/LLRMdY](https://codepen.io/jalbertbowden/pen/LLRMdY)  
[http://jsfiddle.net/jlbriggs/zXLZA/](http://jsfiddle.net/jlbriggs/zXLZA/)  
[http://jsfiddle.net/jlbriggs/zXLZA/4/](http://jsfiddle.net/jlbriggs/zXLZA/4/)  
[http://jsfiddle.net/jalbertbowdenii/th9x43k4/](http://jsfiddle.net/jalbertbowdenii/th9x43k4/)  
[Add two y axis in opposite sides with different text](http://www.java2s.com/Tutorials/highcharts/Example/Axis/Add_two_y_axis_in_opposite_sides_with_different_text.htm)  
[http://www.java2s.com/Tutorials/highchartsDemo/a/add_two_y_axis_in_opposite_sides_with_different_text_example.htm](http://www.java2s.com/Tutorials/highchartsDemo/a/add_two_y_axis_in_opposite_sides_with_different_text_example.htm)  
[Highcharts XAxis Tick](http://www.java2s.com/Tutorials/highcharts/Example/Axis_Tick/highcharts_Axis_Tick.htm)  
[Add/Remove Axis/Series](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/chart-addaxis/)  
[Click to View Full Page](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/chart/events-container/)  
[Set Dash Style with CSS](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/series-dashstyle/)  
[DataLabels Formatter Getting X,Y Points for Repositioning](https://stackoverflow.com/questions/7556473/is-it-possible-to-position-highcharts-datalabels-depending-on-the-value)  
[]()  
[]()  
[]()  
[]()  










http://jsfiddle.net/Nishith/6xLaxL0e/1/
http://jsfiddle.net/jalbertbowdenii/ooh5580w/
https://stackoverflow.com/questions/15123163/missing-value-in-highcharts-line-graph-results-in-no-line-just-points/15123478#15123478
http://jsfiddle.net/asf52ft8/
http://jsfiddle.net/ue0wb8w0/1/
http://jsfiddle.net/jalbertbowdenii/ym4487hj/
https://stackoverflow.com/questions/37815413/highcharts-disconnect-line-when-theres-no-data-for-position?rq=1
http://jsfiddle.net/jalbertbowdenii/swt3sdqL/
https://stackoverflow.com/questions/36910003/highcharts-connectnulls-with-dotted-line
http://jsfiddle.net/p5owoxho/
http://jsfiddle.net/jalbertbowdenii/4bofLpof/
http://jsfiddle.net/n2d1362L/
http://jsfiddle.net/mtg6bd0o/3/
http://jsfiddle.net/jalbertbowdenii/5y9vrax5/
http://jsfiddle.net/AkyRhO/7aqhx8ac/


Points
this.point.index, it's the zero based index of the point in the data list so it's also good for datetime axes (where this.point.x

https://stackoverflow.com/questions/8507673/how-to-get-index-of-a-point-in-highcharts?rq=1

This worked for me using v2.2:

this.series.data.indexOf( this.point )


this.points[0].point.x


this.xData.indexOf(point.x)

this.points will be grouped in larger series so would need a deeper search through points[0]...points[n].


This is all that worked for me on Highstock JS v4.2.4:

var index = this.points[0].point.dataGroup.start;
http://jsfiddle.net/HzYtV/
http://jsfiddle.net/SQkMW/69/
http://jsfiddle.net/jalbertbowdenii/uy541y33/
http://jsfiddle.net/jalbertbowdenii/s5vrLLgf/
http://jsfiddle.net/aLFRG/





# tickPositioner  

demo
https://jsfiddle.net/hpeq7Lbe/9/
[How to Add Class Name to tickPositioner in Highcharts](https://stackoverflow.com/questions/40462308/how-to-add-class-name-to-tickpositioner-in-highcharts)



dashstyles
http://www.java2s.com/Tutorials/highchartsDemo/c/compare_various_dash_styles_example.htm
http://www.java2s.com/Tutorials/highcharts/Example/Chart/Compare_various_dash_styles.htm

[Get Selected Points Values](http://jsfiddle.net/jalbertbowdenii/vtuf55dt/)  

## JSON  
[How to Pass JSON Data to Highcharts Series?](https://stackoverflow.com/questions/29643609/how-to-pass-json-data-to-highcharts-series)  
[Highcharts with JSON Data and Multiple Series](https://stackoverflow.com/questions/15666557/highcharts-with-json-data-and-multiple-series)  

## Series  
[Get Highcharts Series Data After Load](https://stackoverflow.com/questions/18840397/get-highcharts-series-data-after-load)  

[Configuring HighCharts in Service Portal - Not Ideal Without License, but Good Object Approach Overview](https://codecreative.io/servicenow/configuring-highcharts-in-service-portal)
[Implement own state - INACTIVE_STATE?](https://forum.highcharts.com/viewtopic.php?f=9&t=10262)  
[Demo - Inactive/Active States](http://jsfiddle.net/jalbertbowdenii/7wfd12nx/)



## Halo Options  
[Halo Options Highcharts Demo](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/halo/)  

## Labels  
[How to Position Axis Label in Highcharts](https://stackoverflow.com/questions/21442679/how-to-position-axis-label-in-highcharts?rq=1)  
[HighCharts - How to Align (Justify) xAxis Labels Left and Right](https://stackoverflow.com/questions/12538593/highcharts-how-to-align-justify-xaxis-labels-left-and-right?rq=1)  
[Demo Source - Move x-axis labels in between major ticks](http://www.telerik.com/forums/move-x-axis-labels-in-between-major-ticks)  

##  :hover - Hover Effects  

[Series: States: Hover: ](http://jsfiddle.net/jalbertbowdenii/vod2pufn/)


[Highcharts Cheat Sheet](https://gist.github.com/mulhoon/63b5d5a98ef0ab8c2b89)

## Plot Bands  
[mouseenter/mouseover/mouseon/mouseoff Events on a Plot Band](http://jsfiddle.net/jalbertbowdenii/5m43w2n7/)
[Label Rotated Demo](http://jsfiddle.net/jalbertbowdenii/oqcmttfg/)

[Color Zones](http://jsfiddle.net/jalbertbowdenii/ney7x3vf/)  
[Styled Color Zones](http://jsfiddle.net/jalbertbowdenii/sff05opn/)  
[XAxis Styled Color Zones](http://jsfiddle.net/jalbertbowdenii/cqw564ph/)  
[Label Aligned Demo](http://jsfiddle.net/jalbertbowdenii/qb3t2gn7/)
[Label Rotation Demo](http://jsfiddle.net/jalbertbowdenii/gxeh87y2/)

[Show Last Label Highcharts Demo](http://jsfiddle.net/jalbertbowdenii/j58cso09/)  
[point placement 1 Highcharts Demo](http://jsfiddle.net/jalbertbowdenii/m62gLg9h/)  
[point placement 2 Highcharts Demo](http://jsfiddle.net/jalbertbowdenii/krb6szhj/)  
[series using pointStart and pointInterval Highcharts Demo](http://jsfiddle.net/jalbertbowdenii/6bq1jbxd/)  
[Plot Bands - xaxis label align Highcharts Demo](http://jsfiddle.net/jalbertbowdenii/drw2344e/)  
[Plot Bands - xaxis label align Alternative - Highcharts Demo](http://jsfiddle.net/jalbertbowdenii/24sdawor/1/)  

[Understanding text alignment](http://jsfiddle.net/jalbertbowdenii/6w11ykfk/)
Drag the slider to see how labels are aligned to boxes, lines and points. Notice that a left aligned text will actually draw to the right of the line or point that it is aligned to.


[http://jsfiddle.net/jalbertbowdenii/LLExL/7621/](http://jsfiddle.net/jalbertbowdenii/LLExL/7621/)