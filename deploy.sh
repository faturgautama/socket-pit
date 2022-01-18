#!/usr/bin/env bash
echo "############# starting deployment... ##############"
./versioning.sh

BUILD_DATE=$(sed -n 's/^BUILD_DATE=\(.*\)/\1/p' < /var/jenkins_home/envstore/cis_patriot.env)
BUILD_VERSION=$(sed -n 's/^BUILD_VERSION=\(.*\)/\1/p' < /var/jenkins_home/envstore/cis_patriot.env)

IMAGE_NAME=his/printer-socket:$BUILD_DATE.$BUILD_VERSION

echo "1. building new image : $IMAGE_NAME"

#docker-compose build
docker-compose --env-file /var/jenkins_home/envstore/printer_socket.env build

echo "2. update container with new image : $IMAGE_NAME"

docker-compose --env-file /var/jenkins_home/envstore/printer_socket.env up -d

echo "############# deployment completed ... ##############"






