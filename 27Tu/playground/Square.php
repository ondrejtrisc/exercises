<?php

require_once 'Piece.php';

class Square {
  protected $x_coord = null;
  protected $y_coord = null;
  protected $piece = null;

  public function __construct($x, $y, $piece = null) {
    $this->x_cord = $x;
    $this->y_cord = $y;
    $this->piece = $piece;
  }

  protected function isDark() {
    return (($this->x_coord % 2 === 0 && $this->y_coord % 2 === 0) || ($this->x_coord % 2 === 1 && $this->y_coord % 2 === 1));
  }

  public function __toString() {
    $color = "";
    if ($this->isDark()) {
      $color = 'dark';
    }
    else {
      $color = 'light';
    }
    return '<div class="' . $color . '">' . $this->piece . '</div>';
  }
}