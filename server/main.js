import { Meteor } from 'meteor/meteor'
import bodyParser from 'body-parser'
import { Log } from '../imports/api/Log.js'
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
				console.log(response)
				console.log('new log in db, total logs ---> ', Log.find().count())
			})
		}).run()

		// ROUTE
		app.get('/hello', function (req, res) {
			// Test sream
			console.log('route hello was called...')
			setInterval(function () {
				console.log('stream hello on hello stream...')
				Streamy.broadcast('hello', {hello: 'hello'})
			}, 3000)
		})
	})
}
