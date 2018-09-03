<?php
$a = 4;
$b = 1;
$c = 3;

		//Checking for a is middle number or not
		if( $b>$a && $a>$c || $c>$a && $a>$b )
		{
			echo "a = $a is middle number";
		}
 
        //Checking for b is middle number or not
		if( $a>$b && $b>$c || $c>$b && $b>$a )
		{
			echo "b = $b is middle number" ;
		}
 
        //Checking for c is middle number or not
		if( $a>$c && $c>$b || $b>$c && $c>$a )
		{
			echo "c = $c is middle number";
        }
        
        elseif($a == $b || $a == $c || $b == $c)
        {
            echo "There's no middle number";
        }

?>