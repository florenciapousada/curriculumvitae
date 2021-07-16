<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


require 'PHPMailer/PHPMailerAutoload.php';

try {

    $nombre = trim($_POST['nombre']);  
    $email = trim($_POST['email']); 
    $telefono = trim($_POST['telefono']);      
    $mensaje = trim($_POST['mensaje']); 

   

    

    $mail = new PHPMailer(true);

    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'acis.maquinas@gmail.com';                 // SMTP username
    $mail->Password = 'Acis1234';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('acis.maquinas@gmail.com', 'Sitio acissrl.com.ar');
    $mail->addAddress('florenciapousada@gmail.com', 'Info');     // Add a recipient
    $mail->addBCC('mcurras@acis.com.ar'); 
    $mail->addReplyTo($email, $nombre);

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contacto desde el sitio web';
    $mail->Body    = '<strong>Nombre: </strong>' . $nombre . '<br><strong>Email: </strong>' . $email . '<br><strong>Tel: </strong>' . $telefono . '<br><strong>Mensaje: </strong>' . nl2br($mensaje);

    $mail->send();
    //echo 'Message has been sent';
    echo "1";
} catch (Exception $e) {
    echo 'no se pudo enviar el mensaje';
}
