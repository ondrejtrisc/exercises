<?php

class Dice {

  public $sides = 0;

  public function __construct($sides) {
    $this->sides = $sides;
  }

  public function roll() {
    return rand(1, $this->sides);
  }

  public function __toString() {
    return '<div class="dice">' . $this->roll() . '</div>';
  }
}