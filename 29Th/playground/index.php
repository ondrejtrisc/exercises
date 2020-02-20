<?php

require_once 'Dice.php';

$number = $_POST['number'];
$sides = $_POST['sides'];

$html = '<div class="container">';

for ($i = 0; $i < $number; $i++) {
  $dice = new Dice($sides);
  $html .= $dice->__toString();
}

$html .= '</div>'

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" type="text/css" href="style.css">

  <title>Document</title>
</head>
<body>
  
  <form action="" method="post">

    <input type="text" name="number">

    <input type="submit" value="sumbit">
    
    <select name="sides" id="">
      <option value="4">4</option>
      <option value="6">6</option>
      <option value="10">10</option>
      <option value="20">20</option>
    </select>

  </form>

  <br><br>

  <?php echo $html ?>

</body>
</html>