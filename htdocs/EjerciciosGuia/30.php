<html>
<body>
    <form action="#" method="post">
    <select name = "row">;
    <?php
    $start = 1;
    $end = 50;
    echo 'Amount of rows: ';
    for($i = $start; $i <= $end; $i++){
        echo "<option>{$i}</option>";
    }
    echo '</select>';

    echo '<select name = "column">';
    echo 'Amount of columns: ';
    for($i = $start; $i <= $end; $i++){
        echo "<option>{$i}</option>";
    }
    echo '</select>';
    echo '<input type="submit" name= "submit" value="Generar Tabla">';
    ?>    
    </form>  

<?php
/* Utilizando tags de Html (<table>, <tr> y <td>) se pide generar en forma dinámica una tabla.
Dicha tabla se formará a partir de los valores de dos controles de tipo <select>. Cada uno de
estos controles contendrá valores desde el 1 hasta el 50.
Al pulsar el control <input> (type=”button”) con la leyenda “Generar Tabla”, se invocará a un
procedimiento que creará la tabla a partir de la cantidad seleccionada de filas y columnas. */

if(isset($_POST['submit']))
{
    $row_val = $_POST['row'];  // Storing Selected Value In Variable
    var_dump($row_val);
    $col_val = $_POST['column']; 
    var_dump($col_val);

    echo '<table style="width:100%">';
    for($i = 0; $i < $row_val; $i++)
    {
        echo '<tr>';
        echo '</tr>';
    }
    for($i = 0; $i < $col_val; $i++)
    {
        echo '<th>';
        echo '</th>';
    }
    echo '</table>';
}
else
{
    echo 'err';
}
?>
</body>
</html>