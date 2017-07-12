<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Highcharts Essentials</title>
</head>
<body>
	
	<div id="actor_movies" style="width: 850px; height: 450px;"></div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="js/highcharts.js"></script>
<script>
(function() {

	var categories = [],
		data = [];

	<?php
	try {
		$con = new PDO( 'mysql:dbname=sakila;host=localhost', 'root', '' );
		$data = $con->query( 'SELECT first_name, last_name, COUNT(film_actor.actor_id) FROM film_actor JOIN actor ON film_actor.actor_id = actor.actor_id GROUP BY film_actor.actor_id ORDER BY COUNT(film_actor.actor_id) DESC LIMIT 10' );
		foreach( $data as $row ) {
			$actor = $row;
			echo 'categories.push("' . $actor['first_name'] . '");';
			echo 'data.push(' . $actor['COUNT(film_actor.actor_id)'] . ');';
		}
	} catch ( PDOException $e ) {
		echo 'Connection failed: ' . $e->getMessage();
	}
	?>

	//Initializing basic chart configuration object
	var chartConfigOptions = {
		title: {
			text: 'Most Number of Movies by Actors'
		},
		chart: {
			type: 'column'
		},
		tooltip: {
			valueSuffix: ' Movies',
			useHTML: true
		},
		xAxis: {
			title: {
				text: 'Actor'
			},
			categories: categories
		},
		yAxis: {
			title: {
				text: 'Movies'
			}
		},
		series: [{
			name: 'Actors',
			data: data
		}]
	};

	$( '#actor_movies' ).highcharts( chartConfigOptions );


})();
</script>
</body>
</html>