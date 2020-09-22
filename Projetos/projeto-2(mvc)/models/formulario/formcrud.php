<?php

// classe que configura o crud do contato


class ContactCrud
{
	private $pdoCrud;
	private $table = 'cadastro';

	public function __construct()
	{
		$this->pdoCrud = new PDOCrud;
		# code...
	}

	public function saveContact($id=null, $nome, $email, $senha,$identidade)
	{
		$pdo =array(
			':nome' => $nome,
			':email' => $email,
			':senha' => $senha,
			':identidade' => $identidade,
		);

		$columns = 'nome, email, senha, identidade';
		$values= ':nome, :email, :senha, :identidade';

		return $this->pdoCrud->insert($this->table, $columns,$values,$pdo);



	}
}