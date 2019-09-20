# CO2 Footprint

This app helps you raise awareness about how much carbon dioxide (CO2) you are producing on a daily basis. Find out your CO2 avatar and learn how to reduce your carbon footprint right now. There is no time to waste anymore!

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

### 5. Contributions

Would you help make this app better?

- Feel free to send a pull request
- Drop an email at info@programarivm.com with the subject "CO2 Footprint"
- Leave me a comment on [Twitter](https://twitter.com/programarivm)

Thank you.
