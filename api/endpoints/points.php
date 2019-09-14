<?php

use Co2\Utils\DB;
use Firebase\JWT\JWT;

try {
    $jwt = JWT::decode($_COOKIE['access_token'], getenv('JWT_SECRET'), ['HS256']);
} catch (\Exception $e) {
    $body = ['message' => 'Unauthorized'];
    http_response_code(401);
    print_r(json_encode($body, true));
}

$sql = "SELECT * FROM points WHERE id_user={$jwt->id}";
$result = DB::getInstance()->query($sql)->fetch_array(MYSQLI_ASSOC);

http_response_code(200);
print_r(json_encode($result, true));

exit;
