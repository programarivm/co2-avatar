<?php

namespace Co2\Utils;

use Firebase\JWT\JWT;

class Authorizer
{
    public static function authorize() {
      try {
          $jwt = JWT::decode($_COOKIE['access_token'], getenv('JWT_SECRET'), ['HS256']);
          return $jwt;
      } catch (\Exception $e) {
          $body = ['message' => 'Unauthorized'];
          http_response_code(401);
          print_r(json_encode($body, true));
          exit;
      }
    }
}
