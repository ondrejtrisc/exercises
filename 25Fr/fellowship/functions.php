<?php

//6, 7, 8
function leave_hobbiton($party) {
  $party = array_merge($party, [
    'merry' => 'Meriadoc Brandybuck',
    'pippin' => 'Peregrin Took'
  ]);
  return $party;
}

//10, 11, 12
function go_to_bree($party) {
  $party['strider'] = 'Strider';
  return $party;
}

//14, 15
function go_to_weathertop($party) {
  $party = array_merge($party, [
    'Witch King of Angmar',
    'Nazgûl #2',
    'Nazgûl #3',
    'Nazgûl #4',
    'Nazgûl #5',
    'Nazgûl #6',
    'Nazgûl #7',
    'Nazgûl #8',
    'Nazgûl #9'
  ]);
  return $party;
}

//17, 18, 19
function meet_arwen($party) {
  $party['arwen'] = 'Arwen Undómiel';
  array_splice($party, -10, 9);
  return $party;
}


?>