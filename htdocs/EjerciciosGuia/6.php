<?php
$operador = '*';
$op1 = 5;
$op2 = 3;

switch($operador)
{
    case "+":
        $result = $op1 + $op2;
    break;
    
    case "-":
        $result = $op1 - $op2;
    break;
    
    case "*":
        $result = $op1 * $op2;
    break;
    
    case "/":
        $result = $op1 / $op2;
    break;
}

echo "Num 1: ".$op1."<br>";
echo "Num 2: ".$op2."<br>";
echo "Operador: ".$operador."<br>";
echo "Result: ".$result;

?>