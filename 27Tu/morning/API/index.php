<?php

include 'data.php';
require_once 'Celebrity.php';

$celebrities = array_map(function($celebrityArr) {
  $celebrity = new Celebrity;
  $celebrity->loadFromArray($celebrityArr);
  return $celebrity;
}, $data);

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($celebrities);