# CO2 Footprint

Carbon footprint calculator.

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

Reset the database:

    docker exec -it co2_php_fpm php cli/reset-database.php

### 3. Generate the SSL Certificate

    cd docker/nginx/ssl
    openssl genrsa -des3 -out co2.today.pem 2048
    openssl req -new -key co2.today.pem -out co2.today.csr
    openssl x509 -req -days 365 -in co2.today.csr -signkey co2.today.pem -out co2.today.crt
    openssl rsa -in co2.today.pem -out co2.today.key

### 4. Local Set up

Add the following entry to your `/etc/hosts` file:

    172.21.0.1      co2.today

### 5. Run the App

Open your favourite web browser and type in the address bar:

    https://co2.today
