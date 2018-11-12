<?php
class Compra
{
	public $idusuario;
	public $idcompra;
	public $articulo;
	public $fecha;
	public $precio;
	public $foto;

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
				articulo =:articulo,
				fecha =:fecha,
				precio = :precio
				WHERE idcompra =:idcompra");
		$consulta->bindValue(':idcompra', $this->idcompra, PDO::PARAM_INT);
		$consulta->bindValue(':idusuario', $this->idusuario, PDO::PARAM_STR);
		$consulta->bindValue(':articulo', $this->articulo, PDO::PARAM_STR);
		$consulta->bindValue(':fecha', $this->fecha, PDO::PARAM_STR);
		$consulta->bindValue(':precio', $this->precio, PDO::PARAM_STR);
		return $consulta->execute();
	}

	public function insertCompra()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("
				insert into compras 
				(idusuario,articulo,fecha,precio)
				values (:idusuario,:articulo,:fecha,:precio)");
		$consulta->bindValue(':idusuario', $this->idusuario, PDO::PARAM_STR);
		$consulta->bindValue(':articulo', $this->articulo, PDO::PARAM_STR);
		$consulta->bindValue(':fecha', $this->fecha, PDO::PARAM_STR);
		$consulta->bindValue(':precio', $this->precio, PDO::PARAM_STR);
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
}