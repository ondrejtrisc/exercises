<?php


require_once 'Warehouse.php';

$trainyard = new Warehouse;
$trainyard->name = 'Trainyard warehouse';
$trainyard->addCrate('Ark of Covenant');

$docks = new Warehouse;
$docks->name = 'Docks warehouse';

var_dump($trainyard);
var_dump($docks);

?>