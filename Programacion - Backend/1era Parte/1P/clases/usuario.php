<?php
class Usuario implements JsonSerializable
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
	
	public static function TraerTodosLosUsuarios()
	{
		// Read JSON file
		$json = file_get_contents('./archivos/usuarios.json');

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
		$jsonUsuarios = Usuario::TraerTodosLosUsuarios();
		array_push($jsonUsuarios, $p);
		$archivo=fopen("./archivos/usuarios.json", "w");
		$i = 0;
		foreach($jsonUsuarios as $usuario) 
		{
			$oldname = $usuario["foto"]["name"];
			$usuario = json_encode($usuario, true);
			$usuario = json_decode($usuario, true);
			if($usuario['email'] == $p->GetEmail()) 
			{	
				unset($jsonUsuarios[$i]);
				Archivo::Mover('./archivos/' . $oldname, './backup/' . $p->GetApellido() . '-' . $hoy . '.' . "jpg");
				unlink('./archivos/' . $oldname);
				Usuario::CargarUsuario($p);
				break;
			}
			$i++;
		}
		fwrite($archivo, json_encode($jsonUsuarios, JSON_PRETTY_PRINT));
		fclose($archivo);
	}

	public static function BorrarUsuario($p)
	{
		$jsonUsuarios = Usuario::TraerTodosLosUsuarios();
		$archivo=fopen("./archivos/Usuarios.json", "w");
		$i = 0;
		foreach($jsonUsuarios as $Usuario) 
		{
			$Usuario = json_encode($usuario, true);
			$Usuario = json_decode($usuario, true);
			if($Uusuario['email'] == $p->GetEmail()) 
			{
				unset($jsonUsuarios[$i]);
				break;
			}
			$i++;
		}
		fwrite($archivo, json_encode($jsonUsuarios, JSON_PRETTY_PRINT));
		fclose($archivo);
	}

	public static function CargarUsuario($p)
	{
		$newArray = array();
		$retorno = false;
		$jsonUsuarios = Usuario::TraerTodosLosUsuarios();
		$archivo=fopen("./archivos/usuarios.json", "w");
		if($jsonUsuarios == NULL)
		{
			array_push($newArray, $p);
			fwrite($archivo, json_encode($newArray, JSON_PRETTY_PRINT));
			fclose($archivo);
			$retorno = true;	
		}
		else
		{
			array_push($jsonUsuarios, $p);
			fwrite($archivo, json_encode($jsonUsuarios, JSON_PRETTY_PRINT));
			fclose($archivo);
			$retorno = true;
		}
		return $retorno;
	}	
	
	public function ExisteUsuario()
	{
		$jsonUsuarios = Usuario::TraerTodosLosUsuarios();
		$retorno = false;
		if($jsonUsuarios != NULL)
		{
			foreach ($jsonUsuarios as $usuario) 
			{
				if(strtolower($usuario["email"]) == $this->email)
				{
					echo 'El email ' . $this->email . ' ya se encuentra registrado.';
					$retorno = true;
					break;
				}
			}
		}
		// else
		// {
		// 	echo 'Todavia no hay Usuarios registrados en el sistema';
		// }
		return $retorno;
	}

	public static function TraerUsuario()
	{
		$jsonUsuarios = Usuario::TraerTodosLosUsuarios();
		if($jsonUsuarios != NULL)
		{
			foreach ($jsonUsuarios as $usuario) 
			{
				if(strtolower($usuario["email"]) == $this->email)
				{
					return $usuario;
				}
			}
		}
	}

    
    public function ConsultarUsuario($apellido)
    {
		$jsonUsuarios = Usuario::TraerTodosLosUsuarios();
		$arrFiltrado = array("key" => "value");
		$cantEncontrados = 0;
		
		foreach ($jsonUsuarios as $usuario) 
		{
			if(strtolower($usuario["apellido"]) == strtolower($apellido))
			{
				array_push($arrFiltrado, $usuario);
				$cantEncontrados++;
			}
		}
        if($cantEncontrados == 0)
        {
            return 'No existe Usuario con apellido ' . $apellido;
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
		$jsonUsuarios = Usuario::TraerTodosLosUsuarios();
		// Open the table
		echo "<table>";
		// Cycle through the array
		foreach ($jsonUsuarios as $usuario) {
			// Output a row
			echo "<tr>";
			echo "<td>" . $usuario['nombre'] . "</td>";
			echo "<td>" . $usuario['apellido'] . "</td>";
			echo "<td>" . $usuario['email'] . "</td>";
			echo "<td>" . '<img src="'. './archivos/' . $usuario['foto']['name'].'" />' . "</td>";
			echo "</tr>";
		}
		// Close the table
		echo "</table>";
	}
	//--------------------------------------------------------------------------------//	
}
?>