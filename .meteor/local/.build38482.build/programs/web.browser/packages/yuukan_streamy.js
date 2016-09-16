//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var Mongo = Package.mongo.Mongo;
var check = Package.check.check;
var Match = Package.check.Match;
var ReactiveVar = Package['reactive-var'].ReactiveVar;

/* Package-scope variables */
var Streamy;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/yuukan_streamy/packages/yuukan_streamy.js                                                  //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
(function () {                                                                                         // 1
                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                              //     // 4
// packages/yuukan:streamy/lib/namespaces.js                                                    //     // 5
//                                                                                              //     // 6
//////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                //     // 8
Streamy = {};                                                                                   // 1   // 9
Streamy.BroadCasts = {};                                                                        // 2   // 10
Streamy.DirectMessages = {};                                                                    // 3   // 11
//////////////////////////////////////////////////////////////////////////////////////////////////     // 12
                                                                                                       // 13
}).call(this);                                                                                         // 14
                                                                                                       // 15
                                                                                                       // 16
                                                                                                       // 17
                                                                                                       // 18
                                                                                                       // 19
                                                                                                       // 20
(function () {                                                                                         // 21
                                                                                                       // 22
//////////////////////////////////////////////////////////////////////////////////////////////////     // 23
//                                                                                              //     // 24
// packages/yuukan:streamy/lib/core/core.js                                                     //     // 25
//                                                                                              //     // 26
//////////////////////////////////////////////////////////////////////////////////////////////////     // 27
                                                                                                //     // 28
var handlers = {};                                                                              // 1   // 29
var connect_handlers = [];                                                                      // 2   // 30
var disconnect_handlers = [];                                                                   // 3   // 31
                                                                                                // 4   // 32
// -------------------------------------------------------------------------- //                // 5   // 33
// --------------------- Overriden by client/server ------------------------- //                // 6   // 34
// -------------------------------------------------------------------------- //                // 7   // 35
                                                                                                // 8   // 36
/**                                                                                             // 9   // 37
 * Init streamy, attach base handlers in client/server                                          // 10  // 38
 */                                                                                             // 11  // 39
Streamy.init = function() { };                                                                  // 12  // 40
                                                                                                // 13  // 41
/**                                                                                             // 14  // 42
 * Write the message on the socket                                                              // 15  // 43
 * @param {String} data Data stringified                                                        // 16  // 44
 * @param {Object} to (Server side) Which socket should we use                                  // 17  // 45
 */                                                                                             // 18  // 46
Streamy._write = function(data, to) { };                                                        // 19  // 47
                                                                                                // 20  // 48
// -------------------------------------------------------------------------- //                // 21  // 49
// ------------------------------ Accessors --------------------------------- //                // 22  // 50
// -------------------------------------------------------------------------- //                // 23  // 51
                                                                                                // 24  // 52
/**                                                                                             // 25  // 53
 * Retrieve connect handlers                                                                    // 26  // 54
 */                                                                                             // 27  // 55
Streamy.connectHandlers = function() {                                                          // 28  // 56
  return connect_handlers;                                                                      // 29  // 57
};                                                                                              // 30  // 58
                                                                                                // 31  // 59
/**                                                                                             // 32  // 60
 * Retrieve disconnect handlers                                                                 // 33  // 61
 */                                                                                             // 34  // 62
Streamy.disconnectHandlers = function() {                                                       // 35  // 63
  return disconnect_handlers;                                                                   // 36  // 64
};                                                                                              // 37  // 65
                                                                                                // 38  // 66
/**                                                                                             // 39  // 67
 * Retrieve all handlers or the one for the given message                                       // 40  // 68
 * @param {String} message Optional, if defined, returns the handler for this specific messsage // 41  // 69
 */                                                                                             // 42  // 70
Streamy.handlers = function(message) {                                                          // 43  // 71
  if(message) {                                                                                 // 44  // 72
    var handler = handlers[message];                                                            // 45  // 73
    if(!handler)                                                                                // 46  // 74
      handler = function() {};                                                                  // 47  // 75
                                                                                                // 48  // 76
    return handler;                                                                             // 49  // 77
  }                                                                                             // 50  // 78
                                                                                                // 51  // 79
  return handlers;                                                                              // 52  // 80
};                                                                                              // 53  // 81
                                                                                                // 54  // 82
// -------------------------------------------------------------------------- //                // 55  // 83
// -------------------------- Common interface ------------------------------ //                // 56  // 84
// -------------------------------------------------------------------------- //                // 57  // 85
                                                                                                // 58  // 86
/**                                                                                             // 59  // 87
 * Apply a specific prefix to avoid name conflicts                                              // 60  // 88
 * @param {String} value Base value                                                             // 61  // 89
 * @return {String} The base value prefixed                                                     // 62  // 90
 */                                                                                             // 63  // 91
Streamy._applyPrefix = function(value) {                                                        // 64  // 92
  return 'streamy$' + value;                                                                    // 65  // 93
};                                                                                              // 66  // 94
                                                                                                // 67  // 95
/**                                                                                             // 68  // 96
 * Register an handler for the given message type                                               // 69  // 97
 * @param {String} message Message name to handle                                               // 70  // 98
 * @param {Function} callback Callback to call when this message is received                    // 71  // 99
 */                                                                                             // 72  // 100
Streamy.on = function(message, callback) {                                                      // 73  // 101
  message = Streamy._applyPrefix(message);                                                      // 74  // 102
  handlers[message] = Meteor.bindEnvironment(callback);                                         // 75  // 103
};                                                                                              // 76  // 104
                                                                                                // 77  // 105
/**                                                                                             // 78  // 106
 * Adds an handler for the connection success                                                   // 79  // 107
 * @param {Function} callback Callback to call upon connection                                  // 80  // 108
 */                                                                                             // 81  // 109
Streamy.onConnect = function(callback) {                                                        // 82  // 110
  connect_handlers.push(Meteor.bindEnvironment(callback));                                      // 83  // 111
};                                                                                              // 84  // 112
                                                                                                // 85  // 113
/**                                                                                             // 86  // 114
 * Adds an handler for the disconnection                                                        // 87  // 115
 * @param {Function} callback Callback to call upon disconnect                                  // 88  // 116
 */                                                                                             // 89  // 117
Streamy.onDisconnect = function(callback) {                                                     // 90  // 118
  disconnect_handlers.push(Meteor.bindEnvironment(callback));                                   // 91  // 119
};                                                                                              // 92  // 120
                                                                                                // 93  // 121
/**                                                                                             // 94  // 122
 * Emits a message with the given name and associated data                                      // 95  // 123
 * @param {String} message Message name to emit                                                 // 96  // 124
 * @param {Object} data Data to send                                                            // 97  // 125
 * @param {Socket} to (Server side only) which socket we should use                             // 98  // 126
 */                                                                                             // 99  // 127
Streamy.emit = function(message, data, to) {                                                    // 100
  data = data || {};                                                                            // 101
  message = Streamy._applyPrefix(message);                                                      // 102
                                                                                                // 103
  check(message, String);                                                                       // 104
  check(data, Object);                                                                          // 105
                                                                                                // 106
  data.msg = message;                                                                           // 107
                                                                                                // 108
  Streamy._write(JSON.stringify(data), to);                                                     // 109
};                                                                                              // 110
//////////////////////////////////////////////////////////////////////////////////////////////////     // 139
                                                                                                       // 140
}).call(this);                                                                                         // 141
                                                                                                       // 142
                                                                                                       // 143
                                                                                                       // 144
                                                                                                       // 145
                                                                                                       // 146
                                                                                                       // 147
