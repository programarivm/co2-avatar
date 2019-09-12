<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Co2\Utils\DB;

define('APP_PATH', realpath(dirname(__FILE__) . '/../'));

$dotenv = \Dotenv\Dotenv::create(__DIR__.'/../');
$dotenv->load();

$sql = file_get_contents(APP_PATH.'/docker/mysql/database.sql');

DB::getInstance()->multiQuery($sql);
