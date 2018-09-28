<?php
if($_POST)
{
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];

    $respuesta = $nombre. " " . $edad;

    echo $respuesta;
}
?>