(function () {                                                                                         // 148
                                                                                                       // 149
//////////////////////////////////////////////////////////////////////////////////////////////////     // 150
//                                                                                              //     // 151
// packages/yuukan:streamy/lib/direct_messages/direct_messages.js                               //     // 152
//                                                                                              //     // 153
//////////////////////////////////////////////////////////////////////////////////////////////////     // 154
                                                                                                //     // 155
// -------------------------------------------------------------------------- //                // 1   // 156
// --------------------- Overriden by client/server ------------------------- //                // 2   // 157
// -------------------------------------------------------------------------- //                // 3   // 158
                                                                                                // 4   // 159
/**                                                                                             // 5   // 160
 * Gets the wrapper for the emit returned by Streamy.sessions(sid)                              // 6   // 161
 * @param {String|Array} sid Session id(s)                                                      // 7   // 162
 * @return  {Function}  Function which will be called by emit on the session                    // 8   // 163
 */                                                                                             // 9   // 164
Streamy._sessionsEmit = function(sid) { };                                                      // 10  // 165
                                                                                                // 11  // 166
/**                                                                                             // 12  // 167
 * Gets the wrapper for the emit returned by Streamy.sessionsForUsers(sid)                      // 13  // 168
 * @param {String|Array} uid User id(s)                                                         // 14  // 169
 * @return  {Function}  Function which will be called by emit on the session                    // 15  // 170
 */                                                                                             // 16  // 171
Streamy._sessionsForUsersEmit = function(uid) { };                                              // 17  // 172
                                                                                                // 18  // 173
// -------------------------------------------------------------------------- //                // 19  // 174
// -------------------------- Common interface ------------------------------ //                // 20  // 175
// -------------------------------------------------------------------------- //                // 21  // 176
                                                                                                // 22  // 177
/**                                                                                             // 23  // 178
 * Returns an object for the targetted session id(s) which contains an emit method              // 24  // 179
 * @param {String|Array} sid Session id(s)                                                      // 25  // 180
 * @return  {Object}  Object with an emit function                                              // 26  // 181
 */                                                                                             // 27  // 182
Streamy.sessions = function(sid) {                                                              // 28  // 183
  return {                                                                                      // 29  // 184
    emit: Streamy._sessionsEmit(sid)                                                            // 30  // 185
  };                                                                                            // 31  // 186
};                                                                                              // 32  // 187
                                                                                                // 33  // 188
/**                                                                                             // 34  // 189
 * Returns an object for the targetted user id(s) which contains an emit method                 // 35  // 190
 * @param {String|Array} uid User id(s)                                                         // 36  // 191
 * @return  {Object}  Object with an emit function                                              // 37  // 192
 */                                                                                             // 38  // 193
Streamy.sessionsForUsers = function(uid) {                                                      // 39  // 194
  return {                                                                                      // 40  // 195
    emit: Streamy._sessionsForUsersEmit(uid)                                                    // 41  // 196
  }                                                                                             // 42  // 197
};                                                                                              // 43  // 198
                                                                                                // 44  // 199
//////////////////////////////////////////////////////////////////////////////////////////////////     // 200
                                                                                                       // 201
}).call(this);                                                                                         // 202
                                                                                                       // 203
                                                                                                       // 204
                                                                                                       // 205
                                                                                                       // 206
                                                                                                       // 207
                                                                                                       // 208
