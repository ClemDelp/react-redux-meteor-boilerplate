#!/bin/bash

echo 'CREATE AN HEROKU INSTANCE'
CURRENT_DIR=`pwd`
APP_NAME=${CURRENT_DIR##*/}
heroku login
heroku apps:create $APP_NAME
heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git --app $APP_NAME
heroku addons:create mongolab --app $APP_NAME
heroku config:set ROOT_URL="https://$APP_NAME.herokuapp.com" --app $APP_NAME

echo 'PUSH YOUR APP TO HEROKU'
heroku git:remote -a $APP_NAME
git remote -v
git push heroku master
