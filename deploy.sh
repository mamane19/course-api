#!/bin/bash

echo "Executing PM2..."
pm2 delete all
echo "Starting app..."
pm2 start npm --name knack-api-dev -- run "start"
# pm2 start npm --name "myApp" -- run "start:dev"
pm2 save
