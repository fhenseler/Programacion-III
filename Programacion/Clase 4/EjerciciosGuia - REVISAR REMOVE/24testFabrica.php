<?php
require '24.php';
$operario1 = new Operario(98, "Henseler", "Federico", 5000);
$operario2 = new Operario(91, "Henseler", "Julian", 6000);
$operario3 = new Operario(86, "Henseler", "Jorge", 7000);

$fabrica = new Fabrica("Fede Company");
$operario1->SetAumentarSalario(1.1);
$operario2->SetAumentarSalario(1.5);
$operario3->SetAumentarSalario(1.2);

echo "Agrego operario2: "."<br>";
$fabrica->Add($operario2);

echo "Agrego operario3: "."<br>";
$fabrica->Add($operario3);

echo "Agrego operario3: "."<br>";
$fabrica->Add($operario3);

echo "Muestro fábrica con operarios 2 y 3: "."<br>";
$fabrica->Mostrar();

echo "Muestro costos: "."<br>";
Fabrica::MostrarCosto($fabrica);

echo "Saco operario3: "."<br>";
$fabrica->Remove($operario3);

echo "Muestro fábrica con operario 2: "."<br>";
$fabrica->Mostrar();

?>