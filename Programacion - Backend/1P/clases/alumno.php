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
//--METODO DE CLASE
	public static function TraerUnAlumno($apellido) 
	{
		$alumno = new Alumno();
		
		$a = fopen("./archivos/alumnos.json", "r");
		
		while(!feof($a)){
			$arr = explode("-", fgets($a));

			if(count($arr) > 1)
			{
				if($arr[0] == $apellido)
				{
					$alumno->SetFoto($arr[3]);
					$alumno->SetEmail($arr[2]);
					$alumno->SetNombre($arr[1]);
					$alumno->SetApellido($arr[0]);
					break;
				}
			}
		}
		fclose($a);
		
		return $alumno;				
	}
	
	public static function TraerTodosLosAlumnos()
	{
		// Read JSON file
		$json = file_get_contents('./archivos/alumnos.json');

		//Decode JSON
		$json_data = json_decode( preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $json), true );
		//$json_data = json_decode($json,true);
		var_dump($json_data);
		return $json_data;
    }
	
	public static function Modificar($p)
	{
		$arrAlumnos = array();
		$jsonAlumnos = Alumno::TraerTodosLosAlumnos();
		var_dump($jsonAlumnos);
		foreach ($jsonAlumnos as $alumno) 
		{
			if($alumno["email"] == $p->email)
			{
				Alumno::CargarAlumno($p);
				//Revisar
			}		
		}
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODOS DE INSTANCIA
	public static function CargarAlumno($alumno)
	{
		$archivo=fopen("./archivos/alumnos.json", "a");		
		$ahora=date("Y-m-d H:i:s"); 
		$renglon=json_encode($alumno->jsonSerialize())."=>".$ahora."\n";
		fwrite($archivo, $renglon); 		 
		fclose($archivo);
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
//--------------------------------------------------------------------------------//

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
			//Revisar
			echo "<td>$alumno->apellido</td>";
			echo "<td>$alumno->email</td>";
			echo "<td>$alumno->foto</td>";
			echo "</tr>";
		}
		// Close the table
		echo "</table>";
	}
}