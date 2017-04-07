#!/bin/bash

#npm install nightmare

URL=`minikube service --url jenkins`

echo "JENKINS URL is $URL"

PODID=`kubectl get pods --selector=app=jenkins --output=jsonpath={.items..metadata.name}`

echo "PODIS is $PODID"

TOKEN=`kubectl exec $PODID cat /root/.jenkins/secrets/initialAdminPassword`

echo "TOKEN is $TOKEN"

echo $TOKEN > token.txt

node setup.js $TOKEN $URL