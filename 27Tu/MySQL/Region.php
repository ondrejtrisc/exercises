<?php

class Region {
  public $id = null;
  public $name = null;
  public $slug = null;

  public function insert() {
    insert("
      INSERT
      INTO `region`
      (`name`,`slug`)
      VALUES
      (?,?)
    ", [$this->name, $this->slug]);

    $this->id = last_insert_id();
  }

  public function update() {
    if (!$this->id) {
      return false;
    }
    update("
      UPDATE `region`
      SET `name` = ?,
      `slug` = ?
      WHERE `id` = ?
    ", [$this->name, $this->slug, $this->id]);
  }

  public function save() {
    if (!$this->id) {
      $this->insert();
    }
    else {
      $this->update();
    }
  }

  public function delete() {
    if (!$this->id) {
      return false;
    }
    $query = "
      DELETE
      FROM `region`
      WHERE `id` = ?
    ";
    delete($query, [$this->id]);
  }
}