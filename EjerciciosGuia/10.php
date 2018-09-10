<?php
$array = [10];
$x = 0;

for($i = 1; $x < 10; $i++)
{
    if($i % 2 != 0)
    {
        $array[$x] = $i;
        $x++;
    }
}

foreach($array as $element)
{
    echo $element."<br>";
}

echo "<br>";

for($i = 0; $i < count($array); $i++)
{
    echo $array[$i]."<br>";
}

echo "<br>";

$r = 0;
while($r < count($array))
{
    echo $array[$r]."<br>";
    $r++;
}
?>