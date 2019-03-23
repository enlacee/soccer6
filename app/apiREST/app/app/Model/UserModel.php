<?php
namespace App\Model;

class UserModel
{
	protected $db;

	public function __contruct($db)
	{
		$this->db = $db;
	}

	public function get($id)
	{
		$rs = $this->db->prepare('sql', $id);

		return $rs;
	}
}
