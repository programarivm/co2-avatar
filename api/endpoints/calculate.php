<?php

use Co2\Utils\DB;
use Co2\Utils\Authorizer;

$jwt = Authorizer::authorize();

$input = file_get_contents('php://input');
$post = json_decode($input, TRUE);

$results = [
    'food' => 0,
    'residential' => 0,
    'transport' => 0,
];

foreach ($post as $category => $values) {
    foreach ($values as $value) {
        $results[$category] += current($value);
    }
}

$sql = "UPDATE points SET
        food = {$results['food']},
        residential = {$results['residential']},
        transport = {$results['transport']}
    WHERE id_user = {$jwt->id}";

$result = DB::getInstance()->query($sql);

if ($result) {
    $body = ['message' => 'Success'];
    http_response_code(200);
    print_r(json_encode($body, true));
} else {
    $body = ['message' => 'Internal Server Error'];
    http_response_code(500);
    print_r(json_encode($body, true));
}

exit;
