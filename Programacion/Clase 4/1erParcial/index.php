<?php
require 'usuario.php';
$_nombre = "Federico";
$_clave = "234";


$_user = new Usuario($_nombre, $_clave);
var_dump($_user);

$_POST;
var_dump($_POST);

Usuario::toString($_user);
?>