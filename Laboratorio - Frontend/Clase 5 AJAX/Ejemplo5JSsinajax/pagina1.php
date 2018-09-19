<?php
if($_POST)
{
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];

    $respuesta = $nombre. " " . $edad;
    sleep(5);
    echo $respuesta;
}
?>