(function () {                                                                                         // 209
                                                                                                       // 210
//////////////////////////////////////////////////////////////////////////////////////////////////     // 211
//                                                                                              //     // 212
// packages/yuukan:streamy/lib/broadcasts/broadcasts.js                                         //     // 213
//                                                                                              //     // 214
//////////////////////////////////////////////////////////////////////////////////////////////////     // 215
                                                                                                //     // 216
// -------------------------------------------------------------------------- //                // 1   // 217
// --------------------- Overriden by client/server ------------------------- //                // 2   // 218
// -------------------------------------------------------------------------- //                // 3   // 219
                                                                                                // 4   // 220
/**                                                                                             // 5   // 221
 * Returns an object for the targetted session id which contains an emit method                 // 6   // 222
 * @param {String} message Message to emit                                                      // 7   // 223
 * @param {Object} data Data to send                                                            // 8   // 224
 * @param {Array|String} except Which sid should we exclude from the broadcast message          // 9   // 225
 */                                                                                             // 10  // 226
Streamy.broadcast = function(message, data, except) { };                                        // 11  // 227
//////////////////////////////////////////////////////////////////////////////////////////////////     // 228
                                                                                                       // 229
}).call(this);                                                                                         // 230
                                                                                                       // 231
                                                                                                       // 232
                                                                                                       // 233
                                                                                                       // 234
                                                                                                       // 235
                                                                                                       // 236
