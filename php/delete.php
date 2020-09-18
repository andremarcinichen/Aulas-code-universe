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

$delete = mysqli_query($con, "DELETE FROM clientes WHERE email= 'bruna@gmail.com'");
$alter = mysqli_query($con, "ALTER TABLE clientes AUTO_INCRMENT = 1");
$alter2 = mysqli_query($con, "ALTER TABLE chamados AUTO_INCRMENT = 1");