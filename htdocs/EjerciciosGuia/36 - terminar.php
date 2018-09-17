<html>
<form action="#" method="post">
<select name="destino">
    <option value="Rio de Janeiro">Rio de Janeiro</option>
    <option value="Punta del Este">Punta del Este</option>
    <option value="La Habana">La Habana</option>
    <option value="Miami">Miami</option>
    <option value="Ibiza">Ibiza</option>
</select>
<input type="submit" name= "submit" value="Ver valor">
</form>

<?php 
    if(isset($_POST['submit']))
    {  
        $selected_val = $_POST['destino'];
        switch($selected_val)
        {
            case 'Rio de Janeiro':     
            echo '€900';
                break;
            case 'Punta del Este':
            echo '€550';
                break;
            case 'La Habana':
            echo '€1150';
                break;
            case 'Miami':
            echo '€875';
                break;
            case 'Ibiza':
            echo '€600';
                break;
            default:
                break;
        }
    }
    else
    {
        echo 'error';
    }
?>
</html>