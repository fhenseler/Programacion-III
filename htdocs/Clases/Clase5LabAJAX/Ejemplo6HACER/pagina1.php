<?php
$nombre_fichero = 'autos.json';
$gestor = fopen($nombre_fichero, 'r');
$contenido = fread($gestor, filesize($nombre_fichero));
fclose($gestor);
sleep(3);
echo $contenido;
?>