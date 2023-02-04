#!/bin/bash
chmod +x ./wait-for-it.sh

./wait-for-it.sh -t 120 $BACKEND_HOST:$BACKEND_PORT -- npm start