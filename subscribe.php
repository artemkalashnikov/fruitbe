<?php

  $name        = $_POST['username'];
  $mail        = $_POST['email'];

  $to       = 'Latintorg1@gmail.com, iamkazimirov@gmail.com'; // кому отправлять письмо
  $from     = 'noreply@fruitbe.ru';
  $subject  = "FruitBe: Подписка на обновления"; // тема письма
  $headers  = "From: noreply@fruitbe.ru \r\n"; // от кого письмо
  $headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n";
  $headers .= 'Content-Transfer-Encoding: quoted-printable' . "\r\n\r\n";

  $message = "FruitBe: Подписка на обновления
------------------------------
Имя: $name
Телефон: $mail
------------------------------
";

  mail($to, $subject, $message, $headers);

?>