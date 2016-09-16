(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var check = Package.check.check;
var Match = Package.check.Match;
var ReactiveVar = Package['reactive-var'].ReactiveVar;

/* Package-scope variables */
var Streamy;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/yuukan_streamy/packages/yuukan_streamy.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/yuukan:streamy/lib/namespaces.js                                                                      //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Streamy = {};                                                                                                     // 1
Streamy.BroadCasts = {};                                                                                          // 2
Streamy.DirectMessages = {};                                                                                      // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/yuukan:streamy/lib/core/core.js                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var handlers = {};                                                                                                // 1
var connect_handlers = [];                                                                                        // 2
var disconnect_handlers = [];                                                                                     // 3
                                                                                                                  // 4
// -------------------------------------------------------------------------- //                                  // 5
// --------------------- Overriden by client/server ------------------------- //                                  // 6
// -------------------------------------------------------------------------- //                                  // 7
                                                                                                                  // 8
/**                                                                                                               // 9
 * Init streamy, attach base handlers in client/server                                                            // 10
 */                                                                                                               // 11
Streamy.init = function() { };                                                                                    // 12
                                                                                                                  // 13
/**                                                                                                               // 14
 * Write the message on the socket                                                                                // 15
 * @param {String} data Data stringified                                                                          // 16
 * @param {Object} to (Server side) Which socket should we use                                                    // 17
 */                                                                                                               // 18
Streamy._write = function(data, to) { };                                                                          // 19
                                                                                                                  // 20
// -------------------------------------------------------------------------- //                                  // 21
// ------------------------------ Accessors --------------------------------- //                                  // 22
// -------------------------------------------------------------------------- //                                  // 23
                                                                                                                  // 24
/**                                                                                                               // 25
 * Retrieve connect handlers                                                                                      // 26
 */                                                                                                               // 27
Streamy.connectHandlers = function() {                                                                            // 28
  return connect_handlers;                                                                                        // 29
};                                                                                                                // 30
                                                                                                                  // 31
/**                                                                                                               // 32
 * Retrieve disconnect handlers                                                                                   // 33
 */                                                                                                               // 34
Streamy.disconnectHandlers = function() {                                                                         // 35
  return disconnect_handlers;                                                                                     // 36
};                                                                                                                // 37
                                                                                                                  // 38
/**                                                                                                               // 39
 * Retrieve all handlers or the one for the given message                                                         // 40
 * @param {String} message Optional, if defined, returns the handler for this specific messsage                   // 41
 */                                                                                                               // 42
Streamy.handlers = function(message) {                                                                            // 43
  if(message) {                                                                                                   // 44
    var handler = handlers[message];                                                                              // 45
    if(!handler)                                                                                                  // 46
      handler = function() {};                                                                                    // 47
                                                                                                                  // 48
    return handler;                                                                                               // 49
  }                                                                                                               // 50
                                                                                                                  // 51
  return handlers;                                                                                                // 52
};                                                                                                                // 53
                                                                                                                  // 54
// -------------------------------------------------------------------------- //                                  // 55
// -------------------------- Common interface ------------------------------ //                                  // 56
// -------------------------------------------------------------------------- //                                  // 57
                                                                                                                  // 58
/**                                                                                                               // 59
 * Apply a specific prefix to avoid name conflicts                                                                // 60
 * @param {String} value Base value                                                                               // 61
 * @return {String} The base value prefixed                                                                       // 62
 */                                                                                                               // 63
Streamy._applyPrefix = function(value) {                                                                          // 64
  return 'streamy$' + value;                                                                                      // 65
};                                                                                                                // 66
                                                                                                                  // 67
/**                                                                                                               // 68
 * Register an handler for the given message type                                                                 // 69
 * @param {String} message Message name to handle                                                                 // 70
 * @param {Function} callback Callback to call when this message is received                                      // 71
 */                                                                                                               // 72
Streamy.on = function(message, callback) {                                                                        // 73
  message = Streamy._applyPrefix(message);                                                                        // 74
  handlers[message] = Meteor.bindEnvironment(callback);                                                           // 75
};                                                                                                                // 76
                                                                                                                  // 77
/**                                                                                                               // 78
 * Adds an handler for the connection success                                                                     // 79
 * @param {Function} callback Callback to call upon connection                                                    // 80
 */                                                                                                               // 81
Streamy.onConnect = function(callback) {                                                                          // 82
  connect_handlers.push(Meteor.bindEnvironment(callback));                                                        // 83
};                                                                                                                // 84
                                                                                                                  // 85
/**                                                                                                               // 86
 * Adds an handler for the disconnection                                                                          // 87
 * @param {Function} callback Callback to call upon disconnect                                                    // 88
 */                                                                                                               // 89
Streamy.onDisconnect = function(callback) {                                                                       // 90
  disconnect_handlers.push(Meteor.bindEnvironment(callback));                                                     // 91
};                                                                                                                // 92
                                                                                                                  // 93
/**                                                                                                               // 94
 * Emits a message with the given name and associated data                                                        // 95
 * @param {String} message Message name to emit                                                                   // 96
 * @param {Object} data Data to send                                                                              // 97
 * @param {Socket} to (Server side only) which socket we should use                                               // 98
 */                                                                                                               // 99
Streamy.emit = function(message, data, to) {                                                                      // 100
  data = data || {};                                                                                              // 101
  message = Streamy._applyPrefix(message);                                                                        // 102
                                                                                                                  // 103
  check(message, String);                                                                                         // 104
  check(data, Object);                                                                                            // 105
                                                                                                                  // 106
  data.msg = message;                                                                                             // 107
                                                                                                                  // 108
  Streamy._write(JSON.stringify(data), to);                                                                       // 109
};                                                                                                                // 110
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/yuukan:streamy/lib/direct_messages/direct_messages.js                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
// -------------------------------------------------------------------------- //                                  // 1
// --------------------- Overriden by client/server ------------------------- //                                  // 2
// -------------------------------------------------------------------------- //                                  // 3
                                                                                                                  // 4
/**                                                                                                               // 5
 * Gets the wrapper for the emit returned by Streamy.sessions(sid)                                                // 6
 * @param {String|Array} sid Session id(s)                                                                        // 7
 * @return  {Function}  Function which will be called by emit on the session                                      // 8
 */                                                                                                               // 9
Streamy._sessionsEmit = function(sid) { };                                                                        // 10
                                                                                                                  // 11
/**                                                                                                               // 12
 * Gets the wrapper for the emit returned by Streamy.sessionsForUsers(sid)                                        // 13
 * @param {String|Array} uid User id(s)                                                                           // 14
 * @return  {Function}  Function which will be called by emit on the session                                      // 15
 */                                                                                                               // 16
Streamy._sessionsForUsersEmit = function(uid) { };                                                                // 17
                                                                                                                  // 18
// -------------------------------------------------------------------------- //                                  // 19
// -------------------------- Common interface ------------------------------ //                                  // 20
// -------------------------------------------------------------------------- //                                  // 21
                                                                                                                  // 22
/**                                                                                                               // 23
 * Returns an object for the targetted session id(s) which contains an emit method                                // 24
 * @param {String|Array} sid Session id(s)                                                                        // 25
 * @return  {Object}  Object with an emit function                                                                // 26
 */                                                                                                               // 27
Streamy.sessions = function(sid) {                                                                                // 28
  return {                                                                                                        // 29
    emit: Streamy._sessionsEmit(sid)                                                                              // 30
  };                                                                                                              // 31
};                                                                                                                // 32
                                                                                                                  // 33
/**                                                                                                               // 34
 * Returns an object for the targetted user id(s) which contains an emit method                                   // 35
 * @param {String|Array} uid User id(s)                                                                           // 36
 * @return  {Object}  Object with an emit function                                                                // 37
 */                                                                                                               // 38
Streamy.sessionsForUsers = function(uid) {                                                                        // 39
  return {                                                                                                        // 40
    emit: Streamy._sessionsForUsersEmit(uid)                                                                      // 41
  }                                                                                                               // 42
};                                                                                                                // 43
                                                                                                                  // 44
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/yuukan:streamy/lib/broadcasts/broadcasts.js                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
// -------------------------------------------------------------------------- //                                  // 1
// --------------------- Overriden by client/server ------------------------- //                                  // 2
// -------------------------------------------------------------------------- //                                  // 3
                                                                                                                  // 4
/**                                                                                                               // 5
 * Returns an object for the targetted session id which contains an emit method                                   // 6
 * @param {String} message Message to emit                                                                        // 7
 * @param {Object} data Data to send                                                                              // 8
 * @param {Array|String} except Which sid should we exclude from the broadcast message                            // 9
 */                                                                                                               // 10
Streamy.broadcast = function(message, data, except) { };                                                          // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/yuukan:streamy/lib/utils/utils.js                                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
// -------------------------------------------------------------------------- //                                  // 1
// --------------------- Overriden by client/server ------------------------- //                                  // 2
// -------------------------------------------------------------------------- //                                  // 3
                                                                                                                  // 4
/**                                                                                                               // 5
 * Retrieve the connection id                                                                                     // 6
 * @param  {Socket} socket On server, should be given to determine the concerned connection                       // 7
 * @return {String}        The connection id                                                                      // 8
 */                                                                                                               // 9
Streamy.id = function(socket) {};                                                                                 // 10
                                                                                                                  // 11
/**                                                                                                               // 12
 * Retrieve the user id                                                                                           // 13
 * @param {Socket} socket On server, should be given to determine the concerned user                              // 14
 */                                                                                                               // 15
Streamy.userId = function(socket) {};                                                                             // 16
                                                                                                                  // 17
/**                                                                                                               // 18
 * Retrieve the user                                                                                              // 19
 * @param {Socket} socket On server, should be given to determine the concerned user                              // 20
 */                                                                                                               // 21
Streamy.user = function(socket) {};                                                                               // 22
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/yuukan:streamy/lib/core/core_server.js                                                                //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var sessions = {};                                                                                                // 1
                                                                                                                  // 2
// -------------------------------------------------------------------------- //                                  // 3
// ------------------------------- Accessors -------------------------------- //                                  // 4
// -------------------------------------------------------------------------- //                                  // 5
                                                                                                                  // 6
/**                                                                                                               // 7
 * Contains reactive variables for each connection id/user id                                                     // 8
 * @type {Object}                                                                                                 // 9
 */                                                                                                               // 10
Streamy._usersId = {};                                                                                            // 11
                                                                                                                  // 12
/**                                                                                                               // 13
 * Retrieve server connected sockets or a subset                                                                  // 14
 * @param {String|Array} sid Optional, socket id or ids to retrieve                                               // 15
 * @return  {Object} If sid is provided, it will returns an object with a send method and _sockets array of sockets, else, it will returns all sockets
 */                                                                                                               // 17
Streamy.sockets = function(sid) {                                                                                 // 18
                                                                                                                  // 19
  if(sid) {                                                                                                       // 20
    sid = _.isArray(sid) ? sid : [sid];                                                                           // 21
    var sockets = [];                                                                                             // 22
                                                                                                                  // 23
    _.each(sid, function(session_id) {                                                                            // 24
      var sock = sessions[session_id];                                                                            // 25
                                                                                                                  // 26
      if(sock)                                                                                                    // 27
        sockets.push(sock);                                                                                       // 28
    });                                                                                                           // 29
                                                                                                                  // 30
    return {                                                                                                      // 31
      _sockets: sockets,                                                                                          // 32
      send: function(data) {                                                                                      // 33
        _.each(sockets, function(socket) {                                                                        // 34
          socket.send(data);                                                                                      // 35
        });                                                                                                       // 36
      }                                                                                                           // 37
    }                                                                                                             // 38
  }                                                                                                               // 39
                                                                                                                  // 40
  return sessions;                                                                                                // 41
};                                                                                                                // 42
                                                                                                                  // 43
/**                                                                                                               // 44
 * Retrieve server connected sockets or a subset                                                                  // 45
 * @param {String|Array} uid Optional, user id or ids to retrieve                                                 // 46
 * @return  {Object} If uid is provided, it will returns an object with a send method and _sockets array of sockets, else, it will returns all sockets
 */                                                                                                               // 48
Streamy.socketsForUsers = function(uid) {                                                                         // 49
                                                                                                                  // 50
  if(uid) {                                                                                                       // 51
    uid = _.isArray(uid) ? uid : [uid];                                                                           // 52
                                                                                                                  // 53
    var sockets = _.filter(Streamy.sockets(), function(socket) {                                                  // 54
      return uid.indexOf(socket._meteorSession.userId) !== -1;                                                    // 55
    });                                                                                                           // 56
                                                                                                                  // 57
    return {                                                                                                      // 58
      _sockets: sockets,                                                                                          // 59
      send: function(data) {                                                                                      // 60
        _.each(sockets, function(socket) {                                                                        // 61
          socket.send(data);                                                                                      // 62
        });                                                                                                       // 63
      }                                                                                                           // 64
    }                                                                                                             // 65
  }                                                                                                               // 66
                                                                                                                  // 67
  return sessions;                                                                                                // 68
                                                                                                                  // 69
};                                                                                                                // 70
                                                                                                                  // 71
// -------------------------------------------------------------------------- //                                  // 72
// ------------------------------- Overrides -------------------------------- //                                  // 73
// -------------------------------------------------------------------------- //                                  // 74
                                                                                                                  // 75
Streamy.init = function() {                                                                                       // 76
  var self = this;                                                                                                // 77
                                                                                                                  // 78
  // If accounts package is installed, register for successful login attempts                                     // 79
  if(typeof(Accounts) !== 'undefined' ) {                                                                         // 80
    Accounts.onLogin(function onLoggedIn(data) {                                                                  // 81
      Streamy._usersId[data.connection.id].set(data.user._id);                                                    // 82
    });                                                                                                           // 83
  }                                                                                                               // 84
                                                                                                                  // 85
  // When a new connection has been received                                                                      // 86
  Meteor.default_server.stream_server.register(function onNewConnected(socket) {                                  // 87
    var handlers_registered = false;                                                                              // 88
                                                                                                                  // 89
    // On closed, call disconnect handlers                                                                        // 90
    socket.on('close', function onSocketClosed() {                                                                // 91
      if(handlers_registered) {                                                                                   // 92
        var sid = Streamy.id(socket);                                                                             // 93
                                                                                                                  // 94
        delete sessions[sid];                                                                                     // 95
        delete Streamy._usersId[sid];                                                                             // 96
                                                                                                                  // 97
        _.each(self.disconnectHandlers(), function forEachDisconnectHandler(cb) {                                 // 98
          cb.call(self, socket);                                                                                  // 99
        });                                                                                                       // 100
      }                                                                                                           // 101
    });                                                                                                           // 102
                                                                                                                  // 103
    // This little trick is used to register protocol handlers on the                                             // 104
    // socket._meteorSession object, so we need it to be set                                                      // 105
    socket.on('data', function onSocketData(raw_data) {                                                           // 106
                                                                                                                  // 107
      // Since we doesn't have a Accounts.onLogout callback, we must use this little trick, will be replaced when a proper callback is added
      if(JSON.parse(raw_data).method === 'logout' && socket.__sid) {                                              // 109
        Streamy._usersId[Streamy.id(socket)].set(null);                                                           // 110
      }                                                                                                           // 111
                                                                                                                  // 112
      // Only if the socket as a meteor session                                                                   // 113
      if(!handlers_registered && socket._meteorSession) {                                                         // 114
                                                                                                                  // 115
        // Store the meteorSesion id in an inner property since _meteorSession will be deleted upon socket closed // 116
        socket.__sid = socket._meteorSession.id;                                                                  // 117
                                                                                                                  // 118
        var sid = Streamy.id(socket);                                                                             // 119
                                                                                                                  // 120
        handlers_registered = true;                                                                               // 121
                                                                                                                  // 122
        sessions[sid] = socket;                                                                                   // 123
        Streamy._usersId[sid] = new ReactiveVar(null);                                                            // 124
                                                                                                                  // 125
        // Call connection handlers                                                                               // 126
        _.each(self.connectHandlers(), function forEachConnectHandler(cb) {                                       // 127
          cb.call(self, socket);                                                                                  // 128
        });                                                                                                       // 129
                                                                                                                  // 130
        // Add each handler to the list of protocol handlers                                                      // 131
        _.each(self.handlers(), function forEachHandler(cb, name) {                                               // 132
          if(!socket._meteorSession.protocol_handlers[name]) {                                                    // 133
            socket._meteorSession.protocol_handlers[name] = function onMessage(raw_msg) {                         // 134
              delete raw_msg.msg; // Remove msg field                                                             // 135
              cb.call(self, raw_msg, this.socket);                                                                // 136
            };                                                                                                    // 137
          }                                                                                                       // 138
        });                                                                                                       // 139
      }                                                                                                           // 140
    });                                                                                                           // 141
  });                                                                                                             // 142
};                                                                                                                // 143
                                                                                                                  // 144
Streamy._write = function(data, to) {                                                                             // 145
  if(to)                                                                                                          // 146
    to.send(data);                                                                                                // 147
};                                                                                                                // 148
                                                                                                                  // 149
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/yuukan:streamy/lib/direct_messages/direct_messages_server.js                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
// -------------------------------------------------------------------------- //                                  // 1
// ------------------------------ Allow/deny -------------------------------- //                                  // 2
// -------------------------------------------------------------------------- //                                  // 3
                                                                                                                  // 4
/**                                                                                                               // 5
 * Wether or not the direct messages is allowed                                                                   // 6
 * @param {Object} data Data of the message                                                                       // 7
 * @param {Socket} from From socket                                                                               // 8
 * @param {Object} to Special object as returned by Streamy.sockets                                               // 9
 */                                                                                                               // 10
Streamy.DirectMessages.allow = function(data, from, to) {                                                         // 11
  return true;                                                                                                    // 12
};                                                                                                                // 13
                                                                                                                  // 14
// -------------------------------------------------------------------------- //                                  // 15
// -------------------------------- Handlers -------------------------------- //                                  // 16
// -------------------------------------------------------------------------- //                                  // 17
                                                                                                                  // 18
/**                                                                                                               // 19
 * Attach the direct message handler                                                                              // 20
 * @param {Object} data Data object                                                                               // 21
 * @param {Socket} from Socket emitter                                                                            // 22
 */                                                                                                               // 23
Streamy.on('__direct__', function(data, from) {                                                                   // 24
                                                                                                                  // 25
  // Check for sanity                                                                                             // 26
  if(!data.__msg || !data.__data)                                                                                 // 27
    return;                                                                                                       // 28
                                                                                                                  // 29
  var to_socks = null;                                                                                            // 30
                                                                                                                  // 31
  if(data.__to_users)                                                                                             // 32
    to_socks = Streamy.socketsForUsers(data.__to_users);                                                          // 33
  else if(data.__to)                                                                                              // 34
    to_socks = Streamy.sockets(data.__to);                                                                        // 35
                                                                                                                  // 36
  if(!to_socks)                                                                                                   // 37
    return;                                                                                                       // 38
                                                                                                                  // 39
  // Check if the server allows this direct message                                                               // 40
  if(!Streamy.DirectMessages.allow(data, from, to_socks))                                                         // 41
      return;                                                                                                     // 42
                                                                                                                  // 43
  // Attach the sender ID to the inner data                                                                       // 44
  data.__data.__from = Streamy.id(from);                                                                          // 45
                                                                                                                  // 46
  // And then emit the message                                                                                    // 47
  Streamy.emit(data.__msg, data.__data, to_socks);                                                                // 48
});                                                                                                               // 49
                                                                                                                  // 50
// -------------------------------------------------------------------------- //                                  // 51
// ------------------------------- Overrides -------------------------------- //                                  // 52
// -------------------------------------------------------------------------- //                                  // 53
                                                                                                                  // 54
Streamy._sessionsEmit = function(sid) {                                                                           // 55
  var socket = _.isObject(sid) ? sid : Streamy.sockets(sid);                                                      // 56
                                                                                                                  // 57
  return function(msg, data) {                                                                                    // 58
    Streamy.emit(msg, data, socket);                                                                              // 59
  };                                                                                                              // 60
};                                                                                                                // 61
                                                                                                                  // 62
Streamy._sessionsForUsersEmit = function(uid) {                                                                   // 63
  uid = _.isArray(uid) ? uid : [uid];                                                                             // 64
  var sockets = Streamy.socketsForUsers(uid);                                                                     // 65
                                                                                                                  // 66
  return function(msg, data) {                                                                                    // 67
    Streamy.emit(msg, data, sockets);                                                                             // 68
  };                                                                                                              // 69
};                                                                                                                // 70
                                                                                                                  // 71
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/yuukan:streamy/lib/broadcasts/broadcasts_server.js                                                    //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
// -------------------------------------------------------------------------- //                                  // 1
// ------------------------------ Allow/deny -------------------------------- //                                  // 2
// -------------------------------------------------------------------------- //                                  // 3
                                                                                                                  // 4
/**                                                                                                               // 5
 * Wether or not the broadcast is allowed                                                                         // 6
 * @param {Object} data Data of the message                                                                       // 7
 * @param {Socket} from From socket                                                                               // 8
 */                                                                                                               // 9
Streamy.BroadCasts.allow = function(data, from) {                                                                 // 10
  return true;                                                                                                    // 11
};                                                                                                                // 12
                                                                                                                  // 13
// -------------------------------------------------------------------------- //                                  // 14
// -------------------------------- Handlers -------------------------------- //                                  // 15
// -------------------------------------------------------------------------- //                                  // 16
                                                                                                                  // 17
/**                                                                                                               // 18
 * Attach the broadcast message handler                                                                           // 19
 * @param {Object} data Data object                                                                               // 20
 * @param {Socket} from Socket emitter                                                                            // 21
 */                                                                                                               // 22
Streamy.on('__broadcast__', function(data, from) {                                                                // 23
                                                                                                                  // 24
  // Check for sanity                                                                                             // 25
  if(!data.__msg || !data.__data)                                                                                 // 26
    return;                                                                                                       // 27
                                                                                                                  // 28
  // Check if the server allows this direct message                                                               // 29
  if(!Streamy.BroadCasts.allow(data, from))                                                                       // 30
      return;                                                                                                     // 31
                                                                                                                  // 32
  // Attach the sender ID to the inner data                                                                       // 33
  data.__data.__from = Streamy.id(from);                                                                          // 34
                                                                                                                  // 35
  // And then emit the message                                                                                    // 36
  Streamy.broadcast(data.__msg, data.__data, data.__except);                                                      // 37
});                                                                                                               // 38
                                                                                                                  // 39
// -------------------------------------------------------------------------- //                                  // 40
// ------------------------------- Overrides -------------------------------- //                                  // 41
// -------------------------------------------------------------------------- //                                  // 42
                                                                                                                  // 43
Streamy.broadcast = function(message, data, except) {                                                             // 44
  if(!_.isArray(except))                                                                                          // 45
    except = [except];                                                                                            // 46
                                                                                                                  // 47
  _.each(Streamy.sockets(), function(sock) {                                                                      // 48
    if(except.indexOf(Streamy.id(sock)) !== -1)                                                                   // 49
      return;                                                                                                     // 50
                                                                                                                  // 51
    Streamy.emit(message, data, sock);                                                                            // 52
  });                                                                                                             // 53
};                                                                                                                // 54
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/yuukan:streamy/lib/utils/utils_server.js                                                              //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
// -------------------------------------------------------------------------- //                                  // 1
// ------------------------------- Overrides -------------------------------- //                                  // 2
// -------------------------------------------------------------------------- //                                  // 3
                                                                                                                  // 4
Streamy.id = function(socket) {                                                                                   // 5
  return socket.__sid;                                                                                            // 6
};                                                                                                                // 7
                                                                                                                  // 8
Streamy.userId = function(socket) {                                                                               // 9
  if(!socket)                                                                                                     // 10
    throw new Meteor.Error(500, 'You should provides a socket server-side');                                      // 11
                                                                                                                  // 12
  return Streamy._usersId[Streamy.id(socket)].get();                                                              // 13
};                                                                                                                // 14
                                                                                                                  // 15
Streamy.user = function(socket) {                                                                                 // 16
  if(!Meteor.users)                                                                                               // 17
    throw new Meteor.Error(500, 'Could not retrieve user, is accounts-base installed?');                          // 18
                                                                                                                  // 19
  return Meteor.users.findOne(Streamy.userId(socket));                                                            // 20
};                                                                                                                // 21
                                                                                                                  // 22
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/yuukan:streamy/lib/startup.js                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
/**                                                                                                               // 1
 * When the application starts up, register handlers!                                                             // 2
 */                                                                                                               // 3
Meteor.startup(function onStartup() {                                                                             // 4
  Streamy.init();                                                                                                 // 5
});                                                                                                               // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['yuukan:streamy'] = {}, {
  Streamy: Streamy
});

})();

//# sourceMappingURL=yuukan_streamy.js.map
