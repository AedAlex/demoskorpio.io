<?php

// Define some constants
define( "RECIPIENT_NAME", "Skorpio Desarrollos" );
define( "RECIPIENT_EMAIL", "aed_alejandro@hotmailcom" );


// Read the form values
$success = false;
$senderName = isset( $_POST['nombre'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['nombre'] ) : "";
$senderEmail = isset( $_POST['correo'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['correo'] ) : "";
$senderPhone = isset( $_POST['telefono'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['telefono'] ) : "";

// If all values exist, send the email
if ( $senderName && $senderEmail && $senderPhone) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $senderName . " <" . $senderEmail . ">";
  $msgBody = " Subject: Contacar a Cliente: " . $senderName . "  Al teléfono: " . $senderPhone . " o correo: " . $senderEmail;
  $success = mail( $recipient, $headers, $msgBody );

  //Set Location After Successsfull Submission
  header('Location: contacto.html?message=success#message');
}

else{
	//Set Location After Unsuccesssfull Submission
  header('Location: contacto.html?message=fail#message');	
}

?>