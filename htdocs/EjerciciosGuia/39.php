<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="#" method="post">
    Ingrese número entero: <input type="number" name= "number">
    <input type="submit" name= "submit" value="Confirmar">
    </form>
</body>
</html>   

<?php
/*Construya una aplicación que permita el ingreso de un número entero y muestre en pantalla la siguiente información:
1) Cantidad de cifras que posee.
2) Suma de cifras impares del número.
3) Suma de cifras pares del número.
4) Suma total de todas las cifras del número.
5) Todos los divisores de dicho número.
Mostrar los anteriores datos en una tabla convenientemente diseñada.*/


if(isset($_POST['submit']))
{  
    $num =  $_POST['number'];
    
    echo 'Cantidad de cifras: ' . strlen($num) . "<br>";
 
    echo 'Suma de todas las cifras: ' . array_sum(str_split($num)) . "<br>";

    $numImp = str_split($num);
    $sumaImpar = 0;
    foreach((array)$numImp as $digit)
    {
        if(!($digit % 2 == 0))
        {
            $sumaImpar += $digit;
        }
    }
    echo 'Suma de todas las cifras impares: ' . array_sum(str_split($sumaImpar)) . "<br>";

    $numPar = str_split($num);
    $sumaPar = 0;
    foreach((array)$numPar as $digit)
    {
        if($digit % 2 == 0)
        {
            $sumaPar += $digit;
        }
    }
    echo 'Suma de todas las cifras pares: ' . array_sum(str_split($sumaPar)) . "<br>";

    echo 'Divisores: ';
    $divisores = array();
    for($i = 1; $i < $num; $i++)
    {
        if($num % $i == 0)
        {
            $divisores[$i] =  $i . ", ";
        }
    }

echo "<table style= 'border: 1px solid black'>";
echo '<tr>';
   echo '<th>Número Ingresado</th>';
    echo '<th>Cantidad de Cifras</th>';
    echo '<th>Suma de cifras impares</th>';
    echo '<th>Suma de cifras pares</th>';
    echo '<th>Todos los divisores</th>';
    echo '</tr>';
    echo '<tr>';
    echo '<th>' . $num . '</th>';
    echo '<th>' . strlen($num) . '</th>';
    echo '<th>' . array_sum(str_split($sumaImpar)) . '</th>';
    echo '<th>' . array_sum(str_split($sumaPar)) . '</th>';
    echo '<th>' . var_dump($divisores) . '</th>';
    echo '</tr>';
    echo '</table>';
}    

?>