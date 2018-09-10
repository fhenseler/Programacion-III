<?php
require '22.php';

$auto1 = new Auto("Rojo", "Ford", 21999.99, '2018-01-01');
$auto2 = new Auto("Rojo", "Ford", 19999.99, '2018-01-05');
$auto3 = new Auto("Verde", "Chevrolet", 25999.99, '2017-01-05');
$garage = new Garage("Mi Garage", 55.55);

$garage->MostrarGarage();

echo "Agrego auto1: "."<br>";
$garage->Add($auto1);
echo "Agrego auto3: "."<br>";
$garage->Add($auto3);
echo "Intento agregar auto3 de nuevo: "."<br>";
$garage->Add($auto3);

echo "Garage con auto1 y auto3: "."<br>";
$garage->MostrarGarage();

echo "Intento sacar auto2 (no está en el garage): "."<br>";
$garage->Remove($auto2);
echo "Saco auto3: "."<br>";
$garage->Remove($auto3);

echo "Garage con auto1: "."<br>";
$garage->MostrarGarage();

?>