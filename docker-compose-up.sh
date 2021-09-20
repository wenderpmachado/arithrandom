#!/bin/bash

docker-compose -f "./event-bus/docker-compose.yml" up -d
docker-compose -f "./consumer/docker-compose.yml" up -d
docker-compose -f "./producer/docker-compose.yml" up --scale nodejs=2 -d
