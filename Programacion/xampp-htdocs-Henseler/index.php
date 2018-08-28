<?php 
include_once "funciones.php";
include "alumno.php";

echo "<h2>Hola</h2>";

$alumno = new Alumno;
$alumno->nombre = "FedericoH";
$alumno->legajo = 100100;

$nombre = "Federico";
echo $nombre."<br>";

echo "Hola $nombre<br>";
echo Sum()."<br>";

var_dump(Sum())."<br>";
var_dump($nombre);

$array = array("Volvo", 3, "Toyota");
echo $array."<br>";
var_dump($array)."<br>";

foreach($array as $elemento)
{
    echo $elemento."<br>";
}    

$arrayAlfa = array('Alfa' => 666, 'Beta' => 555, 'Gamma' => 444);
$arrayAlfa["otro"] = "algo";
var_dump($arrayAlfa)."<br>";

foreach($arrayAlfa as $key => $value)
{
    echo $value."<br>";
} 

$obj = new stdclass();
$obj->Nombre = "Federico";
var_dump($obj);

/*echo Alumno::Saludar()."<br>"; STATIC*/ 
echo $alumno->Saludar()."<br>";
echo $alumno->nombre;
echo $alumno->legajo;
?>