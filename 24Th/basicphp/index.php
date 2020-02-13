<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic PHP</title>
</head>
<body>
  <?php

    define ('SERVER_SOFTWARE', 'Apache');
    define ('MY_OS', 'Windows');

    $first_name = 'Ondřej';
    $surname = 'Trišč';
    $year_of_birth  = 1988;
    $height = 183;
    echo('First name: ' . $first_name . '<br>Surname: ' . $surname . '<br>Year of birth: ' . $year_of_birth . '<br>Height: ' . $height . '<br><br>');
    echo('This server is running on ' . SERVER_SOFTWARE . '.<br>');
    echo('My operating system is ' . MY_OS . '.<br><br>');

    function greet($whom) {
      return 'Hello, ' . $whom . '!<br><br>';
    }
    echo greet('Prague');

    $array = array();
    for($i = 1; $i <= 100; $i++) {
        array_push($array, $i);
    }
    
    $string = "I am a simple string";
    
    // Create a variable $arrayDouble containing the double of each value of $array
    $arrayDouble = array_map(
      function ($x) { return 2 * $x; },
      $array
    );
    print_r($arrayDouble);
    echo '<br><br>';
    
    // Create two variables $arrayEven and $arrayOdd containing the Even numbers contained in $array and the Odd numbers contained in $array
    $arrayEven = array_filter($array, function ($x) { return ! ($x % 2); });
    $arrayOdd = array_filter($array, function ($x) { return $x % 2; });
    print_r($arrayEven);
    echo '<br><br>';
    print_r($arrayOdd);
    echo '<br><br>';
       
    $cars_i_want = [];
    $cars_i_want[] = 'Aston Martin';
    $cars_i_want[] = 'Bugatti';
    $cars_i_want[] = 'Ferrari';
    $cars_i_want[] = 'Lamborghini';
    $cars_i_want[] = 'Maserati';
    $cars_i_want[] = 'Mercedes';
    $cars_i_want[] = 'Porsche';
    $cars_i_want[] = 'Skoda';
    var_dump($cars_i_want);
    echo '<br><br>';

    echo 'For myself I would buy ' . $cars_i_want[1] . '.<br>';
    echo 'For my spouse I would buy ' . $cars_i_want[3] . '.<br>';
    $cars_i_want[4] = 'Smart';
    echo 'Each of my kids will get a ' . $cars_i_want[4] . '.<br><br>';

    echo '<ul>';
    foreach ($cars_i_want as $car) {
      echo '<li>' . $car . '</li>';
    }
    echo '</ul>';

    $car_prices = [
      'Skoda Octavia' => 270000,
      'Volkswagen Golf' => 170000,
      'BMW X6' => 380000,
      'Porsche 911' => 1150000
    ];

    echo 'You can have a Porsche for just ' . $car_prices['Porsche 911'] . ' CZK.<br><br>';

    foreach ($car_prices as $car => $price) {
      echo 'The price of ' . $car . ' is ' . $price . ' CZK.<br>';
    }


  ?>
</body>
</html>
