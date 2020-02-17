<?php

class User {

  public $id = 1;
  public $username = 'steve';
  public $name = 'Stephen';
  public $password = null;
  public $number_of_posts = 0;
  public $created_at = null;

  public function __construct($username) {
    $this->username = $username;
    $this->cread_at = date('Y-m-d H:i:s');
  }

  public function dumpMe() {
    echo 'The name of user ' . $this->id . ' is ' . $this->name . '.<br>';
  }
  
}