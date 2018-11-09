<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


require '../composer/vendor/autoload.php';
require '../composer/vendor/paragonie/random_compat/psalm-autoload.php';
require_once './classes/AccesoDatos.php';
require_once './classes/userApi.php';
require_once './classes/compraApi.php';
require_once './classes/AuthJWT.php';
require_once './classes/MWCORS.php';
require_once './classes/MWAuth.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);


$app->group('/user', function () {
 
  $this->get('/', \userApi::class . ':getAll');
 
  $this->get('/{userid}', \userApi::class . ':getById');

  $this->post('/add', \userApi::class . ':insert');

  $this->post('/delete', \userApi::class . ':delete');

  $this->post('/update', \userApi::class . ':update');
     
})->add(\MWAuth::class . ':verifyUser')->add(\MWCORS::class . ':enableCORS');


$app->group('/login', function () {
  
   $this->post('/signin', \userApi::class . ':validateUser');
  
   $this->post('/signup', \userApi::class . ':registerUser');
 
 })->add(\MWCORS::class . ':enableCORS');


//   4-Ruta “Compra”(POST), se ingresa un artículo , la fecha y el precio de la compra, solo personas que estén
// registradas en el sistema.

$app->group('/compra', function () {
 
  $this->get('/', \compraApi::class . ':getAll');

  $this->post('/add', \compraApi::class . ':insert');
     
})->add(\MWAuth::class . ':verifyUser')->add(\MWCORS::class . ':enableCORS');


$app->run();