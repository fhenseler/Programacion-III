<?php
include_once 'clases/AccesoDatos.php';
include_once 'clases/cd.php';

$opcion = isset($_POST['opcion']) ? $_POST['opcion'] : NULL;
if($opcion == NULL)
{
	$opcion = isset($_GET['opcion']) ? $_GET['opcion'] : NULL;
}

switch($opcion)
{
    case "mostrar":
    cd::TraerTodoLosCdsJSON();
    break;

    case "alta":
    $titulo = isset($_POST['titulo']) ? $_POST['titulo'] : NULL;
    $cantante = isset($_POST['cantante']) ? $_POST['cantante'] : NULL;
    $año = isset($_POST['año']) ? $_POST['año'] : NULL;
    $cd = new cd($titulo, $cantante, $año);
    $cd->InsertarElCd();
    break;

    case "baja":
    $id = isset($_GET['id']) ? $_GET['id'] : NULL;
    cd::BorrarCdPorId($id);
    break;

    //recibe un id existente (reutilizar metodo de borrar para verificar, HACER CON SELECT ID)
    //si existe, modifico
    //siempre usar las funciones CON PARAMETROS (evitar SQL injection)
    //ARREGLAR
    case "modificar":
    $titulo = isset($_POST['titulo']) ? $_POST['titulo'] : NULL;
    $cantante = isset($_POST['cantante']) ? $_POST['cantante'] : NULL;
    $año = isset($_POST['año']) ? $_POST['año'] : NULL;
    $id = isset($_POST['id']) ? $_POST['id'] : NULL;
    $cd = new cd($titulo, $cantante, $año);
    $cd->ModificarCdParametros();
    break;

    default:
    echo "No seleccionaste ninguna opción!";
    break;
}
?>