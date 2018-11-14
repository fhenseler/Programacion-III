<?php
class Compra
{
	public $idusuario;
	public $idcompra;
	public $marca;
	public $fecha;
	public $precio;
	public $modelo;

	public function deleteCompra()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("
				delete 
				from compras 				
				WHERE idcompra=:idcompra");
		$consulta->bindValue(':idcompra', $this->idcompra, PDO::PARAM_INT);
		$consulta->execute();
		return $consulta->rowCount();
	}

	public function updateCompra()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("
				update compras
				set idusuario = :idusuario,
				marca =:marca,
				fecha =:fecha,
				precio = :precio,
				modelo = :modelo
				WHERE idcompra =:idcompra");
		$consulta->bindValue(':idcompra', $this->idcompra, PDO::PARAM_INT);
		$consulta->bindValue(':idusuario', $this->idusuario, PDO::PARAM_STR);
		$consulta->bindValue(':marca', $this->marca, PDO::PARAM_STR);
		$consulta->bindValue(':fecha', $this->fecha, PDO::PARAM_STR);
		$consulta->bindValue(':precio', $this->precio, PDO::PARAM_STR);
		$consulta->bindValue(':modelo', $this->modelo, PDO::PARAM_STR);
		return $consulta->execute();
	}

	public function insertCompra()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("
				insert into compras 
				(idcompra,idusuario,marca,fecha,modelo,precio)
				values (:idcompra,:idusuario,:marca,:fecha,:modelo,:precio)");
		$consulta->bindValue(':idcompra', $this->idcompra, PDO::PARAM_STR);
		$consulta->bindValue(':idusuario', $this->idusuario, PDO::PARAM_STR);
		$consulta->bindValue(':marca', $this->marca, PDO::PARAM_STR);
		$consulta->bindValue(':fecha', $this->fecha, PDO::PARAM_STR);
		$consulta->bindValue(':precio', $this->precio, PDO::PARAM_STR);
		$consulta->bindValue(':modelo', $this->modelo, PDO::PARAM_STR);
		$consulta->execute();
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	}


	public static function getAllCompras()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("select * from compras");
		$consulta->execute();
		return $consulta->fetchAll(PDO::FETCH_CLASS, "Compra");
	}

	public static function getCompraByUserId($userid)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("select * from compras where idusuario = :idusuario");
		$consulta->bindValue(':idusuario', $userid, PDO::PARAM_INT);
		$consulta->execute();
		return $consulta->fetchAll(PDO::FETCH_CLASS, "compra");
	}

	public static function getModelosByMarca($marca)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("select modelo from compras where marca = :marca");
		$consulta->bindValue(':marca', $marca, PDO::PARAM_STR);
		$consulta->execute();
		return $consulta->fetchAll(PDO::FETCH_COLUMN, "modelo");
	}
}