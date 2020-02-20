<?php

require_once 'DB.php';
require_once 'DB_functions.php';

connect('localhost', 'games', 'root', 'rootroot');



if (isset($_GET['orderby'])){
  $orderby = $_GET['orderby'];
}
else {
  $orderby = 'name';
}

if (isset($_GET['way'])){
  $way = $_GET['way'];
}
else {
  $way = 'asc';
}

if ($orderby === 'rating' && $way === 'desc') {
  $query = "
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY `rating` DESC
  ";
}
else if ($orderby === 'rating') {
  $query = "
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY `rating` ASC
  ";
}
else if ($way === 'desc') {
  $query = "
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY `name` DESC
  ";
}
else {
  $query = "
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY `name` ASC
  ";
}

$results = select($query);

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($results);

?>