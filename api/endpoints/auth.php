<?php

use Co2\Utils\DB;
use Firebase\JWT\JWT;

$input = file_get_contents('php://input');
$post = json_decode($input, TRUE);

$email = DB::getInstance()->escape($post['email']);
$password = DB::getInstance()->escape($post['password']);

$sql = "SELECT id, password FROM users WHERE email='$email'";
$result = DB::getInstance()->query($sql)->fetch_array(MYSQLI_ASSOC);

if (empty($result)) {
    $body = ['message' => 'Unauthorized'];
    http_response_code(401);
    print_r(json_encode($body, true));
} elseif (password_verify($password, $result['password'])) {
    $token = [
        'id' => $result['id'],
        'iss' => 'https://api.co2.today',
        'exp' => time() + (60 * 480), // 8 hours
    ];
    $jwt = JWT::encode($token, getenv('JWT_SECRET'));
    $body = ['access_token' => $jwt];
    http_response_code(204);
    setcookie('access_token', $jwt);
} else {
    $body = ['message' => 'Unauthorized'];
    http_response_code(401);
    print_r(json_encode($body, true));
}

exit;
