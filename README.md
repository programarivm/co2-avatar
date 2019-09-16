# CO2 Footprint

This app helps you raise awareness about how much carbon dioxide (CO2) you are producing on a daily basis. Learn how to reduce your carbon footprint right now since there is no time to waste anymore.

### 1. Build the Docker Containers

    docker-compose up --build

### 2. Set up the Environment

Find the IP of the mysql and nginx containers:

    docker inspect co2_mysql
    docker inspect co2_nginx

Copy the following `.env` into the app's root directory:

    DB_SERVER=172.21.0.1
    DB_DATABASE=co2
    DB_ROOT_PASSWORD=password
    DB_USERNAME=root
    DB_PASSWORD=password

    CO2_NGINX_HOST=172.21.0.1

    JWT_SECRET=@NJ-fv=kb$de>p;4n5uP@TUTd-msSb(3,d(/tz:4@{B+"k__#ug$dRVy6>8G/q29

Reset the database:

    docker exec -it co2_php_fpm php cli/reset-database.php

### 3. Build the React App

The following command builds the app for production to the build folder:

    npm run build

### 4. Local Set up

Add the following entry to your `/etc/hosts` file:

    172.21.0.1      co2.today

Now open your favourite web browser and type in the address bar:

    http://co2.today

### 5. Test the API

#### `/auth`

Request:

    curl -v -X POST -H "Content-Type: application/json" \
      -d '{"email":"foo","password":"bar"}' \
      http://api.co2.today/auth

Response:

    *   Trying 172.21.0.1...
    * TCP_NODELAY set
    * Connected to api.co2.today (172.21.0.1) port 80 (#0)
    > POST /auth HTTP/1.1
    > Host: api.co2.today
    > User-Agent: curl/7.58.0
    > Accept: */*
    > Content-Type: application/json
    > Content-Length: 32
    >
    * upload completely sent off: 32 out of 32 bytes
    < HTTP/1.1 401 Unauthorized
    < Server: nginx/1.15.12
    < Date: Sat, 14 Sep 2019 18:48:36 GMT
    < Content-Type: text/html; charset=UTF-8
    < Transfer-Encoding: chunked
    < Connection: keep-alive
    < X-Powered-By: PHP/7.3.8
    < Access-Control-Allow-Origin: http://co2.today
    < Access-Control-Allow-Credentials: true
    < Access-Control-Allow-Methods: GET, POST, OPTIONS
    < Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range
    < Access-Control-Expose-Headers: Content-Length,Content-Range
    <
    * Connection #0 to host api.co2.today left intact
    {"message":"Unauthorized"}


#### `/points`

Request:

    curl -v --cookie "access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJpc3MiOiJodHRwczpcL1wvYXBpLmNvMi50b2RheSIsImV4cCI6MTU2ODUxNTQzOH0.otuT3J1ddLGtBKA_6TYb_2qo_-utBf9e9hwqlM1TplU" http://api.co2.today/points

Response:

    *   Trying 172.21.0.1...
    * TCP_NODELAY set
    * Connected to api.co2.today (172.21.0.1) port 80 (#0)
    > GET /points HTTP/1.1
    > Host: api.co2.today
    > User-Agent: curl/7.58.0
    > Accept: */*
    > Cookie: access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJpc3MiOiJodHRwczpcL1wvYXBpLmNvMi50b2RheSIsImV4cCI6MTU2ODUxNTQzOH0.otuT3J1ddLGtBKA_6TYb_2qo_-utBf9e9hwqlM1TplU
    >
    < HTTP/1.1 200 OK
    < Server: nginx/1.15.12
    < Date: Sat, 14 Sep 2019 18:49:56 GMT
    < Content-Type: text/html; charset=UTF-8
    < Transfer-Encoding: chunked
    < Connection: keep-alive
    < X-Powered-By: PHP/7.3.8
    < Access-Control-Allow-Origin: http://co2.today
    < Access-Control-Allow-Credentials: true
    < Access-Control-Allow-Methods: GET, POST, OPTIONS
    < Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range
    < Access-Control-Expose-Headers: Content-Length,Content-Range
    <
    * Connection #0 to host api.co2.today left intact
    {"id":"1","food":"10","residential":"15","transport":"5","created_at":"2019-01-01 00:00:00","id_user":"1"}

### 6. Contributions

Would you help make this app better?

- Feel free to send a pull request
- Drop an email at info@programarivm.com with the subject "CO2 Footprint"
- Leave me a comment on [Twitter](https://twitter.com/programarivm)

Thank you.
