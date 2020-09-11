<?php

/**
*
* Controller do site.
*
* @author Code Universe
*
**/
class SiteController extends Controller
{

	public function index()
	{		
		$this->setLayout('site/shared/layout.php');
		$this->view('site/home/index.php');
	}
	public function contato()
	{		
		$this->setLayout('site/shared/layout.php');
		$this->view('site/contato/contato.php');
	}
	public function Lista_de_jogos()
	{		
		$this->setLayout('site/shared/layout.php');
		$this->view('site/Lista dos jogos/Lista dos jogos.php');
	}
	public function Cadastro()
	{		
		$this->setLayout('site/shared/layout.php');
		$this->view('site/cadastro/cadastro.php');
	}
	public function Cardapio()
	{		
		$this->setLayout('site/shared/layout.php');
		$this->view('site/cardapio/cardapio.php');
	}
	public function Quem_somos()
	{		
		$this->setLayout('site/shared/layout.php');
		$this->view('site/quemsomos/quemsomos.php');
	}
	public function faq()
	{		
		$this->setLayout('site/shared/layout.php');
		$this->view('site/faq/faq.php');
	}
}