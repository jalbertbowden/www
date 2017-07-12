<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Highcharts Essentials</title>
</head>
<body>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="js/highcharts.js"></script>
<script>
(function() {

	var chartConfigJSON = {
		"chart": {
			"type": "line"
		},
		"xAxis": {
			"categories": ['Jane', 'John', 'Doe']
		},
		"series": [{
			"name": "Persons",
			"data": [20, 45, 30]
		}]
	};

	var requestString = "async=true&type=pdf&width=500&options=" + JSON.stringify( chartConfigJSON );

	$.ajax({
		type: 'POST',
		data: requestString,
		url: 'http://export.highcharts.com',
		success: function( filename ) {
			window.open( 'http://export.highcharts.com/' + filename );
		}
	});


})();
</script>
</body>
</html>