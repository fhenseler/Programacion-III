<?php
class User
{
	public $idusuario;
	public $nombre;
	public $perfil;
	public $pass;
	public $sexo;

	public function deleteUser()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("
				delete 
				from usuarios 				
				WHERE idusuario=:idusuario");
		$consulta->bindValue(':idusuario', $this->idusuario, PDO::PARAM_INT);
		$consulta->execute();
		return $consulta->rowCount();
	}

	public function updateUser()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("
				update usuarios
				set nombre = :nombre,
				perfil =:perfil,
				pass =:pass,
				sexo = :sexo,
				WHERE idusuario =:idusuario");
		$consulta->bindValue(':idusuario', $this->idusuario, PDO::PARAM_INT);
		$consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
		$consulta->bindValue(':perfil', $this->perfil, PDO::PARAM_STR);
		$consulta->bindValue(':pass', $this->pass, PDO::PARAM_STR);
		$consulta->bindValue(':sexo', $this->sexo, PDO::PARAM_STR);
		return $consulta->execute();
	}

	public function insertUser()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		if($this->perfil != NULL)
		{
			$consulta = $objetoAccesoDato->RetornarConsulta("
			insert into usuarios 
			(nombre,perfil,pass,sexo)
			values (:nombre,:perfil,:pass,:sexo)");
			$consulta->bindValue(':perfil', $this->perfil, PDO::PARAM_STR);
		}
		else
		{
			$consulta = $objetoAccesoDato->RetornarConsulta("
			insert into usuarios 
			(nombre,pass,sexo)
			values (:nombre,:pass,:sexo)");
		}
		$consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
		$consulta->bindValue(':pass', $this->pass, PDO::PARAM_STR);
		$consulta->bindValue(':sexo', $this->sexo, PDO::PARAM_STR);
		$consulta->execute();
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	}


	public static function getAllUsers()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("select * from usuarios");
		$consulta->execute();
		return $consulta->fetchAll(PDO::FETCH_CLASS, "user");
	}

	public static function getUserById($userid)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("select * from usuarios where idusuario = :idusuario");
		$consulta->bindValue(':idusuario', $userid, PDO::PARAM_INT);
		$consulta->execute();
		$user = $consulta->fetchObject('User');
		return $user;
	}

	public static function getUserDataByNombrePasswordSexo($nombre, $pass, $sexo)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("select nombre,pass,sexo,perfil,idusuario from usuarios where nombre = :nombre and pass = :pass and sexo = :sexo");
		$consulta->bindValue(':pass', $pass, PDO::PARAM_STR);
		$consulta->bindValue(':nombre', $nombre, PDO::PARAM_STR);
		$consulta->bindValue(':sexo', $sexo, PDO::PARAM_STR);
		$consulta->execute();
		return $consulta->fetchObject('User');
	}

	public static function userAlreadyExist($nombre)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("select nombre,pass from usuarios where nombre = :nombre");
		$consulta->bindValue(':nombre', $nombre, PDO::PARAM_STR);
		$consulta->execute();
		return $consulta->rowCount() > 0;
	}
}