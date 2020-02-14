<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  

  <?PHP 
  
  function headline($text) {
    return '<h1>' . $text . '</h1>';
  }
  echo headline('My website');

  function inchesToCentimeters($inches) {
    return $inches * 2.54;
  }
  echo inchesToCentimeters(10);

  echo '<br><br>';

  $celsius = 100;
  function celsiusToFahrenheit($celsius) {
    return $celsius * (9 / 5) + 32;
  }
  echo celsiusToFahrenheit($celsius);

  echo '<br><br>';
  
  $temperature = 36.5;
  function isHealthy($temperature, $unit) {
    if ($unit === 'f') {
      $temperature = celsiusToFahrenheit($temperature);
    }
    if ($temperature < 37) {
      return 'true';
    }
    else {
      return 'false';
    }
  }
  echo isHealthy($temperature, 'c');

  echo '<br><br>';

  // $number = 41;
  // function evenOrOdd($number) {
  //   if ($number % 2) {
  //     return 'odd';
  //   }
  //   return 'even';
  // }
  // echo evenOrOdd($number);

  // echo '<br><br>';

  $number = 42;
  function evenOrOdd($number) {
    return $number % 2 ? 'odd' : 'even';
  }
  echo evenOrOdd($number);

  echo '<br><br>';

  $weekday = 'Monday';
  function sayWeekday($weekday) {
    echo 'Today is ' . $weekday;
  }
  sayWeekday($weekday);
  echo '<br><br>';

  $year_of_birth = 1988;
  function sayBirthday($year_of_birth) {
    $this_year = date('Y');
    echo 'I was born in ' . $year_of_birth . ' so this year I am celebrating my ' . (intval($this_year) - $year_of_birth) . 'th birthday.';
  }
  sayBirthday($year_of_birth);
  echo '<br><br>';

  function assessHeight($height) {
    if ($height > 180) {
      return 'tall';
    }
    elseif ($height > 160) {
      return 'average';
    }
    return 'short';
  }
  echo assessHeight(183);
  echo '<br><br>';

  function getLanguageUsage($name) {
    $name = strtolower($name);
    switch ($name) {
      case 'php':
      case 'python':
      case 'ruby':
        return 'serverside';
      case 'javascript':
        return 'clientside';
      default:
        return 'i don\'t know';
    }
  }

  echo getLanguageUsage('php') . '<br>';
  echo getLanguageUsage('python') . '<br>';
  echo getLanguageUsage('ruby') . '<br>';
  echo getLanguageUsage('javascript') . '<br>';
  echo getLanguageUsage('node') . '<br>';

  echo '<br>';

  echo getLanguageUsage('PHP') . '<br>';
  echo getLanguageUsage('php') . '<br>';
  echo getLanguageUsage('Php') . '<br>';
  echo getLanguageUsage('javascript') . '<br>';
  echo getLanguageUsage('JavaScript') . '<br>';

  echo '<br>';

  $time_served = 0;
  while ($time_served < 10) {
    echo 'The prisoner has served ' . $time_served . ' years<br>';
    $time_served++;
  }

  echo '<br>';

  $time_served = 0;
  do {
    echo 'The prisoner has served ' . $time_served . ' years<br>';
    $time_served++;
  }
  while ($time_served < 10);

  echo '<br>';

  for ($i = 5; $i > 0; $i--) {
    echo 'The prisoner has ' . $i . ' more years to serve<br>';
  }

  echo '<br>';

  for ($i = 10; $i > 0; $i--) {
    echo 'The prisoner has ' . $i . ' more years to serve<br>';
    if ($i <= 5) echo 'Going to a parole hearing...<br>';
    if ($i === 2) { 
      echo 'Paroled!';
      break;
    }
  }

  echo '<hr>';

  function square(float $val) {
      return $val*$val;
  }
  
  function squareRoot(float $val){
      return sqrt($val);
  }
  
  function calcHypotenuse(float $firstSideLength, float $secondSideLength) {
    $hypotenuseLength = squareRoot(square($firstSideLength) + square($secondSideLength));
    return $hypotenuseLength;
  }
  
  $firstSideLength = 3; 
  $secondSideLength = 4;
  echo calcHypotenuse($firstSideLength, $secondSideLength);

  echo '<hr><br>';

  function literInBottle($radius, $height) {
    return pi() * $radius * $radius * $height;
  }
  echo literInBottle(5, 10);

  echo '<hr><br>';

  // echo $_GET['name'] . ' ' . $_GET['surname'];


  
  
  ?>

</body>
</html>