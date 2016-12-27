#!/bin/bash

echo 'BOILERPLATE INSTALLATION'

CURRENT_DIR=`pwd`
TEMP_DIR="$CURRENT_DIR/.meteorify/temp"
DEMO="demo"

if [ -d ".meteor" ]; then
    echo "This is already a Meteor app!"
    exit 1
fi

mkdir -p $TEMP_DIR
cd $TEMP_DIR

project=basename "$PWD"
echo project
meteor create project
cp -R $TEMP_DIR/project/.meteor $CURRENT_DIR

cd ../../
rm -rf .meteorify

meteor npm install

meteor add glittershark:meteor-express

meteor add yuukan:streamy

if [ -d "$DEMO" ]; then
  cd $DEMO
  sh install.sh
  exit 1
fi

open http://localhost:3000/

meteor
