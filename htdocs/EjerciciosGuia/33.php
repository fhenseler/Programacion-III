<html>
<form action="#" method="get">
<?php echo 'Ingrese clave: '; ?>
<input type="password" name= "psw1">
<?php echo 'Reingrese clave: '; ?>
<input type="password" name= "psw2">
<input type="submit" name= "submit" value="Confirmar">
</form>
</html>


<?php
/*
Solicitar el ingreso de una clave dos veces, es decir, disponer dos controles de tipo <input>
(type=”password”), luego en el servidor, verificar si las claves ingresadas son iguales o no,
mostrando un mensaje de bienvenida en la página welcome.php, si son iguales o redireccionar
hacia la página de inicio, en el caso de que sean distintos
*/
if(isset($_GET['submit']))
{
    if(isset($_GET['psw1']) && isset($_GET['psw2']))
    {  
            $psw1 = $_GET['psw1'];
            $psw2 = $_GET['psw2'];
            if($psw1 == $psw2)
            {
                echo 'Welcome!';
            }
            else
            {
                echo 'Passwords distintas';
            }
            
    }
    else
    {
        echo 'Error';
    }
}

?>

</html>