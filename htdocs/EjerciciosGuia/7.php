<?php
date_default_timezone_set('America/Argentina/Buenos_Aires'); 

$info = getdate();
$date = $info['mday'];
$month = $info['mon'];
$year = $info['year'];
$hour = $info['hours'];
$min = $info['minutes'];
$sec = $info['seconds'];

$current_date = "$date/$month/$year == $hour:$min:$sec";
echo $current_date."<br>";

/* ******************************************************************** */

// get today's date
$today = new DateTime();
echo 'Today is: ' . $today->format('m-d-Y') . '<br />';

$fall = new DateTime('March 20');
$winter = new DateTime('June 20');
$spring = new DateTime('September 22');
$summer = new DateTime('December 21');

switch(true) {
    case $today >= $spring && $today < $summer:
        echo 'It\'s Spring!';
        break;

    case $today >= $summer && $today < $fall:
        echo 'It\'s Summer!';
        break;

    case $today >= $fall && $today < $winter:
        echo 'It\'s Fall!';
        break;

    default:
        echo 'It must be Winter!';
}
?>