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
	'contato'         => 'SiteController/contact',
	'games'         => 'SiteController/games',
	'menu'         => 'SiteController/menu',
);

// rotas POST
$commonPost = array(
	'submitContact' => 'ContactController/submitContact',
);

$commonRoutes = array_merge($commonRoutes, $commonPost);

return $commonRoutes;