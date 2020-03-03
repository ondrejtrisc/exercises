<?php

require_once 'DB.php';

DB::connect('localhost', 'games', 'root', 'rootroot');

$query1 = "
  SELECT `games`.*
  FROM `games`
";

$games = DB::select($query1);

$game_ids = [];
foreach ($games as $game) {
  $game_ids[] = $game->id;
}

$qmarks = join(', ', array_fill(0, count($game_ids), '?'));

$query2 = "
  SELECT `game_genre`.`game_id`, `genres`.*
  FROM `game_genre`
  LEFT JOIN `genres`
    ON `game_genre`.`genre_id` = `genres`.`id`
  WHERE `game_genre`.`game_id` IN ({$qmarks})
";

$genres = DB::select($query2, $game_ids);

$genres_for_games = [];
foreach ($genres as $genre) {
  $genres_for_games[$genre->game_id][] = $genre;
}

foreach ($games as $game) {
  $game->genres = $genres_for_games[$game->id];
}

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($games);