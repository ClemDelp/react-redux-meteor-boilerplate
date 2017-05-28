# Meteor react-redux ready to use

For rapid prototyping with a complete react-redux environment

![alt tag](readmeFiles/demo.gif)

## WHAT INSIDE

Tech:
* backend: Meteor + Express
* frontend: React + Redux
* templating: Material-ui + Flexibox

## HOW TO USE IT
### Get the boilerplate

Depending on how you want to use the boilerplate:
* fork
* or git clone
* or Download ZIP

### Dependency

This boilerplate need meteor installed on your device: [Install meteor](https://www.meteor.com/install)

### Install

```
cd project-folder
```

If you don't want install the demo files please remove the "demo" folder before:

```
rm -rf demo
```

Then/or

```
sh install.sh
```

### DEPLOY ON HEROKU
To deploy your app on heroku:
- first you need an heroku account
- you need heroku CLI install on your device
- heroku will ask you to enter a credit card to install mongolab addon (don't worry it's free plan so they wont charge you)
- only after, in your app folder:

```
sh heroku_init.sh
```

### DEMO

[Sub folder here](https://github.com/ClemDelp/react-redux-meteor-boilerplate/tree/master/demo)
* rest-api demo with express
* web socket with streamy
* pure react component
* sagas interaction
* database interaction
* ...

Reminder, to remove all the demo files:

```
cd project-folder
rm -rf demo
```

Then restart the server

### Launch the server

By default install.sh will lunch the server, in other case simply type:

```
meteor
```

Then in browser:

```
http://localhost:3000
```

### Launch the database

Meteor use Mongo as DB
Open a new terminal with your server running
In this boilerplate by default a 'log' collection is created

```
meteor mongo
db.log.find()
```

With [Robomongo](https://robomongo.org/) create a new connection

![alt tag](readmeFiles/settings.png)

then

![alt tag](readmeFiles/collections.png)

## THEN

(•_•)...( •_•)>⌐■-■...(⌐■_■) be cool...
