<?php

use Co2\Utils\DB;
use Co2\Utils\Authorizer;

$sql = "SELECT * FROM avatars";
$result = DB::getInstance()->query($sql);
$rows = [];
while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $rows[] = $row;
}

http_response_code(200);
print_r(json_encode($rows, true));

exit;
