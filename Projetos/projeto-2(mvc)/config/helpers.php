<?php

/**
*
* Arquivo onde são definidos os helpers
*
* @author Code Universe
*
**/
// define('LOCAL_URL', '/andre_ramos/projeto-2(mvc)/');

define('LOCAL_URL', '/andre_ramos/aulas-code-universe/Projetos/projeto-2(mvc)/');

// if($env == "dev"){
// 	define('LOCAL_URL', '/pasta_do_projeto');
// }
// elseif($env == "prod"){
// 	define('LOCAL_URL', 'https://www.google.com.br/');
// }

return array(
	'URLHelper' 	=> new URLHelper(),
);