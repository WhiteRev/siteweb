<?php
    $mailto = "contact.pitbullcoaching@gmail.com" ;
    $subject = "Message reçu depuis vôtre site web" ;

    $ipaddress = $_SERVER['REMOTE_ADDR'];
    $date = date('d/m/Y');
    $time = date('H:i:s');
     
    $name = $_POST['name'];   
    $firstname = $_POST['firstname'];   
    $email = $_POST['mail'];
    $subject = $_POST['subject'];

    $message = $_POST['message'];
     
    $datetime = date('d/m/Y H:i:s');
    
    $headers = "From: Site web" . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
     
    $emailbody = "<html>
  <body>
    <p><strong>Nom: </strong> {$name} </p>
    <p><strong>Prénom: </strong> {$firstname} </p>
    <p><strong>Adresse email: </strong> {$email} </p>
    <p><strong>Sujet : </strong> $subject </p>
    <p><strong>Message: </strong> {$message} </p>
    <p>FIXME...This message was sent from the IP Address: {$ipaddress} on {$date} at {$time}</p>
  </body>
</html>";
     
    mail($mailto,$subject,$emailbody,$headers);


    $url = "https://pitbull-coaching.fr" ;
    //Redirection HTTP
    header ('Location: '.$url) ; 
    header ('HTTP/1.1 302 Found') ;
    header ('Status: 302 Found') ;
    header ('Content-Type: text/html; charset=UTF-8') ;

?><!DOCTYPE html>
<html>
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="content-type">
    <title>Pitbull-coaching</title>' ;
    <meta http-equiv="refresh" content="0;url=<?php echo $url ?>">
    <meta name="robots" content="noindex,follow">
  </head>
  <body>
    <br><a href="<?php echo $url ?>">Retour &agrave; l\'accueil.</a><br>
  </body>
</html>
