<?php
$num = 22;

$f = new NumberFormatter("es", NumberFormatter::SPELLOUT);

if($num > 20 && $num < 60)
{
    echo $f->format($num);
}
else
{
    echo "Invalid number";
}
?>