var require = meteorInstall({"imports":{"api":{"Log.js":["meteor/mongo",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/api/Log.js                                                                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.export({Log:function(){return Log}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                    //
var Log = new Mongo.Collection('log');                                                                              // 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"server":{"main.js":["meteor/meteor","body-parser","../imports/api/Log.js","fibers",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// server/main.js                                                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var bodyParser;module.import('body-parser',{"default":function(v){bodyParser=v}});var Log;module.import('../imports/api/Log.js',{"Log":function(v){Log=v}});
                                                                                                                    // 2
                                                                                                                    // 3
var Fiber = require('fibers');                                                                                      // 4
                                                                                                                    //
if (Meteor.isServer) {                                                                                              // 6
	Meteor.startup(function () {                                                                                       // 7
                                                                                                                    //
		// Express                                                                                                        //
		app = Express();                                                                                                  // 10
		app.use(bodyParser.json()); // to support JSON-encoded bodies                                                     // 11
		app.use(bodyParser.urlencoded({ // to support URL-encoded bodies                                                  // 12
			extended: true                                                                                                   // 13
		}));                                                                                                              // 12
                                                                                                                    //
		// Save server launch                                                                                             //
		// Test DB connection                                                                                             //
		// INSERT IN DB                                                                                                   //
		Fiber(function () {                                                                                               // 19
			Log.insert({                                                                                                     // 20
				datetime: new Date()                                                                                            // 21
			}, function (error, response) {                                                                                  // 20
				console.log('new log (id: ' + response + ') in db, total logs ---> ', Log.find().count());                      // 23
			});                                                                                                              // 24
		}).run();                                                                                                         // 25
                                                                                                                    //
		// ROUTE                                                                                                          //
		app.get('/getScoreInRealTime', function (req, res) {                                                              // 28
			console.log('/getScoreInRealTime');                                                                              // 29
			// Test sream                                                                                                    //
			setInterval(function () {                                                                                        // 31
				var y = Math.floor(Math.random() * 10);                                                                         // 32
				Streamy.broadcast('scoreStream', { 'y': y, 'date': new Date().toLocaleTimeString() });                          // 33
			}, 3000);                                                                                                        // 34
			res.json({ data: 'response from /getScoreInRealTime...' });                                                      // 35
		});                                                                                                               // 36
	});                                                                                                                // 37
}                                                                                                                   // 38
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
