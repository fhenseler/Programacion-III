<?php
class Auto
{
    private $_color;
    private $_marca;
    private $_precio;
    private $_fecha;

    public function __construct($color, $marca, $precio, $fecha)
    {
        $this->_color = $color;
        $this->_marca = $marca;
        $this->_precio = $precio;
        $this->_fecha = $fecha;
    }

    // public static function WithPrecio($precio)
    // {
    //     $obj = new Auto(); 
    //     $obj->_precio = $precio;
    //     return $obj;
    // }

    // public static function WithPrecioAndFecha($precio, $fecha)
    // {
    //     $obj = new Auto(); 
    //     $obj->_precio = $precio;
    //     $obj->_fecha = $fecha;
    //     return $obj;
    // }

    public function AgregarImpuestos($impuestos)
    {
        $this->_precio += $impuestos;
        return $this;
    }

    public static function MostrarAuto(Auto $auto)
    {
        //var_dump($auto);
        echo "<br>"."Color: ".$auto->_color."<br>";
        echo "Marca: ".$auto->_marca."<br>";
        echo "Precio: ".$auto->_precio."<br>";
        echo "Fecha: ".$auto->_fecha."<br>";
    }

    public static function Equals(Auto $a1, Auto $a2)
    {
        $retorno = false;
        if($a1->_marca == $a2->_marca)
        {
            $retorno = true;
        }
        return $retorno;
    }

    public static function Add(Auto $a1, Auto $a2)
    {
        $sumaPrecios = 0;
        if(($a1->_marca == $a2->_marca) && ($a1->_color == $a2->_color))
        {
            $sumaPrecios = $a1->_precio + $a2->_precio;
        }
        else
        {
            echo "No se puede sumar porque los autos son distintos"."<br>";
        }
        return $sumaPrecios;
    }
}
?>