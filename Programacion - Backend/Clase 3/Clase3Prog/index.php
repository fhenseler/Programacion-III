<?php
require_once 'producto.php';

var_dump($_FILES);

if(isset($_POST['nombre']) && isset($_POST['codBarra']) && isset($_FILES['test_imagen']))
{
    $target_path = './fotos/';
    $img1path = $target_path . basename($_FILES['test_imagen']['name']);

    if(move_uploaded_file($_FILES['test_imagen']['tmp_name'], $img1path))
    {
        echo 'The file ' . basename($_FILES['test_imagen']['name']) . ' has been uploaded.' . '<br>';
    }
    else
    {
        echo 'ERROR!';
    }

    $producto = new Producto($_POST['nombre'], $_POST['codBarra'], $_FILES['test_imagen']['name']);
    var_dump($producto, $producto->ToString());
    $producto->jsonSerialize();
    echo json_encode($producto);
}
?>