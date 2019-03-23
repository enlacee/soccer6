<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes
/**
 * Simple Solution CORN
 */
/*
$app->options('/{routes:.+}', function ($request, $response, $args) {
	return $response;
});
*/


/*
$app->add(function ($req, $res, $next) {
	$response = $next($req, $res);
	return $response
		->withHeader('Access-Control-Allow-Origin', '*')
		// ->withHeader('Access-Control-Allow-Origin', 'http://localhost:1841')
		// ->withHeader('Access-Control-Allow-Origin', 'http://local.soccer6.com')
		->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
		// ->withHeader('Access-Control-Allow-Credentials', 'true') //con credenciales en(frontJS y backPHP) usa Cookie
		->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});
*/

/**
 * API REST HOME
 */
$app->get('/[{name}]', function (Request $request, Response $response, array $args) {
	$this->logger->info("Slim-Skeleton '/' route");

	// Render index view
	return $this->renderer->render($response, 'index.phtml', $args);
});

/**
 * API REST
 */
$app->group('/appview', function () use ($app) {


	$app->post('/users', \AppView\Controller\UserController::class . ':post');
	$app->put('/users/{id}', \AppView\Controller\UserController::class . ':put');

	$app->get('/users', '\AppView\Controller\UserController:getAll');
	$app->get('/users/{id}', '\AppView\Controller\UserController:get');
});
