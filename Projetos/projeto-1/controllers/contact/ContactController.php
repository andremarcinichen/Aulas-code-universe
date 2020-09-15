<?php


class ContactController extends Controller {
	public function submitContact(){
		$id = null;
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$message = $_POST['message'];
		
		$saveContact = new contactCrud;
		$saveContact = $saveContact ->saveContact($id,$name,$email,$phone,$message);

		echo json_encode(array(
			'result' => $saveContact,
		));
	} 
}