<?php

class Person
{
  private $name;
  private $lastname;
  private $age;
  private $hp;
  private $mother;
  private $father;

  function __construct($name, $lastname, $age, $mother = null, $father = null)
  {
    $this->name = $name;
    $this->lastname = $lastname;
    $this->age = $age;
    $this->mother = $mother;
    $this->father = $father;
    $this->hp = 100;
  }

  function sayHi($name)
  {
    return "Hi, $name, I`m " . $this->name;
  }

  function setHp($hp)
  {
    if ($this->hp + $hp > 100) $this->hp = 100;
    else $this->hp = $this->hp + $hp;
  }

  function getHp()
  {
    return $this->hp;
  }
  function getAge()
  {
    return $this->age;
  }
  function getName()
  {
    return $this->name;
  }
  function getMother()
  {
    return $this->mother;
  }
  function getFather()
  {
    return $this->father;
  }
  function getInfo()
  {
    return "Меня зовут - " . $this->getName() . ", мне - " . $this->getAge() . " лет."
      . "<br>А папу - " . $this->getFather()->getName() . " и маму - " . $this->getMother()->getName() . "."
      . "<br>Мой дед, папин папа - " . $this->getFather()->getFather()->getName() . ", второй дед, мамин папа - " . $this->getMother()->getFather()->getName() . "."
      . "<br>Моя бабушка, папина мама - " . $this->getFather()->getMother()->getName() . ", вторая бабушка, мамина мама - " . $this->getMother()->getMother()->getName() . ".";
  }
}

$igor = new Person("Igor", "Petrov", 78);
$valya = new Person("Valentina", "Veter", 75);

$anton = new Person("Anton", "Dubina", 72);
$alena = new Person("Alena", "Pushkina", 68);

$alex = new Person("Alex", "Ivanov", 42, $alena, $anton);
$olga = new Person("Olga", "Ivanova", 41, $valya, $igor);
$valera = new Person("Valera", "Ivanov", 12, $olga, $alex);

echo $valera->getInfo();

//echo $valera->getMother()->getFather()->getName();//Имя дедушки Валеры


//echo $alex->sayHi($igor->name);
// Здоровье не может быть более 100 единиц

// $medKit = 50;
// $alex->setHp(-30); //Упал
// echo $alex->getHp() . "<br>";
// $alex->setHp($medKit); //Нашел аптечку
// echo $alex->getHp();
// $alex->name = "Alex";
// echo $alex->name;
// echo $igor->name;
