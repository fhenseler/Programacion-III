<?php
$palabra = array("h", "o", "l", "a");
function Reverse($array)
{
    for ($i = count($array) - 1; $i >=0; $i--) 
    { 
       for($x = -1;  $x <= count($array); $x++)
       {
            $array[$x] = $array[$i];
            echo $array[$x];
            break;
       }
    }
    return $array;
}

echo "Palabra Original: ";
foreach($palabra as $letter)
{
    echo $letter;
}
echo "<br>"."Palabra Invertida: ";
Reverse($palabra);
?>