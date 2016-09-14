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
				console.log('new log (id: ' + response + ') in db, total logs ---> ', Log.find().count())
			})
		}).run()

		// ROUTE
		app.get('/hello', function (req, res) {
			// Test sream
			console.log('route /hello was called...')
			Streamy.broadcast('hello', {data: new Date().toLocaleTimeString() + ' - Hello from stream...'})
			res.json({data: 'response from /hello...'})
		})
	})
}
