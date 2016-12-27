import { Meteor } from 'meteor/meteor'
import bodyParser from 'body-parser'
const Fiber = require('fibers')

if(Meteor.isServer) {
	Meteor.startup(() => {
		// Express
		app = Express()
		app.use(bodyParser.json())       // to support JSON-encoded bodies
		app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
		  extended: true
		}))
	})
}
