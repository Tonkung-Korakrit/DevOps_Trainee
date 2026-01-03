#!/bin/bash

ENV_FILE=".env"

if [ -f "$ENV_FILE" ]; then
	# export $(grep -v '^#' .env | xargs)
	# sed -i 's/\r$//' "$ENV_FILE"
	echo "Cleaning and Loading $ENV_FILE"
	set -a
	source <(sed 's/\r$//' "$ENV_FILE" | sed 's/ *= */=/g')
	set +a
	echo "Load .env success"
else 
	echo " Error: not found $ENV_FILE!. Please Check environment file"
	exit 1
fi

echo "Start project: $PROJECT_NAME"

echo "Build and Starting Containers..."
docker compose up -d --build

if [ $? -eq 0 ]; then
	echo "System Success."
else
	echo "Oops! Something went wrong during the build."
	exit 1
fi

echo "Deploying $PROJECT_NAME for user $DOCKER_USER..."
docker build -t $DOCKER_USER/$PROJECT_NAME:latest .

echo "Cleaning up old images..."
docker image prune -f

echo "Pushing image to Docker Hub..."
docker push $DOCKER_USER/$PROJECT_NAME:latest

CLEAN_URL=$(echo "$WEBHOOK_URL" | tr -d '\r' | xargs)
CLEAN_MESSAGE=$(echo "$MESSAGE" | tr -d '\r')

echo "DEBUG URL: [${CLEAN_URL}]"
echo "DEBUG MSG: [${CLEAN_MESSAGE}]"

# echo "URL: http://localhost:3000"
# echo "GUI: http://localhost:8081"

if [ -z "$CLEAN_URL" ]; then
	echo "Skip notification: WEBHOOK_URL is empty."
else
	echo "Sending notification to Discord..."
	curl -H "Content-Type: application/json" \
	     -X POST \
	     -d "{\"content\": \"$CLEAN_MESSAGE\"}" \
	     "$CLEAN_URL"
fi
