#!/bin/bash

docker kill jenkins-nightmare
docker rm jenkins-nightmare
docker run -d --name jenkins-nightmare -p 4444:8080 jenkins:latest

sleep 10

npm install nightmare

TOKEN=`docker exec jenkins-nightmare cat /var/jenkins_home/secrets/initialAdminPassword`

echo "TOKEN is $TOKEN"

node setup.js $TOKEN