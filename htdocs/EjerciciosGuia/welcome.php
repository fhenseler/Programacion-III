<?php
require_once '28.php';
if (isset($_POST["location"]))
{
  $texto = $_POST["location"];
} 
else
{
    echo "err";
}

$path = "./Encriptado.txt";
Enigma::Encriptar($texto, $path);
$textoDesencriptado = Enigma::Desencriptar($path);
echo "<br>" . "Texto encriptado: " . $texto;
echo "<br>" . "Texto del archivo desencriptado: " . $textoDesencriptado;
?>



<!-- <?php 
require_once '26.php';
$loc = $_POST["location"];
$datetime = date('m_d_Y_h_i_s', time());
$loc2 = $datetime . '.txt';
var_dump($loc);
var_dump($loc2);

if (!copy($loc, $loc2)) {
    echo "Error al copiar $loc ...\n";
}
else
{
    echo "Se copio el fichero correctamente a $loc2";
}
?>

<?php 
require_once '27.php';
$loc = $_POST["location"];
$datetime = date('m_d_Y_h_i_s', time());
$loc2 = $datetime . '.txt';
var_dump($loc);
var_dump($loc2);

if (!copy($loc, $loc2)) {
    echo "Error al copiar $loc ...\n";
}
else
{
    echo "Se copio el fichero correctamente a $loc2";
}
?>-->
