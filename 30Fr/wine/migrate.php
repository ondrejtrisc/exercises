<?php

require_once 'DB.php';

DB::connect('localhost', 'wines', 'root', 'rootroot');

DB::statement('TRUNCATE TABLE `countries`');
DB::statement('TRUNCATE TABLE `provinces`');
DB::statement('TRUNCATE TABLE `reviews`');
DB::statement('TRUNCATE TABLE `tasters`');
DB::statement('TRUNCATE TABLE `varieties`');
DB::statement('TRUNCATE TABLE `wineries`');
DB::statement('TRUNCATE TABLE `wines`');

$tastersQuery = "
  SELECT DISTINCT `taster_name`, `taster_twitter_handle`
  FROM `wine_reviews_old`
";

$tasters = DB::select($tastersQuery);

$insertTastersQuery = "
  INSERT
  INTO `tasters`
  (`name`, `twitter`)
  VALUES
";

$tasterValues = [];
foreach($tasters as $taster) {
  $insertTastersQuery .= "(?, ?),";
  $tasterValues[] = $taster->taster_name;
  $tasterValues[] = $taster->taster_twitter_handle;
}

$insertTastersQuery = rtrim($insertTastersQuery, ', ');

var_dump($insertTastersQuery);
var_dump($tasterValues);

DB::insert($insertTastersQuery, $tasterValues);



