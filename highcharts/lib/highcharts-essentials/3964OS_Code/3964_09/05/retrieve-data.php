<?php

//Checking if a request has been made
if( isset( $_POST ) ) {

	//Establishing connection and retrieving the data
	try {
		$con = new PDO( 'mysql:dbname=sakila;host=localhost', 'root', '' );
		$results = $con->query( 'SELECT first_name, last_name, COUNT(film_actor.actor_id) FROM film_actor JOIN actor ON film_actor.actor_id = actor.actor_id GROUP BY film_actor.actor_id ORDER BY COUNT(film_actor.actor_id) DESC LIMIT 10' );
	} catch ( PDOException $e ) {
		echo 'Connection failed: ' . $e->getMessage();
	}


	if( isset( $results ) ) {
		$data = [];
		$categories = [];
		$combined = [];

		foreach( $results as $row ) {
			array_push( $categories, $row['first_name'] );
			array_push( $data, (int) $row['COUNT(film_actor.actor_id)'] );
		}

		array_push( $combined, $data );
		array_push( $combined, $categories );

		header( 'Content-Type: application/json' );
		echo json_encode( $combined );
	}
	
}