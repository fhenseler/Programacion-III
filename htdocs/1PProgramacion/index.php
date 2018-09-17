<?php
require_once './clases/usuario.php';

$carpeta = '../archivos';
if (!file_exists($carpeta)) {
    mkdir($carpeta, 0777, true);
}

if (isset($_GET["nombre"]))
{
  $_nombre = $_GET["nombre"];
  echo "$_nombre is your username"."<br>";
} 
else 
{
  $_nombre = null;
  echo "no username supplied"."<br>";
}

if (isset($_GET["clave"]))
{
  $_clave = $_GET["clave"];
  echo "$_clave is your key"."<br>";
} 
else 
{
  $_clave = null;
  echo "no key supplied"."<br>";
}

$_user = new Usuario($_nombre, $_clave);
echo $_user->ToString();
var_dump($_user);
$_user->jsonSerialize();
Usuario::Guardar($_user);
?>