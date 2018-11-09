<?php
require_once "AuthJWT.php";
class MWAuth
{
	/**
	 * @api {any} /MWparaAutenticar/  Verificar Usuario
	 * @apiVersion 0.1.0
	 * @apiName VerificarUsuario
	 * @apiGroup MIDDLEWARE
	 * @apiDescription  Por medio de este MiddleWare verifico las credeciales antes de ingresar al correspondiente metodo 
	 *
	 * @apiParam {ServerRequestInterface} request  El objeto REQUEST.
	 * @apiParam {ResponseInterface} response El objeto RESPONSE.
	 * @apiParam {Callable} next  The next middleware callable.
	 *
	 * @apiExample Como usarlo:
	 *    ->add(\MWparaAutenticar::class . ':VerificarUsuario')
	 */

	public function verifyUser($request, $response, $next)
	{
		$rv = new stdclass();
		$rv->message = "";
		$rv->respuesta = "";

		if (isset($request->getHeader('Authorization')[0])) 
		{
			$jwt = $request->getHeader('Authorization')[0];
			if (AuthJWT::verifyToken($jwt)) 
			{
				$response = $next($request, $response);
			}
			else 
			{
				$rv->message = "La credencial no es válida o ha expirado.";
				$response = $response->withJson($rv, 404);
			}
		}
		else 
		{
			$rv->message = "No se han enviado las credenciales.";
			$response = $response->withJson($rv, 404);
		}

		$rv->esValido=true; 
		try 
		{
			//$token="";
			AuthJWT::verifyToken($jwt);
			$rv->esValido=true;      
		}
		catch (Exception $e) 
		{      
			//guardar en un log
			$rv->excepcion=$e->getMessage();
			$rv->esValido=false;     
		}

		if($rv->esValido)
		{						
			if($request->isPost())
			{		
				// el post sirve para todos los logeados			    
				$response = $next($request, $response);
			}
			else
			{
				$payload=AuthJWT::ObtenerData($jwt);
				$user = User::getUserDataByNombrePasswordSexoPerfil($payload->nombre, $payload->pass, $payload->sexo, $payload->perfil);
				var_dump($user);
				 
				// DELETE,PUT y DELETE sirve para todos los logeados y admin
				if($user->perfil=="administrador")
				{
					$response = $next($request, $response);
				}		           	
				else
				{	
					$rv->respuesta="Solo administradores";
				}
			}		          
		}    
		else
		{
			//   $response->getBody()->write('<p>no tenes habilitado el ingreso</p>');
			$rv->respuesta="Solo usuarios registrados";
			$rv->elToken=$jwt;

		}  		  
	if($rv->respuesta!="")
	{
		$nueva=$response->withJson($rv, 401);  
		return $nueva;
	}


		return $response;
	}
}