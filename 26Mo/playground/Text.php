<?php

class Text {
  public $content = '';

  public function __construct($content) {
    $this->content = $content;
  }

  public function display() {
    echo $this->content;
  }

  public function getLength() {
    return strlen($this->content);
  }

  public function getNrOfWords() {
    return count(preg_split("/\s/", $this->content));
  }

  public function getNrOfSentences() {
    return count(preg_split("/\.\s/", $this->content));
  }

  public function getNrOfParagraphs() {
    return count(preg_split("/\.\r\n/", $this->content));
  }

  public function getMostCommonWords($n) {
    $wordArray = preg_split("/\s/", $this->content);
    $newWordArray = [];
    foreach ($wordArray as $word) {
      if (!empty($word)) {
        array_push($newWordArray, $word);
      }
    } 
    $sanitizedWordArray = array_map(function($word) {
      if ($word[strlen($word) - 1] === ',' || $word[strlen($word) - 1] === '.') {
        return substr($word, 0, strlen($word) - 1);
      }
      else {
        return $word;
      }
    }, $newWordArray);
    $wordCounts = [];
    foreach ($sanitizedWordArray as $word) {
      if (isset($wordCounts[$word])) {
        $wordCounts[$word] += 1;
      }
      else {
        $wordCounts[$word] = 1;
      }
    }

    function getMax(&$array) {
      $maxCount = -INF;
      $maxWord = "";
      foreach ($array as $word => $count) {
        if ($count > $maxCount) {
          $maxCount = $count;
          $maxWord = $word;
        }
      }
      $ret = $maxWord;
      unset($array[$maxWord]);
      return $ret;
    }

    $ret = [];
    for ($i = 0; $i < $n; $i++) {
      array_push($ret, getMax($wordCounts));
    }
    return $ret;
  }
}