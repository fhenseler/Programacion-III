<?php
require_once ("clases/alumno.php");
require_once ("clases/materia.php");
require_once ("clases/inscripciones.php");
require_once ("clases/archivo.php");

//$caso = isset($_POST['caso']) ? $_POST['caso'] : NULL;
$caso = isset($_GET['caso']) ? $_GET['caso'] : NULL;
var_dump($caso);

switch($caso)
{
	case "inscripciones":
		Inscripciones::CrearTabla();
		$array = Inscripciones::Leer();
		var_dump($array);
		if(!Inscripciones::CrearTablaJson())
		{
			echo "Error al generar tabla";
			break;
		}
		break;
		
	case "cargarAlumno":

		// $res = Archivo::Subir();

		// if(!$res["Exito"]){
		// 	echo $res["Mensaje"];
		// 	break;
		// }
		$email = isset($_POST['email']) ? $_POST['email'] : NULL;
		$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : NULL;
		$apellido = isset($_POST['apellido']) ? $_POST['apellido'] : NULL;
		// $foto = $res["PathTemporal"];
		$foto = isset($_POST['foto']) ? $_POST['foto'] : NULL;
		$p = new Alumno($nombre, $apellido, $email, $foto);
		$p->CargarAlumno();
		//header("Location:./index.php");
		break;

	case "modificarAlumno":
		
	$email = isset($_POST['email']) ? $_POST['email'] : NULL;
	$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : NULL;
	$apellido = isset($_POST['apellido']) ? $_POST['apellido'] : NULL;
	// $foto = $res["PathTemporal"];
	$foto = isset($_POST['foto']) ? $_POST['foto'] : NULL;
	$p = new Alumno($nombre, $apellido, $email, $foto);
	Alumno::Modificar($p);
	break;
		
	case "consultarAlumno":
	$email = isset($_GET['email']) ? $_GET['email'] : NULL;
	$nombre = isset($_GET['nombre']) ? $_GET['nombre'] : NULL;
	$apellido = isset($_GET['apellido']) ? $_GET['apellido'] : NULL;
	// $foto = $res["PathTemporal"];
	$foto = isset($_GET['foto']) ? $_GET['foto'] : NULL;

	$p = new Alumno($nombre, $apellido, $email, $foto);
		if(!$p->ConsultarAlumno($apellido))
		{
			echo "Error al consultar alumno";
			break;
		}
		else
		{
			print_r($p->ConsultarAlumno($apellido));
		}
		break;
	
	case "alumnos":
	{
		Alumno::CrearTabla();
		$array = Alumno::Leer();
		var_dump($array);
		Alumno::CrearTabla();
		break;
	}

	case "cargarMateria":
	
		$codigo = isset($_POST['codigo']) ? $_POST['codigo'] : NULL;
		$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : NULL;
		$cupo = isset($_POST['cupo']) ? $_POST['cupo'] : NULL;
		$aula = isset($_POST['aula']) ? $_POST['aula'] : NULL;

		$p = new Materia($nombre, $codigo, $cupo, $aula);
		echo $p->ToString();
		$p->CargarMateria();
		break;

	case "inscribirAlumno":

	$email = isset($_GET['email']) ? $_GET['email'] : NULL;
	$nombre = isset($_GET['nombre']) ? $_GET['nombre'] : NULL;
	$apellido = isset($_GET['apellido']) ? $_GET['apellido'] : NULL;
	$nombreMateria = isset($_GET['nombreMateria']) ? $_GET['nombreMateria'] : NULL;
	$codigoMateria = isset($_GET['codigoMateria']) ? $_GET['codigoMateria'] : NULL;
	Materia::InscribirAlumno($nombre, $apellido, $email, $nombreMateria, $codigoMateria);
	break;
	
	default:
		echo ":(";
}
?>