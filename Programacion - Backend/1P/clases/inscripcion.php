<?php
class Inscripcion implements jsonSerializable
{
	//--ATRIBUTOS
	private $nombre;
 	private $apellido;
  	private $email;
	private $nombreMateria;
	private $codigoMateria;
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
	public function GetCodigoMateria()
	{
		return $this->codigoMateria;
	}
	public function GetNombre()
	{
		return $this->nombre;
	}
	public function GetApellido()
	{
		return $this->apellido;
	}
	public function GetEmail()
	{
		return $this->email;
	}
	public function GetNombreMateria()
	{
		return $this->nombreMateria;
	}

	public function SetCodigoMateria($valor)
	{
		$this->codigoMateria = $valor;
	}
	public function SetNombre($valor)
	{
		$this->nombre = $valor;
	}
	public function SetApellido($valor)
	{
		$this->apellido = $valor;
	}
	public function SetNombreMateria($valor)
	{
		$this->nombreMateria = $valor;
	}
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR

	public function __construct($nombre, $apellido, $email, $nombreMateria, $codigoMateria)
	{
		$this->nombre = $nombre;
		$this->nombreMateria = $nombreMateria;
		$this->codigoMateria = $codigoMateria;
		$this->apellido = $apellido;
		$this->email = $email;
	}

//--------------------------------------------------------------------------------//
    
    public static function CrearTablaJson()
    {
		$lista = Inscripcion::TraerTodasLasInscripciones();
		$archivo = fopen("archivos/tablaInscripciones.php","w");

		$TablaCompleta=" <table border=1><th> Nombre </th><th> Apellido </th><th> E-Mail </th><th> Materia </th><th> Codigo </th>";
		$renglon="";
		
		foreach ($lista as $inscripto) 
		{
			$renglon= $renglon."<tr> <td> ".$inscripto["nombre"]." </td> <td> ". $inscripto["apellido"]."</td> <td> ".$inscripto["email"] ." </td><td> ".$inscripto["nombreMateria"] ." </td><td> ".$inscripto["codigoMateria"] ." </td></tr>" ; 
  		}
		$TablaCompleta =$TablaCompleta.$renglon." </table>";

		fwrite($archivo, $TablaCompleta);
		echo $TablaCompleta;
	}

	public static function CargarInscripcion($p)
	{
		$newArray = array();
		$retorno = false;
		$jsonInscripciones = Inscripcion::TraerTodasLasInscripciones();
		$archivo=fopen("./archivos/inscripciones.json", "w");
		if($jsonInscripciones == NULL)
		{
			array_push($newArray, $p);
			fwrite($archivo, json_encode($newArray, JSON_PRETTY_PRINT));
			fclose($archivo);
			$retorno = true;	
		}
		else
		{
			array_push($jsonInscripciones, $p);
			var_dump($jsonInscripciones);
			fwrite($archivo, json_encode($jsonInscripciones, JSON_PRETTY_PRINT));
			fclose($archivo);
			$retorno = true;
		}
		return $retorno;
	}

	public function ExisteInscripcion()
	{
		$jsonInscripciones = Inscripcion::TraerTodasLasInscripciones();
		$retorno = false;
		if($jsonInscripciones != NULL)
		{
			foreach ($jsonInscripciones as $inscripcion) 
			{
				if($inscripcion === $this)
				{
					echo 'Error! Este alumno ya se inscribio en esta materia';
					$retorno = true;
					break;
				}
			}
		}
		else
		{
			echo 'Todavia no hay inscripciones registradas en el sistema';
		}
		return $retorno;
	}

	public static function TraerTodasLasInscripciones()
	{
		// Read JSON file
		$json = file_get_contents('./archivos/inscripciones.json');

		for ($i = 0; $i <= 31; ++$i)
		{
			$json = str_replace(chr($i), "", $json); 
		}
		$json = str_replace(chr(127), "", $json);

		if (0 === strpos(bin2hex($json), 'efbbbf')) {
			$json= substr($json, 3);
		 }

		//Decode JSON
		$json= json_decode($json, true);
		return $json;
	}

	public function jsonSerialize()
    {
        return
        [
			'nombre'   => $this->GetNombre(),
			'apellido' => $this->GetApellido(),
			'email' => $this->GetEmail(),
			'nombreMateria' => $this->GetNombreMateria(),
			'codigoMateria' => $this->GetCodigoMateria()
		];	
	}
}
?>