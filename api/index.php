<?php

require_once __DIR__ . '/../vendor/autoload.php';

define('APP_PATH', realpath(dirname(__FILE__) . '/../'));

$dotenv = \Dotenv\Dotenv::create(__DIR__.'/../');
$dotenv->load();

switch (true) {
    case '/auth' === $_SERVER['REQUEST_URI']:
        require_once APP_PATH.'/api/endpoints/auth.php';
    case '/calculate' === $_SERVER['REQUEST_URI']:
        require_once APP_PATH.'/api/endpoints/calculate.php';
    case '/points' === $_SERVER['REQUEST_URI']:
        require_once APP_PATH.'/api/endpoints/points.php';
    case '/questions' === $_SERVER['REQUEST_URI']:
        require_once APP_PATH.'/api/endpoints/questions.php';
}
