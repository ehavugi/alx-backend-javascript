#!/usr/bin/bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm nstall --save-dev eslint

npm install
