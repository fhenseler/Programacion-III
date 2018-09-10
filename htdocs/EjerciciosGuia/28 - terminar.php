<html>
<body>

<form action="welcome.php" method="post">
Text you want to encrypt: <input type="text" name="location"><br>
<input type="submit">
</form>

</body>
</html>

<?php
class Enigma
{
    public static function Encriptar($str, $path)
    {
        /*Su método estático Encriptar, recibirá un mensaje y a cada número del código ASCII de cada carácter
        del string le sumará 200. Una vez que cambie todos los caracteres, lo guardará en un archivo de texto
        (el path también se recibirá por parámetro). Retornará TRUE si pudo guardar correctamente el archivo
        encriptado, FALSE, caso contrario.*/
        
        //$array = explode(' ', $str);
        // for( $i = 0; $i <= strlen($str); $i++ ) 
        // {
        //     $char = substr( $str, $i, 1 );
        //     $char = ord($char) + 200;
        //     $char = ord($char);
        // }
        // foreach($array as $char)
        // {
        //     echo "CHAR: " . var_dump($char) . "<br>";
        //     echo "ASCII: " . var_dump(ord($char)) . "<br>";
        //     $char = ord($char) + 200;
        //     echo "ASCII cambiado: " . var_dump(ord($char)) . "<br>";
        // }
        $array = unpack("C*", $str);
        foreach($array as $char)
        {
            $char = ord($char) + 200;
        }
        $string = implode(' ', $array);
        $path = fopen($path, "w");
        if(fwrite($path, $string))
        {
            fclose($path);
            return true;
        }
        else
        {
            fclose($path);
            return false;
        }
    }

    public static function Desencriptar($path)
    {
        /*El método estático Desencriptar, recibirá sólo el path de dónde se leerá el archivo. 
        Realizar el proceso inverso para restarle a cada número del código ASCII de cada carácter leído 200, 
        para poder retornar el mensaje y ser mostrado desesncriptado.*/
        $file = fopen($path, "r");
        $str = fread($file, filesize($path));
        $array = explode(' ', $str);
        foreach($array as $char)
        {
            chr(ord($char) - 200);
        }
        fclose($file);
        return $str;
    }
}
?>