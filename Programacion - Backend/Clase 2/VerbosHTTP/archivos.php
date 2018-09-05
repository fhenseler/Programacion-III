<?php
//$file = fopen("test.txt","r");
$file = fopen("datos.json","w");
echo fwrite($file,"Hello World. Testing!");
fclose($file);
//$file = fopen("/home/test/test.gif","wb");
//$file = fopen("http://www.example.com/","r");
//$file = fopen("ftp://user:password@example.com/test.txt","w");
?>