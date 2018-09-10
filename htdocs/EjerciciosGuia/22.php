<?php
require '21.php';

class Garage
{
    private $_razonSocial;
    private $_precioPorHora;
    private $_autos = [];

    public function __construct($razonSocial, $precioPorHora)
    {
        $this->_razonSocial = $razonSocial;
        $this->_precioPorHora = $precioPorHora;
    }

    public function MostrarGarage()
    {
        echo "<br>"."Razon Social: ".$this->_razonSocial."<br>";
        echo "Precio por Hora: ".$this->_precioPorHora."<br>";
        echo "Autos: "."<br>";
        if(count($this->_autos) == 0)
        {
            echo "No hay autos en el garage."."<br>";
        }
        else
        {
            foreach($this->_autos as $auto)
            {
                echo $auto->MostrarAuto($auto);
            }
        }
    }

    public function Equals(Garage $g, Auto $a)
    {
        $retorno = false;
        foreach($g->_autos as $value)
        {
            if($a == $value)
            {
                $retorno = true;
                break;
            }
        }
        return $retorno;
    }

    public function Add(Auto $a)
    {
        if(!($this->Equals($this, $a)))
        {
            array_push($this->_autos, $a);
            echo "El auto fue agregado al garage."."<br>";
        }
        else
        {
            echo "El auto ya se encuentra en el garage."."<br>";
        }
    }

    public function Remove(Auto $a)
    {
        if(($this->Equals($this, $a)))
        {
            $key = array_search($a, $this->_autos);
            unset($this->_autos, $key);
            echo "El auto fue sacado del garage."."<br>";
        }
        else
        {
            echo "El auto no se encuentra en el garage."."<br>";
        }
    }

}
?>