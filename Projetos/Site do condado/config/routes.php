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



);

// rotas POST
$commonPost = array();

$commonRoutes = array_merge($commonRoutes, $commonPost);

return $commonRoutes;