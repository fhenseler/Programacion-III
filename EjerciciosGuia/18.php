<?php
$num = 9;

function esPar($number)
{
    $result = false;
    if($number % 2 == 0)
    {
        $result = true;
    }
    return $result;
}

function esImpar($number)
{
    $result = false;
    if($number % 2 != 0)
    {
        $result = true;
    }
    return $result;
}

if(esPar($num))
{
    echo "El número ".$num." es par";
}
else
{
    echo "El número ".$num." es impar";
}

?>