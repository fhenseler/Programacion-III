<?php
abstract class FiguraGeometrica
{
    protected $_color;
    protected $_perimetro;
    protected $_superficie;

    function _construct()
    {
    }

    function GetColor() 
    {
        return $this->$_color;
    }

    function SetColor($color) 
    {
        $this->$_color = $color;
        return $this->$_color;
    }

    function ToString()
    {

    }

    public abstract Dibujar()
    {
        for ($i=9; $i>=1; $i--) 
        {  
            for($j=1; $j<=$i; $j++)
            {  
                echo '&nbsp;';  
            }
            $j--;
            for ($k=1; $k<=(10-$j); $k++)
            {  
                echo " # ";   
            }  
            echo "<br>\n";
        }
    }

    protected abstract CalcularDatos()
    {
    }

}

class Rectangulo extends FiguraGeometrica
{
    public $_ladoUno;
    public $_ladoDos;

    function _construct($l1, $l2)
    {
        $this->$_ladoUno = $l1;
        $this->$_ladoDos = $l2;
    }

    protected CalcularDatos()
    {

    }

    public Dibujar()
    {

    }

    public ToString()
    {

    }
}

class Triangulo extends FiguraGeometrica
{
    public $_altura;
    public $_base;

    function _construct($b, $h)
    {
        $this->$_base = $b;
        $this->$_altura = $h;
    }

    protected CalcularDatos()
    {

    }

    public Dibujar()
    {

    }

    public ToString()
    {

    }
}
?>