<?php
if($_GET)
{
    $nombre = $_GET['nombre'];
    $edad = $_GET['edad'];

    $respuesta = $nombre. " " . $edad;

    echo $respuesta;
}
?>