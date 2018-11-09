<?php
require_once 'compra.php';
require_once 'user.php';
require_once 'IGenericDAO.php';

use Slim\Http\UploadedFile;

class compraApi extends Compra implements IGenericDAO
{
    public function getById($request, $response, $args)
    {
        $compraid = $args['compraid'];
        $compra = Compra::getCompraById($compraid);
        if (!$compra)
            {
            $rv = new stdclass();
            $rv->message = "Recurso no encontrado";
            $newResponse = $response->withJson($rv, 404);
        }
        else
            {
            $newResponse = $response->withJson($compra, 200);
        }
        return $newResponse;
    }

    public function getAll($request, $response, $args)
    {
        $compras = Compra::getAllCompras();
        $newResponse = $response->withJson($compras, 200);
        return $newResponse;
    }

    public function insert($request, $response, $args)
    {

        $newCompraData = $request->getParsedBody();

        $newCompra = new Compra();
        $newCompra->idusuario = $newCompraData["idusuario"];
        $newCompra->idcompra = $newCompraData["idcompra"];
        $newCompra->articulo = $newCompraData["articulo"];
        $newCompra->fecha = $newCompraData["fecha"];
        $newCompra->precio = $newCompraData["precio"];
        
        if(User::getUserById($newCompra->idusuario))
        {
            $compraid = $newCompra->insertCompra();
            $rv = new stdclass();
            $rv->message = "La compra ha sido guardada exitosamente.";
            return $response->withJson($rv, 200);
        }


    }

    public function update($request, $response, $args)
    {
        $newData = $request->getParsedBody();
        $compraToUpdate = new Compra();
        $compraToUpdate->idusuario = $newData['idusuario'];
        $compraToUpdate->idcompra = $newData['idcompra'];
        $compraToUpdate->articulo = $newData['articulo'];
        $compraToUpdate->fecha = $newData['fecha'];
        $compraToUpdate->precio = $newData['precio'];
        $rv = new stdclass();
        if ($compraToUpdate->updateCompra()) {
            $rv->message = "La compra ha sido actualizada exitosamente.";
            $newResponse = $response->withJson($rv, 200);
        }
        else {
            $rv->message = "Hubo un error y no se ha podido actualizar. Comuniquese con el administrador de su sistema.";
            $newResponse = $response->withJson($rv, 404);
        }
        return $newResponse;
    }

    public function delete($request, $response, $args)
    {
        $compraToDelete = $request->getParsedBody();
        $idcompra = $compraToDelete['idcompra'];
        $compra = new Compra();
        $compra->idcompra = $idcompra;
        $rv = new stdclass();
        if ($compra->deleteCompra() > 0) {
            $rv->message = "Compra eliminada exitosamente.";
            $response = $response->withJson($rv, 200);
        }
        else {
            $rv->message = "Compra no encontrada.";
            $response = $response->withJson($rv, 404);
        }
        return $response;
    }



    // public function validateCompra($request, $response, $args)
    // {
    //     try {
    //         $rv = new stdclass();
    //         $compraData = $request->getParsedBody();
    //         $idusuario = $compraData['idusuario'];
    //         $articulo = $compraData['articulo'];
    //         $fecha = $compraData['fecha'];
    //         $precio = $compraData['precio'];
    //         $compra = Compra::getCompraDataByNombrePasswordSexo($nombre, $password, $sexo, $perfil);
    //         if ($compra != false) {

    //             $jwt = AuthJWT::getToken($compra);
    //             $rv->jwt = $jwt;
    //             $rv->message = 'Usuario encontrado';
    //             $response = $response->withJson($rv, 200);
    //         }
    //         else {
    //             $rv->message = "El usuario no ha sido encontrado (sexo, nombre o password erroneos)";
    //             $response = $response->withJson($rv, 404);
    //         }
    //         return $response;
    //     } catch (Exception $ex) {
    //         $rv->message = "Error desconocido. Comuniquese con el administrador de su sistema.";
    //         $response = $response->withJson($rv, 404);
    //         return $response;

    //     }

    // }

    // function registercompra($request, $response, $args)
    // {
    //     $rv = new stdclass();

    //     $compraData = $request->getParsedBody();
    //     $password = $compraData['password'];
    //     $nombre = $compraData['nombre'];

    //     if (compra::compraAlreadyExist($nombre)) {
    //         $rv->message = "El usuario ingresado ya existe";
    //         $response = $response->withJson($rv, 404);
    //     }
    //     else {
    //         $response = $this->insert($request, $response, $args);
    //         $compra = new stdclass();
    //         $compra->password = $password;
    //         $compra->nombre = $nombre;
    //         $jwt = AuthJWT::getToken($compra);
    //         $rv->message = "Usuario registrado exitosamente";
    //         $rv->jwt = $jwt;
    //         $response = $response->withJson($rv, 200);
    //     }
    //     return $response;
    // }


    // function moveUploadedFile($directory, UploadedFile $uploadedFile)
    // {
    //     $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
    //     $basename = bin2hex(random_bytes(8));
    //     $filename = sprintf('%s.%0.8s', $basename, $extension);

    //     $uploadedFile->moveTo($directory . DIRECTORY_SEPARATOR . $filename);

    //     return $filename;
    // }
}