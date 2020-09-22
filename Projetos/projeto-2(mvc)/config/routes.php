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
	'formulario'	=> 'SiteController/formulario',
);

// rotas POST
$commonPost = array(
	'submitform' => 'ContactController/submitform',

);

$commonRoutes = array_merge($commonRoutes, $commonPost);

return $commonRoutes;