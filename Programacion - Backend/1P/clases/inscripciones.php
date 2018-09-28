<?php
class Inscripciones
{
    public static function Leer()
	{
		// Read JSON file
		$json = file_get_contents('./archivos/materias.json');

		//Decode JSON
		$json_data = json_decode( preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $json), true );
		//$json_data = json_decode($json,true);

		return $json_data;
	}
    
    public static function CrearTablaJson()
    {
        $lista = Inscripciones::Leer();
		$archivo = fopen("archivos/tablaInscripciones.php","w");

		$TablaCompleta=" <table border=1><th> Nombre </th><th> Apellido </th><th> E-Mail </th><th> Materia </th><th> Codigo </th>";
		$renglon="";
		
		foreach ($lista as $inscripto) 
		{
			$renglon= $renglon."<tr> <td> ".$inscripto[0] ." </td> <td> ". $inscripto[1]."</td> <td> ".$inscripto[2] ." </td><td> ".$inscripto[3] ." </td><td> ".$inscripto[4] ." </td></tr>" ; 
		
  		}
		$TablaCompleta =$TablaCompleta.$renglon." </table>";

		fwrite($archivo, $TablaCompleta);
	}
}
?>