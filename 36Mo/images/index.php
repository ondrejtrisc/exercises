<?php


var_dump( pathinfo( __FILE__ ) );
 
var_dump( basename( __FILE__ ) );
var_dump( dirname( __FILE__ ) );

//mkdir('2020');

//rmdir('2020');

$handle = opendir('C:\prog\bootcamp\exercises\36Mo\images');

while ($file = readdir($handle)) {
  var_dump($file);
}

var_dump(is_dir('2019'));