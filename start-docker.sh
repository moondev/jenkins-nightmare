#!/bin/bash

docker build -t jenkins-nightmare .

docker kill jenkins-nightmare
docker rm jenkins-nightmare
docker run -d --name jenkins-nightmare -p 4444:8080 jenkins-nightmare

sleep 10

npm install nightmare

TOKEN=`docker exec jenkins-nightmare cat /root/.jenkins/secrets/initialAdminPassword`

echo "TOKEN is $TOKEN"

node setup.js $TOKEN 'http://localhost:4444'