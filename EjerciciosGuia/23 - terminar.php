<?php
class Pasajero
{
    private $_nombre;
    private $_apellido;
    private $_dni;
    private $_esPlus;

    public function __construct($nombre, $apellido, $dni, $esPlus)
    {
        $this->_nombre = $nombre;
        $this->_apellido = $apellido;
        $this->_dni = $dni;
        $this->_esPlus = $esPlus;
    }

    public static function Equals(Pasajero $p1, Pasajero $p2)
    {
        $retorno = false;
        if($p1->_dni == $p2->_dni)
        {
            $retorno = true;
        }
        return $retorno;
    }

    public function GetInfoPasajero()
    {
        return $this->_nombre . $this->_apellido . $this->_dni . $this->$_esPlus;
    }

    public static function MostrarPasajero($pasajero)
    {
        //var_dump($auto);
        echo "<br>"."Nombre: ".$pasajero->_nombre."<br>";
        echo "Apellido: ".$pasajero->_apellido."<br>";
        echo "DNI: ".$pasajero->_dni."<br>";
        echo "Es Plus?: ".$pasajero->_esPlus."<br>";
    }
}

class Vuelo
{
    //Atributos privados: _fecha (DateTime), _empresa (string) _precio (double), _listaDePasajeros 
    //(array de tipo Pasajero), _cantMaxima (int; con su getter). Tanto _listaDePasajero como 
    //_cantMaxima sólo se inicializarán en el constructor.

    private $_fecha;
    private $_empresa;
    private $_precio;
    private $_listaDePasajeros;
    private $_cantMaxima;

    public function __construct($empresa, $precio, $cantMaxima)
    {
        $this->_empresa = $empresa;
        $this->_precio = $precio;
        $this->_listaDePasajeros= [];
        $this->_cantMaxima = $cantMaxima;
    }

    public function GetInfoVuelo()
    {
        return $this->_fecha . $this->_empresa . $this->_precio . $this->_cantMaxima . $this->_listaDePasajeros;
    }

    public function Equals(Vuelo $v, Pasajero $p)
    {
        $retorno = false;
        foreach($v->_listaDePasajeros as $value)
        {
            if($p == $value)
            {
                $retorno = true;
                break;
            }
        }
        return $retorno;
    }

    public function AgregarPasajero(Pasajero $p)
    {
        $retorno = false;
        if(!($this->Equals($this, $p)))
        {
            array_push($this->_listaDePasajeros, $p);
            echo "El pasajero fue agregado al vuelo."."<br>";
            $retorno = true;
        }
        else
        {
            echo "El pasajero ya se encuentra en el vuelo."."<br>";
            $retorno = false;
        }
        return $retorno;
    }

    //Revisar, no se entiende el enunciado
    public static function Add(Vuelo $v1, Vuelo $v2)
    {
        foreach($v1->listaDePasajeros as $pasajero)
        {
            if($pasajero->esPlus == true)
            {
                $v1->precio *= 0.80;
            }
        }
        foreach($v2->listaDePasajeros as $pasajero)
        {
            if($pasajero->esPlus == true)
            {
                $v2->precio *= 0.80;
            }
        }
        return $v1->precio + $v2->precio;
    }

    public static function Remove(Vuelo $v, Pasajero $p)
    {
        foreach($v->listaDePasajeros as $pasajero)
        {
            if(Equals($v, $p))
            {
                $key = array_search($p, $v->_listaDePasajeros);
                unset($v->_listaDePasajeros, $key);
                echo "El pasajero fue sacado del vuelo."."<br>";
                break;
            }
        }
        return $v;
    }
}
?>