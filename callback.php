<?php

  $name        = $_POST['username'];
  $tel         = $_POST['phone-number'];

  $to       = 'Latintorg1@gmail.com, iamkazimirov@gmail.com'; // кому отправлять письмо
  $from     = 'noreply@fruitbe.ru';
  $subject  = "FruitBe: обратный звонок"; // тема письма
  $headers  = "From: noreply@fruitbe.ru \r\n"; // от кого письмо
  $headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n";
  $headers .= 'Content-Transfer-Encoding: quoted-printable' . "\r\n\r\n";

  $message = "FruitBe: обратный звонок
------------------------------
Имя: $name
Телефон: $tel
------------------------------
";

  mail($to, $subject, $message, $headers);

?>