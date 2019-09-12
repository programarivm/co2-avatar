<?php

namespace Co2\Utils;

class DB
{
    private static $instance;

    private $mysqli;

    public static function getInstance()
    {
        if (null === static::$instance) {
            static::$instance = new static();
        }

        return static::$instance;
    }

    protected function __construct()
    {
        $this->mysqli = new \mysqli(
            getenv('DB_SERVER'),
            getenv('DB_USERNAME'),
            getenv('DB_PASSWORD'),
            getenv('DB_DATABASE')
        );
        $this->mysqli->set_charset('utf8');
    }

    /**
     * Private clone method to prevent cloning.
     */
    private function __clone()
    {
    }

    /**
     * Private unserialize method to prevent unserializing.
     */
    private function __wakeup()
    {
    }

    public function handler()
    {
        return $this->mysqli;
    }

    public function query($sql)
    {
        return $this->mysqli->query($sql);
    }

    public function multiQuery($sql)
    {
        return $this->mysqli->multi_query($sql);
    }

    public function escape($data)
    {
        return $this->mysqli->real_escape_string($data);
    }
}
