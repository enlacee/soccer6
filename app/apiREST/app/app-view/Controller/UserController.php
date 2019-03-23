<?php

namespace AppView\Controller;

class UserController
{
	private $adapter;

	public function __construct($container)
	{
		$this->adapter = $container->get('adapter');
	}

	private function _postPut($request, $response, $args)
	{
		$return = array( 'status' => false);

		$id = $request->getParam('id', false);

		if ($id !== false) {
			$resultSet = $this->adapter->query(
				'SELECT * FROM users WHERE id = ? LIMIT 1',
				array($id)
			)->toArray();

			$return['status'] = true;
			// update or insert
			if (count($resultSet) === 1) {
				$rs = $this->adapter->query(
					'UPDATE users SET name = ?, paid = ?, update_at = ? '
						. 'WHERE id = ?',
					array(
						mb_strtolower($request->getParam('name')),
						$request->getParam('paid'),
						date('Y-m-d H:i:s'),
						$request->getParam('id')
					)
				);

				if (is_object($rs)) {
					$return['rs'] = 'update';
				}

			} else {
				$rs = $this->adapter->query(
					'INSERT INTO users (id, name, paid, create_at) VALUES (?, ?, ?, ?)',
					array(
						$request->getParam('id'),
						mb_strtolower($request->getParam('name')),
						$request->getParam('paid'),
						date('Y-m-d H:i:s')
					)
				);


				if (is_object($rs)) {
					$return['rs'] = 'insert';
				}
			}

		}

		return $response->withJson($return);
	}

	public function post($request, $response, $args)
	{
		return $this->_postPut($request, $response, $args);
	}

	public function put($request, $response, $args)
	{
		return $this->_postPut($request, $response, $args);
	}

	/**
	 * Get data for user
	 */
	public function get($request, $response, $args)
	{
		$id = $request->getAttribute('route')->getArgument('id');
		$rs = $this->adapter->query(
			"SELECT * FROM `users` WHERE id = ?",
			array($id)
		);

		return $response->withJson($rs->toArray());
	}

	/**
	 * Get all uses
	 */
	public function getAll($request, $response, $args)
	{
		$rs = $this->adapter->query(
			'SELECT id, name, paid FROM `users` LIMIT 33',
			\Zend\Db\Adapter\Adapter::QUERY_MODE_EXECUTE
		);

		return $response->withJson($rs->toArray());
	}

}
