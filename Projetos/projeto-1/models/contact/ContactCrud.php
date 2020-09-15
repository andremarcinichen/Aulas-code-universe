<?php

// classe que configura o crud do contato


class ContactCrud
{
	private $pdoCrud;
	private $table = 'contact';

	public function __construct()
	{
		$this->pdoCrud = new PDOCrud;
		# code...
	}

	public function saveContact($id=null, $name, $email, $phone,$message)
	{
		$pdo =array(
			':name' => $name,
			':email' => $email,
			':phone' => $phone,
			':message' => $message,
		);

		$columns = 'name, email, phone, message';
		$values= ':name, :email, :phone, :message';

		return $this->pdoCrud->insert($this->table, $columns,$values,$pdo);



	}
}
