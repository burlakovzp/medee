<?php

$sendto   = "autochekhol@gmail.com";
//$viber = $_POST['viber'];
$usertel = $_POST['phone'];
$usermail = $_POST['email'];
$usermodel = $_POST['model'];

// Формирование заголовка письма
$subject  = "Новое сообщение";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта</h2>\r\n";
//$msg .= "<p><strong>От кого:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
$msg .= "<p><strong>Модель:</strong> ".$usermodel."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
@mail($sendto, $subject, $msg, $headers);
//if() {
//    echo "SUCCESS";
//} else {
//    echo "FAIL";
//}

?>