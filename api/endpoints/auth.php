<?php

use Co2\Utils\DB;

$email = DB::getInstance()->escape($_POST['email']);
$password = DB::getInstance()->escape($_POST['password']);

$sql = "SELECT COUNT(*) as total FROM users WHERE email=$email AND password=$password";
$result = DB::getInstance()->query($sql);
$row = $result->fetch_array(MYSQLI_ASSOC);

echo 'TODO ...';

exit;
