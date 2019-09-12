<?php

use Co2\Utils\DB;
use Firebase\JWT\JWT;

$email = DB::getInstance()->escape($_POST['email']);
$password = DB::getInstance()->escape($_POST['password']);

$sql = "SELECT password FROM users WHERE email='$email'";
$result = DB::getInstance()->query($sql)->fetch_array(MYSQLI_ASSOC);

$isVerified = password_verify($password, current($result));

if ($isVerified) {
    $token = [
        'iss' => 'https://api.co2.today',
        'exp' => time() + (60 * 480), // 8 hours
    ];
    $jwt = JWT::encode($token, getenv('JWT_SECRET'));
    http_response_code(200);
    setcookie('access_token', $jwt);
} else {
    $body = ['message' => 'Unauthorized'];
    http_response_code(401);
    print_r(json_encode($body, true));
}

exit;
