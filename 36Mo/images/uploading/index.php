<?php

var_dump($_FILES);
$tmp_name = $_FILES['uploaded_file']['tmp_name'];
move_uploaded_file($tmp_name, '../test/' . $_FILES['uploaded_file']['name']);

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Uploading files</title>
</head>
<body>

  <form action="" method="post" enctype="multipart/form-data">
    <input type="file" name="uploaded_file"><br>
    <br>
    <input type="submit" vlaue="upload">
  </form>
  
</body>
</html>