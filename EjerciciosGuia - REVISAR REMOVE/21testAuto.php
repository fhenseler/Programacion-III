<?php
require '21.php';

$auto1 = new Auto("Rojo", "Ford", 21999.99, '2018-01-01');
// $auto1 = Auto::WithPrecioAndFecha(21999.99, '2018-01-01');
$auto2 = new Auto("Rojo", "Ford", 19999.99, '2018-01-05');
// $auto2 = Auto::WithPrecioAndFecha(12999.99, '2018-01-01');

$auto3 = new Auto("Verde", "Chevrolet", 25999.99, '2017-01-05');
// $auto3 = Auto::WithPrecio(25999.99);
$auto4 = new Auto("Azul", "Chevrolet", 20999.99, '2017-01-09');
// $auto4 = Auto::WithPrecio(19999.99);

$auto5 = new Auto("Negro", "Fiat", 14999.99, '2000-01-01');
// $auto5 = Auto::WithPrecioAndFecha(14999.99, '2000-01-01');

$auto1->AgregarImpuestos(1500.00);
$auto4->AgregarImpuestos(1500.00);
$auto5->AgregarImpuestos(1500.00);

$importeDouble = Auto::Add($auto1, $auto2);
echo "Precio Auto1 + Auto2: $".$importeDouble."<br>";

if(Auto::Equals($auto1, $auto2))
{
    echo "Auto1 y Auto2 son iguales"."<br>";
}
else
{
    echo "Auto1 y Auto2 no son iguales"."<br>";
}

if(Auto::Equals($auto1, $auto5))
{
    echo "Auto1 y Auto5 son iguales"."<br>";
}
else
{
    echo "Auto1 y Auto5 no son iguales"."<br>";
}

echo "<br>"."<br>"."Auto 1: "."<br>";
Auto::MostrarAuto($auto1);
echo "<br>"."Auto 2: "."<br>";
Auto::MostrarAuto($auto2);
echo "<br>"."Auto 3: "."<br>";
Auto::MostrarAuto($auto3);
echo "<br>"."Auto 4: "."<br>";
Auto::MostrarAuto($auto4);
echo "<br>"."Auto 5: "."<br>";
Auto::MostrarAuto($auto5);

?>