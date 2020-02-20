<?php

var_dump($_GET);
var_dump($_POST);

$data_te_dend_over_get = [
  'oderby' => 'name',
  'way' => 'desc'
];

$querry_string = http_build_query($data_te_dend_over_get);

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <form action="" method="post">

  <input type="text" name="text" value="">

  <input type="submit" value="sumbit the form">

  </form>

</body>
</html>