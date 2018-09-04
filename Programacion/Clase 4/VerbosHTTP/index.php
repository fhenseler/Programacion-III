<?php
echo "Hola"."<br>";
$_GET;
$_POST;
$_REQUEST;

$expire = time()+60*60*24*30;          
setcookie("MyName", "Test", $expire,'/');
$_COOKIE["MyName"];

var_dump($_GET);
var_dump($_POST);
var_dump($_REQUEST);
//var_dump($_GET[]);
?>