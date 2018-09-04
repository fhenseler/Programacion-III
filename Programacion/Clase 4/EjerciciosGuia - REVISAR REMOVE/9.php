<?php
$array = array(rand(1, 10), rand(1, 5), rand(6, 10), rand(1, 10), rand(1, 1));
$avg = array_sum($array)/count($array);

echo "Valores del Array: "."<br>";
foreach($array as $element)
{
    echo $element."<br>";
}

if($avg > 6)
{
    echo "El promedio es mayor a 6 ($avg)";
}

if($avg < 6)
{
    echo "El promedio es menor a 6 ($avg)";
}

if($avg == 6)
{
    echo "El promedio es igual a 6 ($avg)";
}
?>