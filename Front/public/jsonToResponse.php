<?php

header('Content-Type: application/json');
ini_set('display_errors', 'off');
error_reporting(0);

$json = json_decode(file_get_contents('data.json'));

echo json_encode($json);