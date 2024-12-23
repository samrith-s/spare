#!/usr/bin/env bash

set -e 

echo "Starting the app.."

scripts/shell/build-icons.sh;

# A generic script to start the Expo dev server
# This script is used by the start, android, ios & web command in package.json
node_modules/.bin/expo start $@