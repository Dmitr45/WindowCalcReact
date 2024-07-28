<?php

require_once 'vendor/autoload.php';
$config = require 'config.php';
ini_set('display_errors', 'off');
error_reporting(0);
header('Access-Control-Allow-Origin: *');
header('content-type: application/json; charset=utf-8');

$req = json_decode(file_get_contents("php://input"));

$typeWindow = $req->typeWindow;
$widthWindow = $req->widthWindow;
$heightWindow = $req->heightWindow;
$profileName = $req->profileName;
$glassName = $req->glassName;
$montage = $req->montage;
$delivery = $req->delivery;
$option0 = $req->option0;
$option1 = $req->option1;
$option2 = $req->option2;
$email = $req->email;
$name = $req->name;

$title = 'Параметры заявки';
$body = "
    <html>
        <head>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
            <title></title>
        </head>
        <body>
            <div id='email-wrap' style='background: #0764c9; color: white; padding: 30px'>
            <p> $name ($email),  спасибо за ваш выбор окна:
            <p>Количество секций: $typeWindow</p>
            <p>Ширина: $widthWindow</p>
            <p>Высота: $heightWindow</p>
            <p>Профиль: $profileName</p>
            <p>Стекло: $glassName</p>
            <p>Монтаж: $montage</p>
            <p>Доставка: $delivery</p>
            <p>Отлив: $option0</p>
            <p>Подоконник: $option1</p>
            <p>Маскитная сетка: $option2</p>
            </div>
        </body>
        </html>
            ";

$mail = new PHPMailer\PHPMailer\PHPMailer();

$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->SMTPAuth = true;
$mail->SMTPDebug = 2;
$mail->Host = 'ssl://smtp.yandex.ru';
$mail->Port = 465;
$mail->Username = $config['username'];
$mail->Password = $config['password'];
$mail->SMTPSecure = 'ssl';
$mail->setFrom('PletnevDN.corp@yandex.ru', 'Дмитрий');

$mail->addAddress($email);

$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

if ($mail->send())
    echo json_encode(['message' => 'Сообщение успешно отправлено']);
else
    echo json_encode(['message' => 'Ошибка при отправке сообщения: ' . error_get_last()]);
