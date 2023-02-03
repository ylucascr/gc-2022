#!/bin/bash
chmod +x ./wait-for-it.sh

./wait-for-it.sh -t 120 $MYSQL_HOST:$MYSQL_PORT -- npx sequelize-cli db:migrate

npm start