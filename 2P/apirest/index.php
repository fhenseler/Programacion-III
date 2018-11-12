<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Psr7Middlewares\Middleware;
use Monolog\Logger;
use Monolog\Handler\ErrorLogHandler;



//Create the logger
$logger = new Logger('access');
$logger->pushHandler(new ErrorLogHandler());

$middlewares = [

    Middleware::AccessLog($logger) //Instance of Psr\Log\LoggerInterface
        ->combined(true)           //(optional) To use the Combined Log Format instead the Common Log Format
];

require '../composer/vendor/autoload.php';
require '../composer/vendor/paragonie/random_compat/psalm-autoload.php';
require_once './classes/AccesoDatos.php';
require_once './classes/userApi.php';
require_once './classes/compraApi.php';
require_once './classes/AuthJWT.php';
require_once './classes/MWCORS.php';
require_once './classes/MWAuth.php';

$response = $dispatcher(ServerRequestFactory::fromGlobals(), new Response());


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


$app->group('/compra', function () {
 
  $this->get('/', \compraApi::class . ':getAll');

  $this->post('/add', \compraApi::class . ':insert');
     
})->add(\MWAuth::class . ':verifyUserCompra')->add(\MWCORS::class . ':enableCORS');

$app->run();