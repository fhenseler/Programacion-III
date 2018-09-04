<?php
function Power1to4()
{
    for($x = 1; $x < 5; $x++)
    {
        for($i = 1; $i < 5; $i++)
        {
            echo Pow($i, $x)."<br>";
        }
        echo "<br>";
    }
}
Power1to4();
?>