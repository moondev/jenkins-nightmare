#!/bin/bash

npm install nightmare

URL=`minikube service --url jenkins`

PODID=`kubectl get pods --selector=app=jenkins --output=jsonpath={.items..metadata.name}`

TOKEN=`kubectl exec $PODID cat /var/jenkins_home/secrets/initialAdminPassword`

echo "TOKEN is $TOKEN"
echo $TOKEN > token.txt

node setup.js $TOKEN $URL