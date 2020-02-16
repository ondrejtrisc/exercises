<?php

//1
$party = [
  'bilbo' => 'Bilbo Baggins',
  'frodo' => 'Frodo Baggins',
  'ring' => 'The One Ring'
];

//2
$party['gandalf'] = 'Gandalf the Grey';

//3
unset($party['bilbo']);

//4
$party['sam'] = 'Samwise Gamgee';

//5
unset($party['gandalf']);

//9
$party = leave_hobbiton($party);

//13
$party = go_to_bree($party);

//16
$party = go_to_weathertop($party);

//20
$party = meet_arwen($party);

?>