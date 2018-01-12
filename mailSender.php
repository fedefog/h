<?php
if(isset($_POST['email']) && !empty($_POST['email'])):

require 'phpMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
//Set who the message is to be sent from
$mail->setFrom('hello@studiohakuna.com', $_POST['name']);
//Set an alternative reply-to address
$mail->addReplyTo($_POST['email'], $_POST['name']);
//Set who the message is to be sent to
$mail->addAddress('hello@studiohakuna.com', 'Mr Haku');
//Set the subject line
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Hakuna Web Contact';
$mail->Body    = '
<h1>Message recived from Hakuna Website</h1>
<p>From: '.$_POST['name'].'</p>
<p>Email: '.$_POST['email'].'</p>
<b style="font-size:18px">Message: </b>'.$_POST["message"].'
';
$mail->AltBody = 'This is a plain-text message body';
//Attach an image file

//send the message, check for errors
if (!$mail->send()) {
    echo "error";
    //echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "ok";
}

endif;
?>