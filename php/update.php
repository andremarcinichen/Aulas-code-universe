<?php

//host
// nome de usuario
//senha
//nome do banco
$con = mysqli_connect('localhost','root','','bancodedados1');

//verifica  a conexão
if(mysqli_connect_errno()){
	echo "a conexão falhou" . mysqli_connect_errno();
} else {
	echo "conectado";
}

$update = mysqli_query($con,"UPDATE clientes SET nome= 	'bruna',email = 'bruna@gmail.com' WHERE email='pedro@gmail.com'");

