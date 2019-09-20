<?php

use Co2\Utils\DB;
use Co2\Utils\Authorizer;

$jwt = Authorizer::authorize();

$sql = "SELECT * FROM results WHERE id_user = {$jwt->id}";
$result = DB::getInstance()->query($sql)->fetch_array(MYSQLI_ASSOC);

http_response_code(200);
print_r(json_encode($result, true));

exit;
