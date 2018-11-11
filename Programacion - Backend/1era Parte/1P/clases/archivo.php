<?php
class Archivo
{
	public static function Subir()
	{
	//INDICO CUAL SERA EL DESTINO DEL ARCHIVO SUBIDO
	$destino = "img/" . $_FILES["foto"]["name"];

	$uploadOk = TRUE;

	//PATHINFO RETORNA UN ARRAY CON INFORMACION DEL PATH
	//RETORNA : NOMBRE DEL DIRECTORIO; NOMBRE DEL ARCHIVO; EXTENSION DEL ARCHIVO

	//PATHINFO_DIRNAME - retorna solo nombre del directorio
	//PATHINFO_BASENAME - retorna solo el nombre del archivo (con la extension)
	//PATHINFO_EXTENSION - retorna solo extension
	//PATHINFO_FILENAME - retorna solo el nombre del archivo (sin la extension)

	//var_dump(pathinfo($destino));
	//die();

	$tipoArchivo = pathinfo($destino, PATHINFO_EXTENSION);

	//VERIFICO QUE EL ARCHIVO NO EXISTA
	if (file_exists($destino)) 
	{
		echo "El archivo ya existe. Verifique!!!";
		$uploadOk = FALSE;
	}
	//VERIFICO EL TAMAÑO MAXIMO QUE PERMITO SUBIR
	if ($_FILES["foto"]["size"] > 10000000) 
	{
		echo "El archivo es demasiado grande. Verifique!!!";
		$uploadOk = FALSE;
	}

	//VERIFICO SI ES UNA IMAGEN O NO
	//var_dump(getimagesize($_FILES["foto"]["tmp_name"]));
	//die();

	//OBTIENE EL TAMAÑO DE UNA IMAGEN, SI EL ARCHIVO NO ES UNA
	//IMAGEN, RETORNA FALSE
	$esImagen = getimagesize($_FILES["foto"]["tmp_name"]);

	if($esImagen === FALSE) //NO ES UNA IMAGEN
	{
		//SOLO PERMITO CIERTAS EXTENSIONES
		if($tipoArchivo != "doc" && $tipoArchivo != "txt" && $tipoArchivo != "rar") 
		{
			echo "Solo son permitidos archivos con extension DOC, TXT o RAR.";
			$uploadOk = FALSE;
		}
	}
	else // ES UNA IMAGEN
	{
		//SOLO PERMITO CIERTAS EXTENSIONES
		if($tipoArchivo != "jpg" && $tipoArchivo != "jpeg" && $tipoArchivo != "gif" && $tipoArchivo != "png") 
		{
			echo "Solo son permitidas imagenes con extension JPG, JPEG, PNG o GIF.";
			$uploadOk = FALSE;
		}

	}

	//VERIFICO SI HUBO ALGUN ERROR, CHEQUEANDO $uploadOk
	if ($uploadOk === FALSE) 
	{

		echo "<br/>NO SE PUDO SUBIR EL ARCHIVO.";

	}
	else //MUEVO EL ARCHIVO DEL TEMPORAL AL DESTINO FINAL
	{
		if (move_uploaded_file($_FILES["foto"]["tmp_name"], $destino)) 
		{
			echo "<br/>El archivo ". basename( $_FILES["foto"]["name"]). " ha sido subido exitosamente.";
		} 
		else 
		{
		echo "<br/>Lamentablemente ocurri&oacute; un error y no se pudo subir el archivo.";
		}
	}
	return $uploadOk;
}

public static function Borrar($path)
{
	return unlink($path);
}

// MoverArchivo(origen, destino)
// Cambiar fecha del archivo original y meterlo en Backup
// Guardar el nuevo archivo en la carpeta actual
// (Al subir la foto, la foto se guarda SI O SI en la carpeta actual)
public static function Mover($pathOrigen, $pathDestino)
{
	return copy($pathOrigen, $pathDestino);
}
}
?>