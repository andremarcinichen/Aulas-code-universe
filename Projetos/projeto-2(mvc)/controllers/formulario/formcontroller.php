<?php


class FormController extends Controller {
	public function submitform(){
		$id = null;
		$nome = $_POST['nome'];
		$email = $_POST['email'];
		$senha = $_POST['senha'];
		var_dump($_POST);
		// $identidade = $_POST['identidade'];,	
		
		$saveform = new formcrud;
		$saveform = $saveform ->saveform($id,$nome,$email,$senha,$identidade);

		echo json_encode(array(
			'result' => $saveform,
		));
	} 
}