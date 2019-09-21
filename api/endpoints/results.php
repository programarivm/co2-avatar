<?php

use Co2\Utils\DB;
use Co2\Utils\Authorizer;

$input = file_get_contents('php://input');
$post = json_decode($input, TRUE);

$results = [
    'food' => 0,
    'residential' => 0,
    'transport' => 0,
];

foreach ($post as $question) {
    $results[$question['type']] += current($question['values']);
}

$total = $results['food'] + $results['residential'] + $results['transport'];
$pctFood = $results['food'] * 100 / 400;
$pctResidential = $results['residential'] * 100 / 400;
$pctTransport = $results['transport'] * 100 / 400;

$pctAverage = ($pctFood + $pctResidential + $pctTransport) / 3;

if (20 > $pctAverage) {
    $idAvatar = 1;
} elseif (40 > $pctAverage) {
    $idAvatar = 2;
} elseif (60 > $pctAverage) {
    $idAvatar = 3;
} elseif (80 > $pctAverage) {
    $idAvatar = 4;
} else {
    $idAvatar = 5;
}

http_response_code(200);
print_r(json_encode([
    'total' => $total,
    'pct_food' => $pctFood,
    'pct_residential' => $pctResidential,
    'pct_transport' => $pctTransport,
    'id_avatar' => $idAvatar,
], true));

exit;
