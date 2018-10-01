<?php
require_once ("clases/alumno.php");
require_once ("clases/materia.php");
require_once ("clases/inscripcion.php");
require_once ("clases/archivo.php");

date_default_timezone_set('America/Argentina/Buenos_Aires');

$caso = isset($_POST['caso']) ? $_POST['caso'] : NULL;
//$caso = isset($_GET['caso']) ? $_GET['caso'] : NULL;
var_dump($caso);

switch($caso)
{
	case "inscripciones":

		Inscripcion::CrearTablaJson();
		break;
		
	case "cargarAlumno":

		$email = isset($_POST['email']) ? $_POST['email'] : NULL;
		$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : NULL;
		$apellido = isset($_POST['apellido']) ? $_POST['apellido'] : NULL;
		$foto = isset($_FILES['foto']) ? $_FILES['foto'] : NULL;
		if(Archivo::Subir($foto))
		{
			$p = new Alumno($nombre, $apellido, $email, $foto);
			if($p->ExisteAlumno() == false)
			{		
				Alumno::CargarAlumno($p);
				echo 'Alumno cargado correctamente!';
			}
		}
		//header("Location:./index.php");
		break;

	case "modificarAlumno":
		
		$email = isset($_POST['email']) ? $_POST['email'] : NULL;
		$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : NULL;
		$apellido = isset($_POST['apellido']) ? $_POST['apellido'] : NULL;
		// $foto = $res["PathTemporal"];
		$foto = isset($_FILES['foto']) ? $_FILES['foto'] : NULL;
		$p = new Alumno($nombre, $apellido, $email, $foto);
		if(Archivo::Subir($foto))
		{
			$p = new Alumno($nombre, $apellido, $email, $foto);
			if($p->ExisteAlumno() == true)
			{		
				Alumno::Modificar($p);
				echo 'Alumno modificado correctamente!';
			}
		}
		break;
		
	case "consultarAlumno":

		$email = isset($_GET['email']) ? $_GET['email'] : NULL;
		$nombre = isset($_GET['nombre']) ? $_GET['nombre'] : NULL;
		$apellido = isset($_GET['apellido']) ? $_GET['apellido'] : NULL;
		// $foto = $res["PathTemporal"];
		$foto = isset($_FILES['foto']) ? $_FILES['foto'] : NULL;

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
	
		Alumno::CrearTabla();
		break;

	case "cargarMateria":

		$codigo = isset($_POST['codigo']) ? $_POST['codigo'] : NULL;
		$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : NULL;
		$cupo = isset($_POST['cupo']) ? $_POST['cupo'] : NULL;
		$aula = isset($_POST['aula']) ? $_POST['aula'] : NULL;

		$p = new Materia($nombre, $codigo, $cupo, $aula);
		if($p->ExisteMateria() == false)
		{		
			Materia::CargarMateria($p);
			echo 'Materia cargada correctamente!';
		}
		break;

	case "inscribirAlumno":

		$email = isset($_GET['email']) ? $_GET['email'] : NULL;
		$nombre = isset($_GET['nombre']) ? $_GET['nombre'] : NULL;
		$apellido = isset($_GET['apellido']) ? $_GET['apellido'] : NULL;
		$nombreMateria = isset($_GET['nombreMateria']) ? $_GET['nombreMateria'] : NULL;
		$codigoMateria = isset($_GET['codigoMateria']) ? $_GET['codigoMateria'] : NULL;

		$p = new Inscripcion($nombre, $apellido, $email, $nombreMateria, $codigoMateria);
		if($p->ExisteInscripcion() == false)
		{		
			Inscripcion::CargarInscripcion($p);
			echo 'Inscripcion cargada correctamente!';
		}
		break;
	
	default:
		echo ":(";
}
?>