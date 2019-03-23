<?php
namespace App\Controller;

class UserController
{
	public $container;

	public function __construct($container)
	{
		$this->container = $container;
	}

	public function __invoke($request, $response, $args)
	{
		// echo "<pre>";
		// var_dump(new \App\Model\UserModel());
		// var_dump($this->container->get('renderer'));
		// var_dump($this->container->get('db'));
		return $response;
	}

	public function get($request, $response, $args)
	{
		echo "get";
	}

	public function post($request, $response, $args)
	{
		echo "post";
	}

	public function delete($request, $response, $args)
	{
		echo "delete";
	}

}
