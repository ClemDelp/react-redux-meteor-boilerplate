(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var RoutePolicy = Package.routepolicy.RoutePolicy;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;

/* Package-scope variables */
var Express;

(function(){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// packages/glittershark_meteor-express/packages/glittershark_meteor-expr //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/glittershark:meteor-express/express-meteor.js            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var express = Npm.require('express');                                // 1
Express = function() {                                               // 2
  var app = express();                                               // 3
  WebApp.connectHandlers.use(Meteor.bindEnvironment(app));           // 4
  return app;                                                        // 5
};                                                                   // 6
                                                                     // 7
///////////////////////////////////////////////////////////////////////

}).call(this);

////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['glittershark:meteor-express'] = {}, {
  Express: Express
});

})();

//# sourceMappingURL=glittershark_meteor-express.js.map
