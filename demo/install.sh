#!/bin/bash

CURRENT_DIR=`pwd`
TEMP_DIR="$CURRENT_DIR/.meteorify/temp"

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

open http://localhost:3000/

meteor
