<?php

require_once __DIR__ . '/../vendor/autoload.php';

define('APP_PATH', realpath(dirname(__FILE__) . '/../'));

$dotenv = \Dotenv\Dotenv::create(__DIR__.'/../');
$dotenv->load();

switch (true) {
    case '/auth' === $_SERVER['REQUEST_URI']:
        require_once APP_PATH.'/api/endpoints/auth.php';
    case '/avatars' === $_SERVER['REQUEST_URI']:
        require_once APP_PATH.'/api/endpoints/avatars.php';
    case '/calculate' === $_SERVER['REQUEST_URI']:
        require_once APP_PATH.'/api/endpoints/calculate.php';
    case '/questions' === $_SERVER['REQUEST_URI']:
        require_once APP_PATH.'/api/endpoints/questions.php';
    case '/results' === $_SERVER['REQUEST_URI']:
        require_once APP_PATH.'/api/endpoints/results.php';
}
