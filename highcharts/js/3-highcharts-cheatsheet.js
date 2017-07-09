// Highcharts CheatSheet Part 3.
// Create interactive charts easily for your web projects.
// Download: http://www.highcharts.com/download
// More: http://api.highcharts.com/highcharts


// 4. Methods and Properties.
// http://api.highcharts.com/highcharts


var chart = new Highcharts.Chart(options);  // This is the constructor for creating a new chart object.


// 4.1. Chart.
// http://api.highcharts.com/highcharts#Chart


chart.container;  // A reference to the containing HTML element as given in chart.renderTo.
chart.options;    // The options stucture for the chart.
chart.series;     // An array of all the chart's series.
chart.xAxis;      // An array of the chart's x axes. If only one x axis, it is referenced by chart.xAxis[0].
chart.yAxis;      // An array of the chart's y axes. If only one y axis, it is referenced by chart.yAxis[0].

chart.addAxis(Object options, [Boolean isX], [Boolean redraw], [Mixed animation]){ };  // Add an axis to the chart after render time. Note that this method should never be used when adding data synchronously at chart render time, as it adds expense to the calculations and rendering. When adding data at the same time as the chart is initiated, add the axis as a configuration option instead.
chart.addSeries(Object options, [Boolean redraw], [Mixed animation]){ };               // Add a series to the chart after render time. Note that this method should never be used when adding data synchronously at chart render time, as it adds expense to the calculations and rendering. When adding data at the same time as the chart is initiated, add the series as a configuration option instead.
chart.addSeriesAsDrilldown(Object point, Object seriesOptions){ };                     // Add a series to the chart as drilldown from a specific point in the parent series. This method is used for async drilldown, when clicking a point in a series should result in loading and displaying a more high-resolution series. When not async, the setup is simpler using the drilldown.series options structure.
chart.destroy(){ };                                                                    // Removes the chart and purges memory. This method should be called beforewriting a new chart into the same container. It is called internally on window unloadto prevent leaks.
chart.drillUp(){ };                                                                    // When the chart is drilled down to a child series, calling chart.drillUp() will drill up to the parent series.
chart.exportChart(Object options, Object chartOptions){ };                             // Exporting module required. Submit an SVG version of the chart to a serveralong with some parameters for conversion.
chart.get(String id){ };                    // Get an axis, series or point by its id as given in the configuration options.
chart.getSVG(Object additionalOptions){ };  // Exporting module required. Get an SVG string representing the chart.
chart.getSelectedPoints(){ };               // Returns an array of all currently selected points in the chart. Points can be selected either programmatically by the point.select() method or by clicking.
chart.getSelectedSeries(){ };               // Returns an array of all currently selected series in the chart. Series can be selected either programmatically by the series.select() method or by checking the checkboxnext to the legend item if series.showCheckBox is true.
chart.hideLoading(){ };                     // Hide the loading screen. Options for the loadingscreen are defined at options.loading.
chart.print(){ };                           // Exporting module required. Clears away other elements in the page and printsthe chart as it is displayed. By default, when the exporting module is enabled,a button at the upper left calls this method.
chart.redraw(){ };                          // Redraw the chart after changes have been done to the data or axis extremes. All methods for updating axes, series or points have a parameter for redrawing the chart. This is true by default. But in many cases you want to do more than one operation on the chart before redrawing, for example add a number of points. In those cases it is a waste of resources to redraw the chart for each new point added. So you add the points and call chart.redraw() after.
chart.reflow(){ };                          // Reflows the chart to its container. By default, the chart reflows automatically to its container following a window.resize event, as per the chart.reflow option. However, there are no reliable events for div resize, so if the container is resized without a window resize event, this must be called explicitly.
chart.setSize(Number width, Number height, [Mixed animation]){ };  // Resize the chart to a given width and height.
chart.setTitle(Object title, object subtitle, Boolean redraw){ };  // Set a new title or subtitle for the chart
chart.showLoading(String str){ };                                  // Dim the chart's plot area and show a loading label text. Options for the loadingscreen are defined at options.loading. A customtext can be given as a parameter for loading.


