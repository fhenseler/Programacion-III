<!-- Realizar una página que permita mostrar el día, mes o año actual, según lo elija el usuario.
Para esto debe utilizar controles de tipo <input> (type=”checkBox”) y un <input> (type=”button”) 
para enviar la solicitud al servidor. Mostrar la fecha en la misma página. -->
<html>
<form action="#" method="post">
<fieldset>
<input type="checkBox" name= "cbDia" value="Día">Día<br>
<input type="checkBox" name= "cbMes" value="Mes">Mes<br>
<input type="checkBox" name= "cbAño" value="Año">Año<br>
</fieldset>
<input type="submit" name= "submit" value="Confirmar">
</form>

<?php
if(isset($_POST['submit']))
{
    $selected_val = $_POST['submit'];
    switch($selected_val)
    {
        case 'Día':     
        echo '<body style="background-color:red"></body>';
            break;
        case 'cbMes':
        echo '<body style="background-color:green"></body>';
            break;
        default:
        echo 'No seleccionaste nada';
            break;
    }
}
else
{
    echo 'err';
}
?>
</html>