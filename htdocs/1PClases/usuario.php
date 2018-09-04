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
	  	return "Nombre: ".$this->_nombre." - "."Clave: ".$this->_clave."<br>";
	}

    public static function ToJSON()
    {

    }

}
?>