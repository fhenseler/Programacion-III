<?php
require_once ("clases/usuario.php");
require_once ("clases/mensaje.php");
require_once ("clases/inscripcion.php");
require_once ("clases/archivo.php");

date_default_timezone_set('America/Argentina/Buenos_Aires');

$caso = isset($_POST['caso']) ? $_POST['caso'] : NULL;
if($caso == NULL)
{
	$caso = isset($_GET['caso']) ? $_GET['caso'] : NULL;
}

switch($caso)
{
	case "mensajes":

		Mensaje::CrearTabla();
		break;
		
	case "crearUsuario":

		$email = isset($_POST['email']) ? $_POST['email'] : NULL;
		$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : NULL;
		$apellido = isset($_POST['apellido']) ? $_POST['apellido'] : NULL;
		$foto = isset($_FILES['foto']) ? $_FILES['foto'] : NULL;
		if(Archivo::Subir($foto))
		{
			$p = new Usuario($nombre, $apellido, $email, $foto);
			if($p->ExisteUsuario() == false)
			{		
				Usuario::CargarUsuario($p);
				echo 'Usuario creado correctamente!';
			}
		}
		break;

	case "modificarUsuario":
		
		$email = isset($_POST['email']) ? $_POST['email'] : NULL;
		$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : NULL;
		$apellido = isset($_POST['apellido']) ? $_POST['apellido'] : NULL;
		$foto = isset($_FILES['foto']) ? $_FILES['foto'] : NULL;

		$p = new Usuario($nombre, $apellido, $email, $foto);

		if(Archivo::Subir($foto))
		{
			$p = new Usuario($nombre, $apellido, $email, $foto);
			if($p->ExisteUsuario() == true)
			{		
				Usuario::Modificar($p);
				echo 'Usuario modificado correctamente!';
			}
		}
		break;
		
	case "mensajesRecibidos":

		$emailRemitente = isset($_GET['emailRemitente']) ? $_GET['emailRemitente'] : NULL;
		$emailDestinatario = isset($_GET['emailDestinatario']) ? $_GET['emailDestinatario'] : NULL;
		$mensaje = isset($_GET['mensaje']) ? $_GET['mensaje'] : NULL;
		$foto = isset($_FILES['foto']) ? $_FILES['foto'] : NULL;

		$p = new Mensaje($emailRemitente, $emailDestinatario, $mensaje, $foto);
		print_r($p->ConsultarMensajesRecibidos());
		break;

	case "mensajesEnviados":

	$emailRemitente = isset($_GET['emailRemitente']) ? $_GET['emailRemitente'] : NULL;
	$emailDestinatario = isset($_GET['emailDestinatario']) ? $_GET['emailDestinatario'] : NULL;
	$mensaje = isset($_GET['mensaje']) ? $_GET['mensaje'] : NULL;
	$foto = isset($_FILES['foto']) ? $_FILES['foto'] : NULL;

	$p = new Mensaje($emailRemitente, $emailDestinatario, $mensaje, $foto);
	print_r($p->ConsultarMensajesEnviados());
	break;
	
	case "listarUsuarios":
	
		Usuario::CrearTabla();
		break;

	case "cargarMensaje":

		$emailRemitente = isset($_POST['emailRemitente']) ? $_POST['emailRemitente'] : NULL;
		$emailDestinatario = isset($_POST['emailDestinatario']) ? $_POST['emailDestinatario'] : NULL;
		$mensaje = isset($_POST['mensaje']) ? $_POST['mensaje'] : NULL;
		$foto = isset($_FILES['foto']) ? $_FILES['foto'] : NULL;

		$p = new Mensaje($emailRemitente, $emailDestinatario, $mensaje, $foto);
		// if($p->ExisteMensaje() == false)
		// {		
		Mensaje::CargarMensaje($p);
		if($p->GetFoto() != NULL)
		{
			Archivo::Subir($p->GetFoto());
		}
		echo 'Mensaje cargado correctamente!';
		// }
		break;
	
	default:
		echo ":(";
}
?>