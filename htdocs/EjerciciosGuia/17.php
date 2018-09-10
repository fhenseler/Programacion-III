<?php
$myString = "Parcial";
function Validar($palabra, $max)
{
    $myArray = array("Parcial", "Recuperatorio", "Programacion");
    if(strlen($palabra) <= $max)
    {
        $retorno = 0;
        for($i = 0; $i < 3; $i++)
        {
            if(strcmp($palabra, $myArray[0]) == 0)
            {
                $retorno = 1;
            }
            if(strcmp($palabra, $myArray[1]) == 0)
            {
                $retorno = 1;
            }
            if(strcmp($palabra, $myArray[2]) == 0)
            {
                $retorno = 1;
            }    
        }
        return $retorno;
    }
    else
    {
        echo "El largo de la palabra supera el máximo de caracteres permitidos";
    }
}
echo Validar($myString, 12);
?>