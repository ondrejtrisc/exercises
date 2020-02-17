<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arrival</title>
</head>
<body>

  <h1>Arrival</h1>
  
  <?php

  $movie_name = 'Arrival';

  $ratings = ['user1' => 69, 'user2' => 95, 'user3' => 82];

  function format_rating($rating) {
    return $rating . ' %<br>';
  }

  function get_username($user_id) {
    $user_names = [
      'user1' => 'Bob',
      'user2' => 'Stuart',
      'user3' => 'Kevin'
    ];
    return $user_names[$user_id];
  }

  echo '<ul>';
  foreach ($ratings as $user_id => $rating) {
    echo '<li>' . get_username($user_id) . ' gave Arrival a rating of ' . format_rating($rating) . '</li>';
  }
  echo '</ul>';

  ?>

</body>
</html>