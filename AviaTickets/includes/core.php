<?php
define("MYSQL_HOST","localhost");
define("MYSQL_USER","admin");
define("MYSQL_PASSWORD","admin");
define("MYSQL_DB_NAME","parfenov_db");

$table = "themes";

$dbconnect = new mysqli(MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB_NAME);
$dbconnect -> query ("set_client='utf8'");
$dbconnect -> query ("set character_set_results='utf8'");
$dbconnect -> query ("set collation_connection='utf8_general_ci'");
$dbconnect -> query ("SET NAMES utf8");




?>