// 4.2. Axis.
// http://api.highcharts.com/highcharts#Axis


chart.xAxis.addPlotBand(Object options){ };   // Add a plot band after render time.
chart.xAxis.addPlotLine (Object options){ };  // Add a plot line after render time.
chart.xAxis.getExtremes(){ };                 // Get the current extremes for the axis.
chart.xAxis.remove(Boolean redraw){ };        // Remove an axis from the chart.
chart.xAxis.removePlotBand(String id){ };     // Remove a plot band by its id.
chart.xAxis.removePlotLine(String id){ };     // Remove a plot line by its id.
chart.xAxis.setCategories(Array cateories, [Boolean redraw]){ };                          // Set new categories for the axis.
chart.xAxis.setExtremes(Number min, Number max, [Boolean redraw], [Mixed animation]){ };  // Set the minimum and maximum of the axes after render time. If the startOnTick and endOnTick options are true, the minimum and maximum values are rounded off to the nearest tick. To prevent this, these options can be set to false before calling setExtremes..
chart.xAxis.setTitle(Object title, [Boolean redraw]){ };                                  // Update the title of the axis after render time.
chart.xAxis.toPixels(Number value, [Boolean paneCoordinates]){ };                         // Translates a value in terms of axis units in to pixels within the chart.
chart.xAxis.toValue(Number pixel, [Boolean paneCoordinates]){ };                          // Translate a pixel position along the axis to a value in terms of axis units.
chart.xAxis.update(Object options, [Boolean redraw]){ };                                  // Update an axis object with a new set of options. The options are merged with the existing options, so only new or altered options need to be specified.


// 4.3. Element.
// http://api.highcharts.com/highcharts#Element


chart.renderer.add([(Object parent)]){ };                          // Add the element to the renderer canvas.
chart.renderer.animate(Object attributes[, Object animation]){ };  // Apply numeric attributes to the SVG/VML element by animation. See Element.attr() for more information on setting attributes.
chart.renderer.attr(Object hash){ };                               // Apply attributes to the SVG/VML elements. These attributes for the most parts correspondto SVG, but some are specific to Highcharts, like zIndex and rotation.
chart.renderer.css(Object hash){ };                                // Apply some CSS properties to the element.
chart.renderer.destroy(){ };                                       // Destroy the element and free up memory.
chart.renderer.getBBox(){ };                                       // Get the bounding box of the element.
chart.renderer.on(String eventType, Function handler){ };          // Apply an event handler to the element.
chart.renderer.toFront(){ };                                       // Bring the element to the front. Alternatively, a zIndex attribute can be given.


// 4.4. Highcharts.
// http://api.highcharts.com/highcharts#Highcharts


Highcharts.charts;       // An array containing the current chart objects in the page. A chart's position in the array is preserved throughout the page's lifetime. When a chart is destroyed, the array item becomes undefined.
Highcharts.dateFormats;  // A hook for defining additional date format specifiers. New specifiers are defined as key-value pairs by using the specifier as key, and a function which takes the timestamp as value. This function returns the formatted portion of the date.

Highcharts.dateFormat(String format, [Number time], [Boolean capitalize]){ };  // Formats a JavaScript date timestamp (milliseconds since Jan 1st 1970) into a human readable date string. The format is a subset of the formats for PHP's strftime function. Additional formats can be given in the Highcharts.dateFormats hook, see below.
Highcharts.numberFormat(Number number, [Number decimals], [String decimalPoint], [String thousandsSep]){ };  // Formats a JavaScript number with grouped thousands, a fixed amount of decimals and an optional decimal point. It is a port of PHP's function with the same name. See PHP number_format for a full explanation of the parameters.
Highcharts.setOptions(Object options){ };  // Sets the options globally for all charts created after this has been called. Takes an options JavaScript object structure as the argument. These options are merged with the default options and the result is returned.


// 4.5. Point.
// http://api.highcharts.com/highcharts#Point


