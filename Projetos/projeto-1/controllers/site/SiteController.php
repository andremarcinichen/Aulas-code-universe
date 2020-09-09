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
	public function Lista_de_jogos()
	{		

		$this->setLayout('site/shared/layout.php');
		$this->view('site/jogos/Lista dos jogos.php');

	}

	public function contact()
	{		

		$this->setLayout('site/shared/layout.php');
		$this->view('site/contact/index.php');

	}

}