<?php

use Co2\Utils\DB;
use Co2\Utils\Authorizer;

$sql = "SELECT * FROM questions";
$result = DB::getInstance()->query($sql)->fetch_array(MYSQLI_ASSOC);

http_response_code(200);
print_r(json_encode($result['data'], true));

exit;
