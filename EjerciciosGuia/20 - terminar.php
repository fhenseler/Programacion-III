<?php
class Punto
{
    private $_x;
    private $_y;

    function _construct($x, $y)
    {
        $this->$_x = $x;
        $this->$_y = $y;
    }

    function GetX()
    {
        return $this->$_x;
    }

    function GetY()
    {
        return $this->$_y;
    }
}

class Rectangulo
{
    private $_vertice1;
    private $_vertice2;
    private $_vertice3;
    private $_vertice4;
    public $area;
    public $ladoUno;
    public $ladoDos;
    public $perimetro;

    function _construct(Punto $v1, Punto $v3)
    {
        $this->$_vertice1 = $v1;
        $this->$_vertice3 = $v3;
    }

    function Dibujar()
    {

    }
}
?>