chart.series[i].data[j].category;    // For categorized axes this property holds the category name for the point. For otheraxis it holds the x value.
chart.series[i].data[j].percentage;  // The percentage for points in a stacked series or pies.
chart.series[i].data[j].selected;    // Whether the point is selected or not.
chart.series[i].data[j].series;      // The series object associated with the point.
chart.series[i].data[j].x;           // The x value for the point.
chart.series[i].data[j].y;           // The y value for the point.

chart.series[i].data[j].remove([Boolean redraw], [Mixed animation]){ };     // Remove the point from the series.
chart.series[i].data[j].select([Boolean select], [Boolean accumulate]){ };  // Select or unselect the point.
chart.series[i].data[j].slice([Boolean sliced], [Boolean redraw], [Mixed animation]){ };  // Slice out or set back in a pie chart slice. This is the default wayof Highcharts to visualize that a pie point is selected..
chart.series[i].data[j].update([Mixed options], [Boolean redraw], [Mixed animation]){ };  // Update the point with new values.


// 4.6. Renderer.
// http://api.highcharts.com/highcharts#Renderer


chart.renderer.arc(Number centerX, Number centerY, Number outerRadius, Number innerRadius, Number start, Number end){ };  // Draw an arc on the renderer canvas.
chart.renderer.circle(Number centerX, Number centerY, Number radius){ };  // Draw circle on the renderer canvas.
chart.renderer.g(String name){ };  // Add an SVG/VML group.
chart.renderer.image(String source, Number x, Number y, Number width, Number height){ };  // Add an image from an external resource.
chart.renderer.path(Array path){ };  // Add a path based on SVG's path commands. In SVG capable browsers all path commands are supported, but in VML only a subset is supported: absolute moveTo (M), absolute lineTo (L), absolute curveTo (C) and close (Z).
chart.renderer.rect(Number x, Number y, Number width, Number height, Number cornerRadius){ };  // Add a rectangle.
chart.renderer.text(String str, Number x, Number y){ };  // Draw text. The text can contain a subset of HTML, like spans and anchors and some basic text stylingof these.


// 4.7. Series.
// http://api.highcharts.com/highcharts#Series


chart.series[i].chart;     // Read only. The chart that the series belongs to.
chart.series[i].data;      // Read only. An array with the series' data point objects.
chart.series[i].name;      // The series' name as given in the options.
chart.series[i].options;   // Read only. The series' options.
chart.series[i].selected;  // Read only. The series' selected state as set by series.select().
chart.series[i].type;      // Read only. The series' type, like "line", "area" etc.
chart.series[i].visible;   // Read only. The series' visibility state as set by series.show(), series.hide(), or the initial configuration.
chart.series[i].xAxis;     // Read only. The unique yAxis object associated with the series.
chart.series[i].yAxis;     // Read only. The unique yAxis object associated with the series.

chart.series[i].addPoint(Object options, [Boolean redraw], [Boolean shift], [Mixed animation]){ };  // Add a point to the series after render time. The point can be added at the end, or by giving it an X value, to the start or in the middle of the series.
chart.series[i].hide(){ };  // Hides the series if visible. If the chart.ignoreHiddenSeries option is true,the chart is redrawn without this series.
chart.series[i].remove ([Boolean redraw]){ };  // Remove the series from the chart.
chart.series[i].select ([Boolean selected|null]){ };  //Select or unselect the series. This means its selected property is set,the checkbox in the legend is toggled and when selected, the series is returned in the chart.getSelectedSeries() method.
chart.series[i].setData (Array<Mixed> data, [Boolean redraw], [Mixed animation], [Boolean updatePoints]){ };  // Apply a new set of data to the series and optionally redraw it. Note that this method throws away all points and creates new ones. For updating the values of existing points, use Point.update() instead.
chart.series[i].setVisible (Boolean visible, [Boolean redraw]){ };  // A utility function to show or hide the series with an optional redraw.
chart.series[i].show (){ };  // Shows the series if hidden.
chart.series[i].update (Object options, [Boolean redraw]){ };  // Update the series with a new set of options. For a clean and precise handling of new options, all methods and elements from the series is removed, and it is initiated from scratch. Therefore, this method is more performance expensive than some other utility methods like setData or setVisible.