(function () {                                                                                         // 237
                                                                                                       // 238
//////////////////////////////////////////////////////////////////////////////////////////////////     // 239
//                                                                                              //     // 240
// packages/yuukan:streamy/lib/utils/utils.js                                                   //     // 241
//                                                                                              //     // 242
//////////////////////////////////////////////////////////////////////////////////////////////////     // 243
                                                                                                //     // 244
// -------------------------------------------------------------------------- //                // 1   // 245
// --------------------- Overriden by client/server ------------------------- //                // 2   // 246
// -------------------------------------------------------------------------- //                // 3   // 247
                                                                                                // 4   // 248
/**                                                                                             // 5   // 249
 * Retrieve the connection id                                                                   // 6   // 250
 * @param  {Socket} socket On server, should be given to determine the concerned connection     // 7   // 251
 * @return {String}        The connection id                                                    // 8   // 252
 */                                                                                             // 9   // 253
Streamy.id = function(socket) {};                                                               // 10  // 254
                                                                                                // 11  // 255
/**                                                                                             // 12  // 256
 * Retrieve the user id                                                                         // 13  // 257
 * @param {Socket} socket On server, should be given to determine the concerned user            // 14  // 258
 */                                                                                             // 15  // 259
Streamy.userId = function(socket) {};                                                           // 16  // 260
                                                                                                // 17  // 261
/**                                                                                             // 18  // 262
 * Retrieve the user                                                                            // 19  // 263
 * @param {Socket} socket On server, should be given to determine the concerned user            // 20  // 264
 */                                                                                             // 21  // 265
Streamy.user = function(socket) {};                                                             // 22  // 266
//////////////////////////////////////////////////////////////////////////////////////////////////     // 267
                                                                                                       // 268
}).call(this);                                                                                         // 269
                                                                                                       // 270
                                                                                                       // 271
                                                                                                       // 272
                                                                                                       // 273
                                                                                                       // 274
                                                                                                       // 275
