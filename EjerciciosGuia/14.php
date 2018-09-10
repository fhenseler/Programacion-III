<?php
$animals = array("Perro"=>"35", "Gato"=>"11", "Ratón"=>"5", "Araña"=>"3", "Mosca"=>"1");
$ages = array("56"=>"44", "77"=>"33", "44"=>"99", "96"=>"21", "18"=>"11");
$software = array("php"=>"12", "mysql"=>"13", "html5"=>"12", "typescript"=>"9", "ajax"=>"32");

$animals1 = array();
$ages1 = array();
$software1 = array();

array_push($animals1, "Perro", "Gato", "Ratón", "Araña", "Mosca");
array_push($ages1, "56", "77", "44", "96", "18");
array_push($software1, "php", "mysql", "html5", "typescript", "ajax");

echo "Array Asociativo: ";
print_r(array_merge($animals, $ages, $software));
echo "<br><br>";
echo "Array Indexado: ";
print_r(array_merge($animals1, $ages1, $software1));
?>