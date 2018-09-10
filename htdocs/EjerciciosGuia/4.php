<?php
$count = 0;
$sum = 0;
for ($i = 1; $sum <= 1000; $i++) 
{
    if($sum + $i > 1000)
    {
        break;
    }
    else
    {
        echo ($sum += $i)."<br>";
        $count += 1;
    }
}

echo "<br>"."Total: ".$sum."<br>";
echo "Cantidad de numeros sumados: ".$count;
?>