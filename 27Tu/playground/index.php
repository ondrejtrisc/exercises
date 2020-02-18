<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" type="text/css" href="style.css">

  <title>Chess</title>

</head>
<body>
  
  <?php

  require_once 'Piece.php';
  require_once 'Square.php';

  $black_pawn = new Piece('p');
  $white_queen = new Piece('Q');
  
  // echo $black_pawn;
  // echo $white_queen;

  $a2 = new Square(1, 2);
  $b2 = new Square(2, 2, $white_queen);
  $c2 = new Square(3, 2, $black_pawn);
  $d2 = new Square(4, 2);
  echo $a2;
  echo $b2;
  echo $c2;
  echo $d2;

  ?>
</body>
</html>