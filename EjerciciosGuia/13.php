<!-- “Perro”, “Gato”, “Ratón”, “Araña”, “Mosca”
“1986”, “1996”, “2015”, “78”, “86”
“php”, “mysql”, “html5”, “typescript”, “ajax” -->

<?php
$animals = array("Perro"=>"35", "Gato"=>"11", "Ratón"=>"5", "Araña"=>"3", "Mosca"=>"1");
$ages = array("56"=>"44", "77"=>"33", "44"=>"99", "96"=>"21", "18"=>"11");
$software = array("php"=>"12", "mysql"=>"13", "html5"=>"12", "typescript"=>"9", "ajax"=>"32");

// array_push($animals, "Perro"=>"35", "Gato"=>"11", "Ratón"=>"5", "Araña"=>"3", "Mosca"=>"1");
// array_push($ages, "56"=>"44", "77"=>"33", "44"=>"99", "96"=>"21", "18"=>"11");
// array_push($software, "php"=>"12", "mysql"=>"13", "html5"=>"12", "typescript"=>"9", "ajax"=>"32");

print_r(array_merge($animals, $ages, $software));
?>