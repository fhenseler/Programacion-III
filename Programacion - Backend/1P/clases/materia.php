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
//--METODO DE CLASE
	public static function TraerUnaMateria($codigo) 
	{
		$materia = new Materia();
		
		$a = fopen("./archivos/materias.json", "r");
		
		while(!feof($a)){
			$arr = explode("-", fgets($a));

			if(count($arr) > 1){
				if((int)$arr[2] == $codigo){
					$materia->SetAula($arr[3]);
					$materia->SetCodigo($arr[2]);
					$materia->SetNombre($arr[1]);
					$materia->SetCupos($arr[0]);
					break;
				}
			}
		}
		fclose($a);
		
		return $materia;				
	}
	
	public static function TraerTodasLasMaterias()
	{
		// Read JSON file
		$json = file_get_contents('./archivos/materias.json');

		//Decode JSON
		$json_data = json_decode( preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $json), true );
		//$json_data = json_decode($json,true);

		return $json_data;
	}
	
	// public static function Borrar($codigo)
	// {	
	// 	$arrMaterias = array();
		
	// 	$a = fopen("./archivos/materias.json", "r");
		
	// 	while(!feof($a)){
		
	// 		$arr = explode("-", fgets($a));

	// 		if(count($arr) > 1){
	// 			if((int)$arr[2] == $codigo){
	// 				continue;
	// 			}
	// 			$materia = new Materia();
	// 			$materia->SetAula($arr[3]);
	// 			$materia->SetCodigo($arr[2]);
	// 			$materia->SetNombre($arr[1]);
	// 			$materia->SetCupos($arr[0]);
				
	// 			array_push($arrMaterias, $materia);
	// 		}
	// 	}
	// 	fclose($a);
		
	// 	$a = fopen("./archivos/materias.json", "w");
	// 	fclose($a);
		
	// 	foreach($arrMaterias AS $p){
	// 		$p->Insertar();
	// 	}
		
	// }
	
	// public static function Modificar($p)
	// {
	// 	$arrMaterias = array();
		
	// 	$a = fopen("./archivos/materias.json", "r");
		
	// 	while(!feof($a)){
		
	// 		$arr = explode("-", fgets($a));

	// 		if(count($arr) > 1){
	// 			if((int)$arr[2] == $p->GetCodigo()){
	// 				$materia = $p;
	// 			}
	// 			else{
	// 				$materia = new Materia();
	// 				$materia->SetAula($arr[3]);
	// 				$materia->SetCodigo($arr[1]);
	// 				$materia->SetNombre($arr[0]);
	// 				$materia->SetCupos($arr[2] - 1);
	// 			}
	// 			array_push($arrMaterias, $materia);
	// 		}
	// 	}
	// 	fclose($a);
		
	// 	$a = fopen("./archivos/materias.json", "w");
	// 	fclose($a);
		
	// 	foreach($arrMaterias AS $p){
	// 		$p->Insertar();
	// 	}		
	// }

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODOS DE INSTANCIA
	public static function CargarMateria($materia)
	{
		$a = fopen("./archivos/materias.json", "a");
		
		fwrite($a, json_encode($materia->jsonSerialize()) . "\r\n");
		
		fclose($a);
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
					echo '3';
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

	// 4- (2pts.) caso: inscribirmateria (get): Se recibe nombre, apellido, mail del materia, materia y código 
	// de la materia y se guarda en el archivo inscripciones.json restando un cupo a la materia en el archivo 
	// materias.json. Si no hay cupo o la materia no existe informar cada caso particular.
	public static function InscribirAlumno($nombre, $apellido, $mail, $nombreMateria, $codigoMateria)
	{
		if(Materia::ConsultarMateria($codigoMateria))
		{
			$a = fopen("./archivos/inscripciones.json", "a");
			$string = $nombre . ' ' . $apellido . ' ' . $mail . ' ' . $nombreMateria . ' ' . $codigoMateria;
			fwrite($a, json_encode($string) . "\r\n");
			fclose($a);
			echo 'Alumno inscripto correctamente!';
		}
	}
//--------------------------------------------------------------------------------//

}