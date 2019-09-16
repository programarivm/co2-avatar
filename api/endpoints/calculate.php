<?php

use Co2\Utils\DB;
use Firebase\JWT\JWT;

try {
    $jwt = JWT::decode($_COOKIE['access_token'], getenv('JWT_SECRET'), ['HS256']);
} catch (\Exception $e) {
    $body = ['message' => 'Unauthorized'];
    http_response_code(401);
    print_r(json_encode($body, true));
    exit;
}

http_response_code(204);

// TODO ...

exit;
