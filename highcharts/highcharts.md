# HighCharts  

## [Notes](notes.md)  

## [Examples & Inspiration](examples.md)  

## Documentation and References

### Highcharts Line Graphs

[Line Chart HighChart Docs](http://www.highcharts.com/docs/chart-and-series-types/line-chart)

### Predefined Colors for Series Defined in an Array  
colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#91e8e1']  


[Data Visualization: How to Overcome Highcharts.js Drawbacks](http://cases.azoft.com/data-visualization-highcharts/)  

## Rewriting `Highcharts.getSVG()` Function  
Additional text in the generated charts  
There's an awesome online example of custom chart retrieval using the highcharts.com server. It is implemented in the functions [`Highcharts.getSVG` and `Highcharts.exportCharts`](http://jsfiddle.net/highcharts/gd7bB/1/). To add the additional text to the left or to the right of the chart rewrite the `Highcharts.getSVG` function as follows:  
Highcharts.getSVG = function(charts) {
  	 var svgArr = [], top = 0, width = 0;
  	 var lines = '';
  	 $.each(charts, function(i, chart) {  
  		 chart.options.chart.backgroundColor = {
  			 linearGradient: [0, 0, 0, 300],
  			 stops: [
  				 [0, '#FFFFFF'],
  				 [1, '#E0E0E0']
  			 ]
  		 };

  		 chart.options.chart.plotBackgroundColor = {
  			 linearGradient: [0, 0, 0, 300],
  			 stops: [
  				 [0, '#FFFFFF'],
  				 [1, '#E0E0E0']
  			 ]
  		 };

  		 var svg = chart.getSVG();
  		 svg = svg.replace('<svg', '<g transform="translate(0,' + top + ')" ');
  		 top += parseInt(chart.chartHeight) + 20;
  		 svg = svg.replace('</svg>', '</g>');
  		 lines += '<path stroke-width="1" stroke="#C0C0C0" d="M 0 ' + top + ' L 380 ' + top + '" fill="none"></path>';
  		 width = Math.max(width, chart.chartWidth);
  		 svgArr.push(svg);
  	 });
  	 width = 828; // exported file width
  	 top = parseInt($(document).height()); // find out the size of the exported document
  	 var topMarg = 40; // initial top margin
  	 var texts = '';
  	 var paragraphes = $(document).find('p'); // get all the paragraphs to add to the exported document
  	 for( var i = 0, l = paragraphes.length; i < l; i++ ) {
  		 texts += '<g>' + setTSpan($(paragraphes[i]).html(), topMarg, 18) + '</g>'; // render text in SVG
  		 topMarg += getTSpanHeight($(paragraphes[i]).html(), 1, 18) + 14; // calculate the margin for the next paragraph
  	 }
  	 top += 20;
  	 return '<svg height="'+ top +'" width="' + width + '" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><g>' + texts + '</g><g transform="translate(‘ + width/2 + ’, 20)">' + svgArr.join('') + '<g>' + lines + '</g></g></g></svg>';
}
/*
str — text to display,
start — initial rendering position,
charNum — number of characters per line,
fontSize — font size,
number — total number of lines in the text
*/
function setTSpan(str, start, charNum, fontSize) {
  if( str.length > charNum ) {
  	 var index = charNum,
new_str = str.substring(0, index);
  	 if( str[56] !== ' ' ) {
  		 index = new_str.lastIndexOf(' ');
  		 new_str = new_str.substring(0, index);
  	 }
  	 return '<text x="65" y="' + start +'" text-anchor="start" text-align="justify">' + new_str + '</text>' + setTSpan(str.substring(index), start + fontSize);
  }
  return '<text x="65" y="' + start + '">' + str + '</text>';
}

function getTSpanHeight(str, number, charNum, fontSize) {
  if( str.length > charNum) {
  	 var index = charNum;
  	 var new_str = str.substring(0, index);
  	 if( str[charNum + 1] !== ' ' ) {
  		 index = new_str.lastIndexOf(' ');
  		 new_str = new_str.substring(0, index);
  	 }
  	 return fontSize + getTSpanHeight(str.substring(index), number+1, charNum, fontSize);
  }
  return fontSize;
 }
/* weird */

[Highcharts Themes Collection](http://jkunst.com/highcharts-themes-collection/)  
[Modern Themes for Highcharts](http://appcues.github.io/highcharts-themes/)  
[Highcharts Plugins](https://www.highcharts.com/plugin-registry/plugins)  
[Highcharts Cloud - Visual Editor and Hosting Platform](https://cloud.highcharts.com/)  
[Attach a Click Event on a Highcharts Series Crosshair](https://maximelafarie.com/click-event-on-highcharts-series-crosshair)  
[Mouse Events Demo - On Point Mouse Over or Mouse Out Event, Mouse Values Are Displayed](http://jsfiddle.net/jalbertbowdenii/wucbbmb5/)  
[Highcharts Legend Highlighter](http://sidnet.github.io/highcharts-legend-highlighter/)  
[Grouped Categories - Highcharts Module](https://www.highcharts.com/plugin-registry/single/11/Grouped-Categories)  
[Themes for Highcharts - Appcues](http://appcues.github.io/highcharts-themes/#)  
[themes.js via Appcues](https://github.com/appcues/highcharts-themes/blob/master/dist/highcharts-themes.js)  
[highcharts-themes - Super Slick themes for Highcharts](https://github.com/appcues/highcharts-themes)  
[gray.js - Highcharts Theme Gist](https://gist.github.com/johndharrison/bc1440afad69433f5e61)  
[Highcharts Uservoice](https://highcharts.uservoice.com/forums/55896-highcharts-javascript-api)  
[Highcharts - Quick Guide - Interesting Examples Here...](https://www.tutorialspoint.com/highcharts/highcharts_quick_guide.htm)  

