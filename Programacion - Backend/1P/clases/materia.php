<?php
class Materia implements JsonSerializable
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	private $nombre;
 	private $codigo;
  	private $cupos;
  	private $aula;
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
	public function GetCodigo()
	{
		return $this->codigo;
	}
	public function GetNombre()
	{
		return $this->nombre;
	}
	public function GetCupos()
	{
		return $this->cupos;
	}
	public function GetAula()
	{
		return $this->aula;
	}

	public function SetCodigo($valor)
	{
		$this->codigo = $valor;
	}
	public function SetNombre($valor)
	{
		$this->nombre = $valor;
	}
	public function SetCupos($valor)
	{
		$this->cupos = $valor;
	}
	public function SetAula($valor)
	{
		$this->aula = $valor;
	}
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR

	public function __construct($nombre, $codigo, $cupos, $aula)
	{
		$this->nombre = $nombre;
		$this->codigo = $codigo;
		$this->cupos = $cupos;
		$this->aula = $aula;
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->nombre."-".$this->codigo."-".$this->cupos."-".$this->aula;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODOS
	
	public static function TraerTodasLasMaterias()
	{
		// Read JSON file
		$json = file_get_contents('./archivos/materias.json');

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

	public function ExisteMateria()
	{
		$jsonMaterias = Materia::TraerTodasLasMaterias();
		$retorno = false;
		if($jsonMaterias != NULL)
		{
			foreach ($jsonMaterias as $materia) 
			{
				if(strtolower($materia["codigo"]) == $this->codigo)
				{
					echo 'Error! El codigo de materia ' . $this->codigo . ' ya se encuentra registrado.';
					$retorno = true;
					break;
				}
			}
		}
		else
		{
			echo 'Todavia no hay materias registradas en el sistema';
		}
		return $retorno;
	}

	public static function CargarMateria($p)
	{
		$newArray = array();
		$retorno = false;
		$jsonMaterias = Materia::TraerTodasLasMaterias();
		$archivo=fopen("./archivos/materias.json", "w");
		if($jsonMaterias == NULL)
		{
			array_push($newArray, $p);
			fwrite($archivo, json_encode($newArray, JSON_PRETTY_PRINT));
			fclose($archivo);
			$retorno = true;	
		}
		else
		{
			array_push($jsonMaterias, $p);
			fwrite($archivo, json_encode($jsonMaterias, JSON_PRETTY_PRINT));
			fclose($archivo);
			$retorno = true;
		}
		return $retorno;
	}	

	public static function BorrarMateria($p)
	{
		$jsonMaterias = Materia::TraerTodasLasMaterias();
		$archivo=fopen("./archivos/materias.json", "w");
		$i = 0;
		foreach($jsonMaterias as $materia) 
		{
			$materia = json_encode($materia, true);
			$materia = json_decode($materia, true);
			if($materia['codigo'] == $p->GetCodigo()) 
			{
				unset($jsonMaterias[$i]);
			}
			$i++;
		}
		fwrite($archivo, json_encode($jsonMaterias, JSON_PRETTY_PRINT));
		fclose($archivo);
	}

	public function jsonSerialize()
    {
        return
        [
                'nombre'   => $this->GetNombre(),
                'codigo' => $this->GetCodigo(),
                'cupos' => $this->GetCupos(),
                'aula' => $this->GetAula()
        ];
	}

	public static function ConsultarMateria($codigo)
    {
		$retorno = false;
		
		$jsonMaterias = Materia::TraerTodasLasMaterias();
		foreach ($jsonMaterias as $materia) 
		{
			if((int)$materia["codigo"] == $codigo)
			{
				if((int)$materia["cupos"] > 0)
				{
					$retorno = true;
					break;
				}
				else
				{
					echo 'Esta materia no tiene cupos disponibles!';
					break;
				}
			}
		}
		if($retorno == false)
		{
			echo 'La materia no existe!';
		}
		return $retorno;
	}
//--------------------------------------------------------------------------------//

}

?>