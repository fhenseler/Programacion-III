<html>
<form action="#" method="post">
<select name="Color">
    <option value="Red">Red</option>
    <option value="Green">Green</option>
    <option value="Blue">Blue</option>
    <option value="Pink">Pink</option>
    <option value="Yellow">Yellow</option>
</select>
<input type="submit" name= "submit" value="Cambiar Color">
</form>

<?php 
    if(isset($_POST['submit']))
    {  
        $selected_val = $_POST['Color'];
        switch($selected_val)
        {
            case 'Red':     
            echo '<body style="background-color:red"></body>';
                break;
            case 'Green':
            echo '<body style="background-color:green"></body>';
                break;
            case 'Blue':
            echo '<body style="background-color:blue"></body>';
                break;
            case 'Pink':
            echo '<body style="background-color:pink"></body>';
                break;
            case 'Yellow':
            echo '<body style="background-color:yellow"></body>';
                break;
            default:
            echo '<body style="background-color:black"></body>';
                break;
        }
    }
    else
    {
        echo 'error';
    }
?>
</html>
