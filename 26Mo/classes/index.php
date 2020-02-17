<?php

require_once 'User.php';

$steve = new User('steve');

var_dump($steve);

$steve->dumpMe();

$bob = new User('bob');
$bob->id = 2;
$bob-> name = 'Robert';

var_dump($bob);

$bob->dumpMe();