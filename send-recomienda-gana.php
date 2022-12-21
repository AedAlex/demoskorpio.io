<?php

// Define some constants
define( "RECIPIENT_NAME", "Skorpio Desarrollos" );
define( "RECIPIENT_EMAIL", "info@skorpiodesarrollos.com" );


// Read the form values
$success = false;
$fraccionamiento_interes_recomendado = isset( $_POST['fraccionamiento_interes_recomendado'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['fraccionamiento_interes_recomendado'] ) : "";
$nombre_recomendado = isset( $_POST['nombre_recomendado'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['nombre_recomendado'] ) : "";
$email_recomendado = isset( $_POST['email_recomendado'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email_recomendado'] ) : "";
$telefono_recomendado = isset( $_POST['telefono_recomendado'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['telefono_recomendado'] ) : "";
$parentesco_recomendado = isset( $_POST['parentesco_recomendado'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['parentesco_recomendado'] ) : "";
$nombre = isset( $_POST['nombre'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['nombre'] ) : "";
$email = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$telefono = isset( $_POST['telefono'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['telefono'] ) : "";
$yo_soy = isset( $_POST['yo_soy'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['yo_soy'] ) : "";
$mensaje = isset( $_POST['mensaje'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['mensaje'] ) : "";

// If all values exist, send the email
if ( $fraccionamiento_interes_recomendado && $nombre_recomendado && $email_recomendado && $telefono_recomendado && $parentesco_recomendado && $nombre && $email && $telefono && $yo_soy && $mensaje) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
  $headers .= "From: " . $nombre . " <" . $email . ">";
  $msgBody = "Fraccionamiento de interés: " . $fraccionamiento_interes_recomendado . "<br/>";
  $msgBody.= "Nombre del recomendado: " . $nombre_recomendado . "<br/>";
  $msgBody.= "Email del recomendado: " . $email_recomendado . "<br/>";
  $msgBody.= "Teléfono del recomendado: " . $telefono_recomendado . "<br/>";
  $msgBody.= "Parentesco: " . $parentesco_recomendado . "<br/><br/>";
  $msgBody.= "Nombre: " . $nombre . "<br/>";
  $msgBody.= "Email: " . $email . "<br/>";
  $msgBody.= "Teléfono: " . $telefono . "<br/>";
  $msgBody.= "Yo soy: " . $yo_soy . "<br/>";
  $msgBody.= "Mensaje: " . $mensaje . "<br/>";
  $success = mail( $recipient, "Mensaje de Recomienda y gana", $msgBody, $headers );

  //Set Location After Successsfull Submission
  header('Location: recomienda-gana.html?message=success#mensaje');
}

else{
	//Set Location After Unsuccesssfull Submission
  header('Location: recomienda-gana.html?message=fail#mensaje');	
}

?>