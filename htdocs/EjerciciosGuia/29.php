<html>
<body>
<form action="#" method="get">
<select name="Color">
    <option value="Red">Red</option>
    <option value="Green">Green</option>
    <option value="Blue">Blue</option>
    <option value="Pink">Pink</option>
    <option value="Yellow">Yellow</option>
</select>
<input type="button" name= "button" value="Cambiar Color" onclick="myFunction();">
</form>

<?php
function myFunction()
{   
    if(isset($_GET['button']))
    {  
        $selected_val = $_GET['Color'];
        echo 'ok';
    }
    else
    {
        echo 'error';
    }

    switch($selected_val)
    {
        case 'Red':     
        echo '<body style="background-color:red">';
            break;
        case 'Green':
        echo '<body style="background-color:green">';
            break;
        case 'Blue':
        echo '<body style="background-color:blue">';
            break;
        case 'Pink':
        echo '<body style="background-color:pink">';
            break;
        case 'Yellow':
        echo '<body style="background-color:yellow">';
            break;
        default:
        echo '<body style="background-color:black">';
            break;
    }
}
?>

</body>
</html>
