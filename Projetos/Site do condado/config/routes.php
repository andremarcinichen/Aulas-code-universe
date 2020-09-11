<?php

/**
*
* Definição das rotas e seus respectivos controllers e actions
*
* @author Code Universe
*
**/

// rotas normais
$commonRoutes = array(
	'/'               => 'SiteController/index',
	'contato'         => 'SiteController/contato',
	'Lista_de_Jogos'  => 'SiteController/Lista_de_Jogos',
	'Cadastro'  => 'SiteController/cadastro',
	'Cardapio'  => 'SiteController/Cardapio',
	'Quem_somos'  => 'SiteController/Quem_somos',
	'faq'  => 'SiteController/faq',



);

// rotas POST
$commonPost = array();

$commonRoutes = array_merge($commonRoutes, $commonPost);

return $commonRoutes;