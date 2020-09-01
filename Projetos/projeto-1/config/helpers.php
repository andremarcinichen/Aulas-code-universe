<?php

/**
*
* Arquivo onde são definidos os helpers
*
* @author Code Universe
*
**/

define('LOCAL_URL', '/andre_ramos/Aulas-code-universe/Projetos/projeto-1');

	
// if($env == "dev"){
// 	define('LOCAL_URL', '/pasta_do_projeto');
// }
// elseif($env == "prod"){
// 	define('LOCAL_URL', 'https://www.google.com.br/');
// }

return array(
	'URLHelper' 	=> new URLHelper(),
);