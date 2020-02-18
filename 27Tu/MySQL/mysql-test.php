<?php

require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Country.php';
require_once 'Region.php';

connect('localhost', 'world', 'root', 'rootroot');

// $results = select('SELECT *
// FROM `country`
// WHERE `population` > 20000000
// ORDER BY `population` DESC
// LIMIT 10;
// ', [], 'Country');

// $results = select('SELECT *
// FROM `country`
// WHERE `population` > ?
// ORDER BY `population` DESC
// LIMIT 10;
// ', [20000000], 'Country');

// $results = select('SELECT *
// FROM `city`
// LIMIT 100;
// ', [], 'Country');

// $results = select('SELECT *
// FROM `city`
// ORDER BY `population` DESC
// LIMIT 100;
// ', [], 'Country');

// var_dump($result);

// function get_citiespage($page_nr) {
//   return select('SELECT *
//     FROM `city`
//     ORDER BY `Population` DESC
//     LIMIT ' . ($page_nr - 1) * 20 . ', 20'
//   );
// }

// $cities = get_citiespage(1);

// SELECT * 
// FROM `city`
// WHERE `District` LIKE '%Holland'

// SELECT *
// FROM `city`
// WHERE `CountryCode` IN ('CZE', 'SVK', 'POL', 'HUN')
// ORDER BY `population` DESC
// LIMIT 10;

// INSERT
// INTO `region`
// (`name`,`slug`)
// VALUES
// ('Eastern Europe', 'eastern-europe')

// $region = new Region;
// $region->name = 'Central Africa';
// $region->slug = 'central-africa';
// $region->insert();

// $region = new Region;
// $region->name = 'Western Africa';
// $region->slug = 'western-africa';
// $region->insert();

// $region = new Region;
// $region->name = 'Eastern Africa';
// $region->slug = 'eastern-africa';
// $region->insert();

// $region = new Region;
// $region->name = 'North Africa';
// $region->slug = 'north-africa';
// var_dump($region);
// $region->insert();
// var_dump($region);

// UPDATE `city`
// SET `Name` = 'Prague'
// WHERE `id` = 3339;

// UPDATE `city`
// SET `Population` = 1294513
// WHERE `id` = 3339;

// UPDATE `country`
// SET `HeadOfState` = 'Donal J. Trump'
// WHERE `HeadOfState` = 'George W. Bush'

// UPDATE `country`
// SET `Population` = 300,
// `GNP` = 13.91
// WHERE `Name` = 'United States Minor Outlying Islands';

// $region = select_one("SELECT * FROM `region` WHERE `name` = ?", ['North America'], 'Region');
// $region->slug = 'north-america';
// $region->update();

// $region = select_one("SELECT * FROM `region` WHERE `slug` = ?", ['north-america'], 'Region');
// $region->name = 'North America';
// $region->save();

// DELETE
// FROM `region`
// WHERE `id` = 1;

// SELECT *
// FROM `region`
// WHERE `id` = 1;

// DELETE
// FROM `region`
// WHERE `slug` LIKE '%america%';

$region = select_one("SELECT * FROM `region` WHERE `slug` = ?", ['eastern-africa'], 'Region');
$region->delete();