<?php

$recepient = 'danzhidkof@yandex.ru';
$sitename = 'MrBurger';

$names = trim($_POST['names']);
$phone = trim($_POST['phone']);
$street = trim($_POST['street']);
$home = trim($_POST['home']);
$structure = trim($_POST['structure']);
$flat = trim($_POST['flat']);
$float = trim($_POST['float']);
$comment = trim($_POST['comment']);
$change = trim($_POST['change']);
$card = trim($_POST['card']);
$not_call = trim($_POST['not_call']);
$message = "Имя: $names \nТелефон: $phone \nУлица: $street \nДом: $home \nКорпус: $structure \nКвартира: $flat \nЭтаж: $float \nКомментарии: $comment \nПотребуется сдача: $change \nОплата по карте: $card \nНе перезванивать: $not_call";

$pagetitle = "Новая заявка с сайта \"$sitename\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

// $result = mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

// echo json_encode(array(
//     'status' => $result
// ));