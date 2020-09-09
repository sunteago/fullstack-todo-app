#!/usr/bin/env bash

echo "Installing node modules for server"
cd server
npm install
cd ..
echo "Creating test data"
node ./server/install.js
echo "Modules installed. Running server"
node ./server/index.js &
P1=$!
cd webapp 
echo "Installing node modules for client"
npm install
echo "Module installed. Running client"
npm start 
echo "Running TODOs APP" 
wait $P1
