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

$insert =mysqli_query($con,"INSERT INTO clientes (nome, email, telefone) VALUES ('Pedro','pedro@gmail.com','(49)9999999999')");

if($insert) {
	$clienteId = mysqli_insert_id($con);

	mysqli_query($con, "INSERT INTO chamados (clientes_id, mensagem, data, status) VALUES ('$clienteId','mensagem de teste',NOW(),0)");

}






