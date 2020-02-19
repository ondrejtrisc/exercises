<?php

class Match {
  public $begins_at = null;
  public $score = null;
  public $nr_of_players = null;
  public $length = null;
  public function __construct($begins_at) {
    $this->begins_at = $begins_at;
  }
  public function getEstimatedEnd($begins_at) {
    return 0;
  }
}
