#!/bin/bash

CONTAINER_NAME=mysql-test-db
DB_PASSWORD=123123
DB_USER=root
HOST_PORT=3306
MYSQL_PORT=3306

docker run --name $CONTAINER_NAME -e MYSQL_ROOT_PASSWORD=$DB_PASSWORD -p $HOST_PORT:$MYSQL_PORT -d mysql
echo "Starting $CONTAINER_NAME..."
sleep 20
echo "Container started. Creating database..."
docker exec -i $CONTAINER_NAME mysql -u$DB_USER -p$DB_PASSWORD -P$MYSQL_PORT< "./setup.sql"
echo "Done!"