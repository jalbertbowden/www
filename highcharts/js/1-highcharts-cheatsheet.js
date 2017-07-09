// Highcharts CheatSheet Part 1.
// Create interactive charts easily for your web projects.
// Download: http://www.highcharts.com/download
// More: http://api.highcharts.com/highcharts


// 1. Installation.
// Highcharts requires two files to run, highcharts.js and either jQuery, MooTools or Prototype or the Highcharts Standalone Framework which are used for some common JavaScript tasks.
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
// <script src="https://code.highcharts.com/highcharts.js"></script>
// http://www.highcharts.com/docs/getting-started/installation


// 2. Highcharts Global Options.
// http://api.highcharts.com/highcharts#global


$(function() {
  // If you want to apply a set of options to all charts on the same page, use Highcharts.setOptions 
  // You can find below only specific information to setOptions() but any option from $("#container").highcharts() works. (check 3.)
  Highcharts.setOptions({
    global: {
      VMLRadialGradientURL: 'http://code.highcharts.com/{version}/gfx/vml-radial-gradient.png',  // Path to the pattern image required by VML browsers in order to draw radial gradients.
      canvasToolsURL: 'http://code.highcharts.com/{version}/modules/canvas-tools.js',            // The URL to the additional file to lazy load for Android 2.x devices. These devices don't support SVG, so we download a helper file that contains canvg, its dependecy rbcolor, and our own CanVG Renderer class.
      timezoneOffset: 0,  // The timezone offset in minutes
      useUTC: true        // Whether to use UTC time for axis scaling, tickmark placement and time display in Highcharts.dateFormat. 
    },
    lang: {
      contextButtonTitle: 'Chart context menu',  // Exporting module menu. The tooltip title for the context menu holding print and export menu items.
      decimalPoint: '.',                         // The default decimal point used in the Highcharts.numberFormat method unless otherwise specified in the function arguments.
      downloadJPEG: 'Download JPEG image',       // Exporting module only. The text for the JPEG download menu item.
      downloadPDF: 'Download PDF document',      // Exporting module only. The text for the PDF download menu item.
      downloadSVG: 'Download SVG vector image',  // Exporting module only. The text for the SVG download menu item.
      drillUpText: 'Back to {series.name}',      // The text for the button that appears when drilling down, linking back to the parent series.
      loading: 'Loading...',                     // The loading text that appears when the chart is set into the loading state following a call to chart.showLoading.
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],  // An array containing the months names. Corresponds to the %B format in Highcharts.dateFormat().
      noData: 'No data to display',                      // The text to display when the chart contains no data. Requires the no-data module, see noData.
      numericSymbols: ['k', 'M', 'G', 'T', 'P', 'E'],    // Metric prefixes used to shorten high numbers in axis labels. Replacing any of the positions with null causes the full number to be written.
      printChart: 'Print chart',  // Exporting module only. The text for the menu item to print the chart.
      resetZoom: 'Reset zoom',    // The text for the label appearing when a chart is zoomed.
      resetZoomTitle: 'Reset zoom level 1:1',  // The tooltip title for the label appearing when a chart is zoomed.
      shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],  // An array containing the months names in abbreviated form. Corresponds to the %b format in Highcharts.dateFormat().
      thousandsSep: ',',  // The default thousands separator used in the Highcharts.numberFormat method unless otherwise specified in the function arguments.
      weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']  // An array containing the weekday names.
    }
  });
});