(function () {                                                                                         // 276
                                                                                                       // 277
//////////////////////////////////////////////////////////////////////////////////////////////////     // 278
//                                                                                              //     // 279
// packages/yuukan:streamy/lib/core/core_client.js                                              //     // 280
//                                                                                              //     // 281
//////////////////////////////////////////////////////////////////////////////////////////////////     // 282
                                                                                                //     // 283
// -------------------------------------------------------------------------- //                // 1   // 284
// ------------------------------- Overrides -------------------------------- //                // 2   // 285
// -------------------------------------------------------------------------- //                // 3   // 286
                                                                                                // 4   // 287
Streamy.init = function() {                                                                     // 5   // 288
                                                                                                // 6   // 289
  var self = this;                                                                              // 7   // 290
                                                                                                // 8   // 291
  // Uppon close                                                                                // 9   // 292
  Meteor.default_connection._stream.on('disconnect', function onClose() {                       // 10  // 293
    // If it was previously connected, call disconnect handlers                                 // 11  // 294
    if(Meteor.default_connection._stream.status().connected) {                                  // 12  // 295
      _.each(self.disconnectHandlers(), function forEachDisconnectHandler(cb) {                 // 13  // 296
        cb.call(self);                                                                          // 14  // 297
      });                                                                                       // 15  // 298
    }                                                                                           // 16  // 299
  });                                                                                           // 17  // 300
                                                                                                // 18  // 301
  // Attach message handlers                                                                    // 19  // 302
  Meteor.default_connection._stream.on('message', function onMessage(data) {                    // 20  // 303
                                                                                                // 21  // 304
    // Parse the message                                                                        // 22  // 305
    var parsed_data = JSON.parse(data);                                                         // 23  // 306
                                                                                                // 24  // 307
    // Retrieve the msg value                                                                   // 25  // 308
    var msg = parsed_data.msg;                                                                  // 26  // 309
                                                                                                // 27  // 310
    // And dismiss it                                                                           // 28  // 311
    delete parsed_data.msg;                                                                     // 29  // 312
                                                                                                // 30  // 313
    // If its the connected message                                                             // 31  // 314
    if(msg === 'connected') {                                                                   // 32  // 315
      // Call each handlers                                                                     // 33  // 316
      _.each(self.connectHandlers(), function forEachConnectHandler(cb) {                       // 34  // 317
        cb.call(self);                                                                          // 35  // 318
      });                                                                                       // 36  // 319
    }                                                                                           // 37  // 320
    else if(msg) {                                                                              // 38  // 321
      // Else, call the appropriate handler                                                     // 39  // 322
      self.handlers(msg).call(self, parsed_data);                                               // 40  // 323
    }                                                                                           // 41  // 324
  });                                                                                           // 42  // 325
                                                                                                // 43  // 326
                                                                                                // 44  // 327
};                                                                                              // 45  // 328
                                                                                                // 46  // 329
Streamy._write = function(data) {                                                               // 47  // 330
  Meteor.default_connection._stream.send(data);                                                 // 48  // 331
};                                                                                              // 49  // 332
//////////////////////////////////////////////////////////////////////////////////////////////////     // 333
                                                                                                       // 334
}).call(this);                                                                                         // 335
                                                                                                       // 336
                                                                                                       // 337
                                                                                                       // 338
                                                                                                       // 339
                                                                                                       // 340
                                                                                                       // 341
(function () {                                                                                         // 342
                                                                                                       // 343
//////////////////////////////////////////////////////////////////////////////////////////////////     // 344
//                                                                                              //     // 345
// packages/yuukan:streamy/lib/direct_messages/direct_messages_client.js                        //     // 346
//                                                                                              //     // 347
//////////////////////////////////////////////////////////////////////////////////////////////////     // 348
                                                                                                //     // 349
// -------------------------------------------------------------------------- //                // 1   // 350
// ------------------------------- Overrides -------------------------------- //                // 2   // 351
// -------------------------------------------------------------------------- //                // 3   // 352
                                                                                                // 4   // 353
Streamy._sessionsEmit = function(sid) {                                                         // 5   // 354
  return function(msg, data) {                                                                  // 6   // 355
    Streamy.emit('__direct__', {                                                                // 7   // 356
      '__to': sid,                                                                              // 8   // 357
      '__msg': msg,                                                                             // 9   // 358
      '__data': data                                                                            // 10  // 359
    });                                                                                         // 11  // 360
  };                                                                                            // 12  // 361
};                                                                                              // 13  // 362
                                                                                                // 14  // 363
Streamy._sessionsForUsersEmit = function(uid) {                                                 // 15  // 364
  return function(msg, data) {                                                                  // 16  // 365
    Streamy.emit('__direct__', {                                                                // 17  // 366
      '__to_users': uid,                                                                        // 18  // 367
      '__msg': msg,                                                                             // 19  // 368
      '__data': data                                                                            // 20  // 369
    });                                                                                         // 21  // 370
  };                                                                                            // 22  // 371
}                                                                                               // 23  // 372
                                                                                                // 24  // 373
//////////////////////////////////////////////////////////////////////////////////////////////////     // 374
                                                                                                       // 375
}).call(this);                                                                                         // 376
                                                                                                       // 377
                                                                                                       // 378
                                                                                                       // 379
                                                                                                       // 380
                                                                                                       // 381
                                                                                                       // 382
