import { Meteor } from 'meteor/meteor'
import bodyParser from 'body-parser'
import { Log } from '../imports/api/Log.js'
import express from 'express'
console.log('express', express)
const Fiber = require('fibers')

if(Meteor.isServer) {
	Meteor.startup(() => {

		// Express
		app = Express()
		app.use(bodyParser.json())       // to support JSON-encoded bodies
		app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
		  extended: true
		}))

		// Save server launch
		// Test DB connection
		// INSERT IN DB
		Fiber(function () {
			Log.insert({
				datetime: new Date()
			}, function (error, response) {
				console.log('new log (id: ' + response + ') in db, total logs ---> ', Log.find().count())
			})
		}).run()

		// ROUTE
		app.get('/getScoreInRealTime', function (req, res) {
			console.log('/getScoreInRealTime')
			// Test sream
			setInterval(function () {
				const y = Math.floor(Math.random() * 10)
				Streamy.broadcast('scoreStream', {'y': y, 'date': new Date().toLocaleTimeString()})
			}, 3000)
			res.json({data: 'response from /getScoreInRealTime...'})
		})
	})
}
