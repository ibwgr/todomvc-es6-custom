#!/bin/bash

git clone https://github.com/ibwgr/todomvc-server.git
cd todomvc-server
yarn install
npm run start &

