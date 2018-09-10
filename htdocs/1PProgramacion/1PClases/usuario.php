<?php
class Usuario
{
    //private
    private $_nombre;
    private $_clave;

    public function __construct($nombre, $clave)
    {
        $this->_nombre = $nombre;
        $this->_clave = $clave;
    }

    public function GetNombre()
	{
		return $this->_nombre;
	}
	public function GetClave()
	{
		return $this->_clave;
    }
    
    public function SetNombre($valor)
	{
		$this->_nombre = $valor;
    }
    
	public function SetClave($valor)
	{
		$this->_clave = $valor;
    }
    
    public function ToString()
	{
	  	return "Nombre: ".$this->_nombre." - "."Clave: ".$this->_clave."<br>".PHP_EOL;
	}

    public static function ToJSON()
    {

    }

    public static function Guardar($user)
	{
		$archivo=fopen("./1PArchivos/personas.txt", "a");//escribe y mantiene la informacion existente		
		$ahora=date("Y-m-d H:i:s"); 
		$renglon=$user->ToString()."=>".$ahora."\n";
		fwrite($archivo, $user->ToString()); 		 
		fclose($archivo);
	}


	public static function GuardarListado($listado)
	{
		$archivo=fopen("./1PArchivos/personas.txt", "w"); 	

		foreach ($listado as $persona) 
		{
	 		  if($persona[0]!=""){
	 		  		$dato=$persona[0] ."=>".$persona[1]."\n" ;
					fwrite($archivo, $dato);
	 		  }	 	
		}
		fclose($archivo);
	}

}
?>