<?php
class Usuario
{
    private $_nombre;
    private $_clave;

    public function __construct($nombre, $clave)
    {
        $this->_nombre = $nombre;
        $this->_clave = $clave;
    }

    public static function toString($myVar)
    {
        $myText = print_r($myVar,true)."<br>";
        return $myText;
    }

    public static function toJSON()
    {

    }

}
?>