<?php
class Operario
{
    private $_nombre;
    private $_apellido;
    private $_legajo;
    private $_salario;

    public function __construct($legajo, $nombre, $apellido)
    {
        $this->_legajo = $legajo;
        $this->_nombre = $nombre;
        $this->_apellido = $apellido;
        $this->_salario = 10000;
    }

    public function GetNombreApellido()
    {
        return $this->_nombre.", ".$this->_apellido;
    }

    public function GetSalario()
    {
        return $this->_salario;
    }

    public function Mostrar()
    {
        return $this->GetNombreApellido(). " " . $this->_salario;
    }

    public static function Mostrar1($op)
    {
        return $op->Mostrar();
    }

    public function SetAumentarSalario($aumento)
    {
        $this->_salario *= $aumento;
    }
}

class Fabrica
{
    private $_cantMaxOperarios;
    private $_operarios = [];
    private $_razonSocial;

    public function __construct($rs)
    {
        $this->_razonSocial = $rs;
        $this->_cantMaxOperarios = 5;
    }

    public function Mostrar()
    {
        echo "<br>"."Razon Social: ".$this->_razonSocial."<br>";
        echo "Cantidad Máxima de Operarios: ".$this->_cantMaxOperarios."<br>";
        echo "Operarios: "."<br>";
        if(count($this->_operarios) == 0)
        {
            echo "No hay operarios en la lista."."<br>";
        }
        else
        {
            foreach($this->_operarios as $operario)
            {
                echo $operario->Mostrar()."<br>";
            }
        }
    }

    public function Equals(Fabrica $fb, Operario $op)
    {
        $retorno = false;
        foreach($fb->_operarios as $operario)
        {
            if($op == $operario)
            {
                $retorno = true;
                break;
            }
        }
        return $retorno;
    }

    public function Add(Operario $op)
    {
        $retorno = false;
        if(!($this->Equals($this, $op)))
        {
            array_push($this->_operarios, $op);
            echo "El operario fue agregado a la lista."."<br>";
            $retorno = true;
        }
        else
        {
            echo "El operario ya se encuentra en la lista."."<br>";
            $retorno = false;
        }
        return $retorno;
    }

    public function Remove(Operario $op)
    {
        if(($this->Equals($this, $op)))
        {
            $key = array_search($op, $this->_operarios);
            unset($this->_operarios, $key);
            echo "El operario fue sacado de la lista."."<br>";
        }
        else
        {
            echo "El operario no se encuentra en la lista."."<br>";
        }
    }

    private function MostrarOperarios()
    {
        foreach($this->_operarios as $operario)
        {
            $operario->Mostrar();
        }
    }

    private function RetornarCostos()
    {
        $totalCostos = 0;
        foreach($this->_operarios as $operario)
        {
            $totalCostos += $operario->GetSalario();
        }
        return $totalCostos;
    }

    public static function MostrarCosto(Fabrica $fb)
    {
        echo "Total Costo Salarios: ".$fb->RetornarCostos()."<br>";
    }
}
?>