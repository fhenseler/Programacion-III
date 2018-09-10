<?php
$myfile = fopen("palabras.txt", "w") or die("Unable to open file!");
$mystring;
$words;
$txt = "L ipsum dolor sit amet consectetur adipisicing elit. Iste magni repellat tenetur non explicabo velit? Delectus facilis ipsa voluptatem accusamus eum velit quis laudantium fugit distinctio quidem, ex, dolorum culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis reprehenderit, suscipit tempore harum necessitatibus minus saepe itaque repudiandae obcaecati aut veniam ratione sint maiores laudantium non. Voluptatum, enim magnam.";

fwrite($myfile, $txt);
fclose($myfile);

$myfile = fopen("palabras.txt", "r");
$mystring = fread($myfile, filesize("palabras.txt"));
$mystring = str_replace(array('.', ',', '?'), '' , $mystring);
echo "Cantidad de palabras: " . wordCount($mystring) . "<br>";
fclose($myfile); 

echo letterCount($mystring);

function wordCount($str)
{
    return str_word_count($str, 0);
}

function letterCount($str)
{ 
    $cont1Letra = 0;
    $cont2Letras = 0;
    $cont3Letras = 0;
    $cont4Letras = 0;
    $cont4OMas = 0;
    
    $words = explode(" ", $str);

    foreach($words as $word)
    {
        switch(strlen($word))
        {
            case 1: 
                $cont1Letra++;
                break;
            case 2: 
                $cont2Letras++;
                break;
            case 3:
                $cont3Letras++;
                break;
            case 4:
                $cont4Letras++;
            default:
                $cont4OMas++;
        }
    }
    $array = array( array("Title"=>"1", "Amount"=>$cont1Letra),
array("Title"=>"2", "Amount"=>$cont2Letras),
array("Title"=>"3", "Amount"=>$cont3Letras),
array("Title"=>"4", "Amount"=>$cont4Letras),
array("Title"=>"4+", "Amount"=>$cont4OMas-$cont4Letras)  
);
    // echo "Total 1 letra: " . $cont1Letra . "<br>";
    // echo "Total 2 letras: " . $cont2Letras . "<br>";
    // echo "Total 3 letras: " . $cont3Letras . "<br>";
    // echo "Total 4 letras: " . $cont4Letras . "<br>";
    // echo "Total 4 letras o más: " . $cont4OMas . "<br>";

        // start table
        $html = '<table>';
        // header row
        $html .= '<tr>';
        foreach($array[0] as $key=>$value){
                $html .= '<th>' . htmlspecialchars($key) . '</th>';
            }
        $html .= '</tr>';
    
        // data rows
        foreach( $array as $key=>$value){
            $html .= '<tr>';
            foreach($value as $key2=>$value2){
                $html .= '<td>' . htmlspecialchars($value2) . '</td>';
            }
            $html .= '</tr>';
        }
    
        // finish table and return it
    
        $html .= '</table>';
        return $html;
}
?>