<?php

use Co2\Utils\DB;
use Co2\Utils\Authorizer;

$jwt = Authorizer::authorize();

http_response_code(204);

// TODO ...

exit;
