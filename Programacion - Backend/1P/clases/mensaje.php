<?php
class Mensaje implements JsonSerializable
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	private $emailRemitente;
 	private $emailDestinatario;
	private $mensaje;
	private $foto;
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
	public function GetEmailDestinatario()
	{
		return $this->emailDestinatario;
	}
	public function GetEmailRemitente()
	{
		return $this->emailRemitente;
	}
	public function GetMensaje()
	{
		return $this->mensaje;
	}
	public function GetFoto()
	{
		return $this->foto;
	}

	public function SetEmailDestinatario($valor)
	{
		$this->emailDestinatario = $valor;
	}
	public function SetEmailRemitente($valor)
	{
		$this->emailRemitente = $valor;
	}
	public function SetMensaje($valor)
	{
		$this->mensaje = $valor;
	}
	public function SetFoto($valor)
	{
		$this->foto = $valor;
	}
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR

	public function __construct($emailRemitente, $emailDestinatario, $mensaje, $foto)
	{
		$this->emailRemitente = $emailRemitente;
		$this->emailDestinatario = $emailDestinatario;
		$this->mensaje = $mensaje;
		$this->foto = $foto;
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->emailRemitente."-".$this->emailDestinatario."-".$this->mensaje."-".$this->foto;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODOS
	
	public static function TraerTodosLosMensajes()
	{
		// Read JSON file
		$json = file_get_contents('./archivos/mensajes.json');

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

	public function ExisteMensaje()
	{
		$jsonMensajes = Mensaje::TraerTodosLosMensajes();
		$retorno = false;
		if($jsonMensajes != NULL)
		{
			foreach ($jsonMensajes as $Mensaje) 
			{
				if(strtolower($mensaje["mensaje"]) == $this->mensaje)
				{
					$retorno = true;
					break;
				}
			}
		}
		// else
		// {
		// 	echo 'Todavia no hay Mensajes registrados en el sistema';
		// }
		return $retorno;
	}

	public static function CargarMensaje($p)
	{
		$newArray = array();
		$retorno = false;
		$jsonMensajes = Mensaje::TraerTodosLosMensajes();
		$archivo=fopen("./archivos/mensajes.json", "w");
		if($jsonMensajes == NULL)
		{
			array_push($newArray, $p);
			fwrite($archivo, json_encode($newArray, JSON_PRETTY_PRINT));
			fclose($archivo);
			$retorno = true;	
		}
		else
		{
			array_push($jsonMensajes, $p);
			fwrite($archivo, json_encode($jsonMensajes, JSON_PRETTY_PRINT));
			fclose($archivo);
			$retorno = true;
		}
		return $retorno;
	}	

	public static function BorrarMensaje($p)
	{
		$jsonMensajes = Mensaje::TraerTodosLosMensajes();
		$archivo=fopen("./archivos/mensajes.json", "w");
		$i = 0;
		foreach($jsonMensajes as $mensaje) 
		{
			$mensaje = json_encode($mensaje, true);
			$mensaje = json_decode($mensaje, true);
			if($Mensaje['emailDestinatario'] == $p->GetEmailDestinatario()) 
			{
				unset($jsonMensajes[$i]);
			}
			$i++;
		}
		fwrite($archivo, json_encode($jsonMensajes, JSON_PRETTY_PRINT));
		fclose($archivo);
	}

	public function jsonSerialize()
    {
        return
        [
			'emailRemitente'   => $this->GetEmailRemitente(),
			'emailDestinatario' => $this->GetEmailDestinatario(),
			'mensaje' => $this->GetMensaje(),
			'foto' => $this->GetFoto()
        ];
	}

	public function ConsultarMensajesRecibidos()
    {
		$retorno = false;
		$countMensajes = 0;
		$jsonMensajes = Mensaje::TraerTodosLosMensajes();
		$arrFiltrado = array();
		foreach ($jsonMensajes as $mensaje) 
		{
			if($mensaje["emailDestinatario"] == $this->emailDestinatario)
			{
				array_push($arrFiltrado, $mensaje);
				$countMensajes++;
			}
		}
		if($countMensajes == 0)
		{
			echo 'Este destinatario no recibio ningun mensaje!';
		}
		return $arrFiltrado;
	}

	public function ConsultarMensajesEnviados()
    {
		$retorno = false;
		$countMensajes = 0;
		$jsonMensajes = Mensaje::TraerTodosLosMensajes();
		$arrFiltrado = array();
		foreach ($jsonMensajes as $mensaje) 
		{
			if($mensaje["emailRemitente"] == $this->emailRemitente)
			{
				array_push($arrFiltrado, $mensaje);
				$countMensajes++;
			}
		}
		if($countMensajes == 0)
		{
			echo 'Este remitente no recibio ningun mensaje!';
		}
		return $arrFiltrado;
	}

	public static function CrearTabla()
    {
		$jsonMensajes = Mensaje::TraerTodosLosMensajes();
		// Open the table
		echo "<table>";
		// Cycle through the array
		foreach ($jsonMensajes as $mensaje) {
			// Output a row
			echo "<tr>";
			echo "<td>" . $mensaje['emailRemitente'] . "</td>";
			echo "<td>" . $mensaje['emailDestinatario'] . "</td>";
			echo "<td>" . $mensaje['mensaje'] . "</td>";
			echo "<td>" . '<img src="'. './archivos/' . $mensaje['foto']['name'].'" />' . "</td>";
			echo "</tr>";
		}
		// Close the table
		echo "</table>";
	}
//--------------------------------------------------------------------------------//

}

?>