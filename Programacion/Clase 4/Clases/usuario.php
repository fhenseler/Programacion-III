<?php
public class Usuario
{
    public $_nombre;
    public $_clave;

    public function __construct($nombre, $clave)
    {
        $this->_nombre = $nombre;
        $this->_clave = $clave;
    }

    public static function Guardar($nombre)
	{
		$archivo=fopen("archivos/listadoNombres.txt", "a");//escribe y mantiene la informacion existente		
		$ahora=date("Y-m-d H:i:s"); 
		$renglon=$nombre."=>".$ahora."\n";
		fwrite($archivo, $renglon); 		 
		fclose($archivo);
    }
    
    public static function GuardarListado($listado)
	{
		$archivo=fopen("archivos/listadoNombres.txt", "w"); 	
		foreach ($listado as $nombre) 
		{
	 		  if($nombre[0]!=""){
	 		  		$dato=$nombre[0] ."=>".$nombre[1]."\n" ;
					fwrite($archivo, $dato);
	 		  }	 	
		}
		fclose($archivo);
	}

    public static function toString($myVar)
    {
        $myText = print_r($myVar,true)."<br>";
        return $myText;
    }

    public static function toJSON()
    {
        $fh = fopen('datos.json', 'a');

        fwrite($fh, print_r($_REQUEST, true));
      
        fclose($fh);
    }

}
?>