<?php
class Alumno implements JsonSerializable
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	private $nombre;
 	private $apellido;
  	private $email;
  	private $foto;
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
	public function GetApellido()
	{
		return $this->apellido;
	}
	public function GetNombre()
	{
		return $this->nombre;
	}
	public function GetEmail()
	{
		return $this->email;
	}
	public function GetFoto()
	{
		return $this->foto;
	}

	public function SetApellido($valor)
	{
		$this->apellido = $valor;
	}
	public function SetNombre($valor)
	{
		$this->nombre = $valor;
	}
	public function SetEmail($valor)
	{
		$this->email = $valor;
	}
	public function SetFoto($valor)
	{
		$this->foto = $valor;
	}
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
    public function __construct($nombre, $apellido, $email, $foto)
	{
		if($email != NULL)
		{	
			$this->nombre = $nombre;
			$this->apellido = $apellido;
			$this->email = $email;
			$this->foto = $foto;
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->apellido."-".$this->nombre."-".$this->email."-".$this->foto . PHP_EOL;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODOS
	
	public static function TraerTodosLosAlumnos()
	{
		// Read JSON file
		$json = file_get_contents('./archivos/alumnos.json');

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
	
	public static function Modificar($p)
	{
		$hoy = date('m-d-Y_hia');
		$jsonAlumnos = Alumno::TraerTodosLosAlumnos();
		array_push($jsonAlumnos, $p);
		$archivo=fopen("./archivos/alumnos.json", "w");
		$i = 0;
		foreach($jsonAlumnos as $alumno) 
		{
			$oldname = $alumno["foto"]["name"];
			$alumno = json_encode($alumno, true);
			$alumno = json_decode($alumno, true);
			if($alumno['email'] == $p->GetEmail()) 
			{	
				unset($jsonAlumnos[$i]);
				Archivo::Mover('./archivos/' . $oldname, './backup/' . $p->GetApellido() . '-' . $hoy . '.' . "jpg");
				unlink('./archivos/' . $oldname);
				Alumno::CargarAlumno($p);
				break;
			}
			$i++;
		}
		fwrite($archivo, json_encode($jsonAlumnos, JSON_PRETTY_PRINT));
		fclose($archivo);
	}

	public static function BorrarAlumno($p)
	{
		$jsonAlumnos = Alumno::TraerTodosLosAlumnos();
		$archivo=fopen("./archivos/alumnos.json", "w");
		$i = 0;
		foreach($jsonAlumnos as $alumno) 
		{
			$alumno = json_encode($alumno, true);
			$alumno = json_decode($alumno, true);
			if($alumno['email'] == $p->GetEmail()) 
			{
				unset($jsonAlumnos[$i]);
				break;
			}
			$i++;
		}
		fwrite($archivo, json_encode($jsonAlumnos, JSON_PRETTY_PRINT));
		fclose($archivo);
	}

	public static function CargarAlumno($p)
	{
		$newArray = array();
		$retorno = false;
		$jsonAlumnos = Alumno::TraerTodosLosAlumnos();
		$archivo=fopen("./archivos/alumnos.json", "w");
		if($jsonAlumnos == NULL)
		{
			array_push($newArray, $p);
			fwrite($archivo, json_encode($newArray, JSON_PRETTY_PRINT));
			fclose($archivo);
			$retorno = true;	
		}
		else
		{
			array_push($jsonAlumnos, $p);
			fwrite($archivo, json_encode($jsonAlumnos, JSON_PRETTY_PRINT));
			fclose($archivo);
			$retorno = true;
		}
		return $retorno;
	}	
	
	public function ExisteAlumno()
	{
		$jsonAlumnos = Alumno::TraerTodosLosAlumnos();
		$retorno = false;
		if($jsonAlumnos != NULL)
		{
			foreach ($jsonAlumnos as $alumno) 
			{
				if(strtolower($alumno["email"]) == $this->email)
				{
					echo 'El email ' . $this->email . ' ya se encuentra registrado.';
					$retorno = true;
					break;
				}
			}
		}
		else
		{
			echo 'Todavia no hay alumnos registrados en el sistema';
		}
		return $retorno;
	}

	public static function TraerAlumno()
	{
		$jsonAlumnos = Alumno::TraerTodosLosAlumnos();
		if($jsonAlumnos != NULL)
		{
			foreach ($jsonAlumnos as $alumno) 
			{
				if(strtolower($alumno["email"]) == $this->email)
				{
					return $alumno;
				}
			}
		}
	}

    
    public function ConsultarAlumno($apellido)
    {
		$jsonAlumnos = Alumno::TraerTodosLosAlumnos();
		$arrFiltrado = array("key" => "value");
		$cantEncontrados = 0;
		
		foreach ($jsonAlumnos as $alumno) 
		{
			if(strtolower($alumno["apellido"]) == strtolower($apellido))
			{
				array_push($arrFiltrado, $alumno);
				$cantEncontrados++;
			}
		}
        if($cantEncontrados == 0)
        {
            return 'No existe alumno con apellido ' . $apellido;
        }
        else
        {
            return $arrFiltrado;
		}
    }

    public function jsonSerialize()
    {
        return
        [
			'nombre'   => $this->GetNombre(),
			'apellido' => $this->GetApellido(),
			'email' => $this->GetEmail(),
			'foto' => $this->GetFoto()
		];	
	}

	public static function CrearTabla()
    {
		$jsonAlumnos = Alumno::TraerTodosLosAlumnos();
		// Open the table
		echo "<table>";
		// Cycle through the array
		foreach ($jsonAlumnos as $alumno) {
			// Output a row
			echo "<tr>";
			echo "<td>" . $alumno['nombre'] . "</td>";
			echo "<td>" . $alumno['apellido'] . "</td>";
			echo "<td>" . $alumno['email'] . "</td>";
			echo "<td>" . $alumno['foto'] . "</td>";
			echo "</tr>";
		}
		// Close the table
		echo "</table>";
	}
	//--------------------------------------------------------------------------------//	
}
?>