(function () {                                                                                         // 383
                                                                                                       // 384
//////////////////////////////////////////////////////////////////////////////////////////////////     // 385
//                                                                                              //     // 386
// packages/yuukan:streamy/lib/broadcasts/broadcasts_client.js                                  //     // 387
//                                                                                              //     // 388
//////////////////////////////////////////////////////////////////////////////////////////////////     // 389
                                                                                                //     // 390
// -------------------------------------------------------------------------- //                // 1   // 391
// ------------------------------- Overrides -------------------------------- //                // 2   // 392
// -------------------------------------------------------------------------- //                // 3   // 393
                                                                                                // 4   // 394
Streamy.broadcast = function(message, data, except) {                                           // 5   // 395
  Streamy.emit('__broadcast__', {                                                               // 6   // 396
    '__msg': message,                                                                           // 7   // 397
    '__data': data,                                                                             // 8   // 398
    '__except': except                                                                          // 9   // 399
  });                                                                                           // 10  // 400
};                                                                                              // 11  // 401
//////////////////////////////////////////////////////////////////////////////////////////////////     // 402
                                                                                                       // 403
}).call(this);                                                                                         // 404
                                                                                                       // 405
                                                                                                       // 406
                                                                                                       // 407
                                                                                                       // 408
                                                                                                       // 409
                                                                                                       // 410
(function () {                                                                                         // 411
                                                                                                       // 412
//////////////////////////////////////////////////////////////////////////////////////////////////     // 413
//                                                                                              //     // 414
// packages/yuukan:streamy/lib/utils/utils_client.js                                            //     // 415
//                                                                                              //     // 416
//////////////////////////////////////////////////////////////////////////////////////////////////     // 417
                                                                                                //     // 418
// -------------------------------------------------------------------------- //                // 1   // 419
// ------------------------------- Overrides -------------------------------- //                // 2   // 420
// -------------------------------------------------------------------------- //                // 3   // 421
                                                                                                // 4   // 422
Streamy.id = function() {                                                                       // 5   // 423
  return Meteor.connection._lastSessionId;                                                      // 6   // 424
};                                                                                              // 7   // 425
                                                                                                // 8   // 426
Streamy.userId = function(socket) {                                                             // 9   // 427
  if(!Meteor.userId)                                                                            // 10  // 428
    throw new Meteor.Error(500, 'Could not retrieve user id, is accounts-base installed?');     // 11  // 429
                                                                                                // 12  // 430
  return Meteor.userId();                                                                       // 13  // 431
};                                                                                              // 14  // 432
                                                                                                // 15  // 433
Streamy.user = function(socket) {                                                               // 16  // 434
  if(!Meteor.user)                                                                              // 17  // 435
    throw new Meteor.Error(500, 'Could not retrieve user, is accounts-base installed?');        // 18  // 436
                                                                                                // 19  // 437
  return Meteor.user();                                                                         // 20  // 438
};                                                                                              // 21  // 439
//////////////////////////////////////////////////////////////////////////////////////////////////     // 440
                                                                                                       // 441
}).call(this);                                                                                         // 442
                                                                                                       // 443
                                                                                                       // 444
                                                                                                       // 445
                                                                                                       // 446
                                                                                                       // 447
                                                                                                       // 448
(function () {                                                                                         // 449
                                                                                                       // 450
//////////////////////////////////////////////////////////////////////////////////////////////////     // 451
//                                                                                              //     // 452
// packages/yuukan:streamy/lib/startup.js                                                       //     // 453
//                                                                                              //     // 454
//////////////////////////////////////////////////////////////////////////////////////////////////     // 455
                                                                                                //     // 456
/**                                                                                             // 1   // 457
 * When the application starts up, register handlers!                                           // 2   // 458
 */                                                                                             // 3   // 459
Meteor.startup(function onStartup() {                                                           // 4   // 460
  Streamy.init();                                                                               // 5   // 461
});                                                                                             // 6   // 462
//////////////////////////////////////////////////////////////////////////////////////////////////     // 463
                                                                                                       // 464
}).call(this);                                                                                         // 465
                                                                                                       // 466
/////////////////////////////////////////////////////////////////////////////////////////////////////////

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
