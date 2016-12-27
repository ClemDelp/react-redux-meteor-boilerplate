#!/bin/bash

echo 'DEMO INSTALLATION'

CURRENT_DIR=`pwd`

meteor npm install

meteor add glittershark:meteor-express

meteor add yuukan:streamy

open http://localhost:3000/

meteor
