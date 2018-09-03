<?php
/*
Realizar las líneas de código necesarias para generar un Array asociativo $lapicera, 
que contenga como elementos: ‘color’, ‘marca’, ‘trazo’ y ‘precio’. Crear, cargar y mostrar tres lapiceras.
*/
$lapiceras = array
  (
  array("Red","Bic","Thin",3.99),
  array("Blue","Parker","Thin",13.50),
  array("Black","Staedtler","Thick", 11.25),
  );

  for ($row = 0; $row < 3; $row++) {
    echo "<p><b>Row number $row</b></p>";
    echo "<ul>";
    for ($col = 0; $col < 4; $col++) {
      echo "<li>".$lapiceras[$row][$col]."</li>";
    }
    echo "</ul>";
  }

?>