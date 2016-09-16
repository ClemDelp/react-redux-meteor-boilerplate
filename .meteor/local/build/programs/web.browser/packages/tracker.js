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

/* Package-scope variables */
var Tracker, Deps;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/tracker/tracker.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/////////////////////////////////////////////////////                                                                 // 1
// Package docs at http://docs.meteor.com/#tracker //                                                                 // 2
/////////////////////////////////////////////////////                                                                 // 3
                                                                                                                      // 4
/**                                                                                                                   // 5
 * @namespace Tracker                                                                                                 // 6
 * @summary The namespace for Tracker-related methods.                                                                // 7
 */                                                                                                                   // 8
Tracker = {};                                                                                                         // 9
                                                                                                                      // 10
// http://docs.meteor.com/#tracker_active                                                                             // 11
                                                                                                                      // 12
/**                                                                                                                   // 13
 * @summary True if there is a current computation, meaning that dependencies on reactive data sources will be tracked and potentially cause the current computation to be rerun.
 * @locus Client                                                                                                      // 15
 * @type {Boolean}                                                                                                    // 16
 */                                                                                                                   // 17
Tracker.active = false;                                                                                               // 18
                                                                                                                      // 19
// http://docs.meteor.com/#tracker_currentcomputation                                                                 // 20
                                                                                                                      // 21
/**                                                                                                                   // 22
 * @summary The current computation, or `null` if there isn't one.  The current computation is the [`Tracker.Computation`](#tracker_computation) object created by the innermost active call to `Tracker.autorun`, and it's the computation that gains dependencies when reactive data sources are accessed.
 * @locus Client                                                                                                      // 24
 * @type {Tracker.Computation}                                                                                        // 25
 */                                                                                                                   // 26
Tracker.currentComputation = null;                                                                                    // 27
                                                                                                                      // 28
// References to all computations created within the Tracker by id.                                                   // 29
// Keeping these references on an underscore property gives more control to                                           // 30
// tooling and packages extending Tracker without increasing the API surface.                                         // 31
// These can used to monkey-patch computations, their functions, use                                                  // 32
// computation ids for tracking, etc.                                                                                 // 33
Tracker._computations = {};                                                                                           // 34
                                                                                                                      // 35
var setCurrentComputation = function (c) {                                                                            // 36
  Tracker.currentComputation = c;                                                                                     // 37
  Tracker.active = !! c;                                                                                              // 38
};                                                                                                                    // 39
                                                                                                                      // 40
var _debugFunc = function () {                                                                                        // 41
  // We want this code to work without Meteor, and also without                                                       // 42
  // "console" (which is technically non-standard and may be missing                                                  // 43
  // on some browser we come across, like it was on IE 7).                                                            // 44
  //                                                                                                                  // 45
  // Lazy evaluation because `Meteor` does not exist right away.(??)                                                  // 46
  return (typeof Meteor !== "undefined" ? Meteor._debug :                                                             // 47
          ((typeof console !== "undefined") && console.error ?                                                        // 48
           function () { console.error.apply(console, arguments); } :                                                 // 49
           function () {}));                                                                                          // 50
};                                                                                                                    // 51
                                                                                                                      // 52
var _maybeSuppressMoreLogs = function (messagesLength) {                                                              // 53
  // Sometimes when running tests, we intentionally suppress logs on expected                                         // 54
  // printed errors. Since the current implementation of _throwOrLog can log                                          // 55
  // multiple separate log messages, suppress all of them if at least one suppress                                    // 56
  // is expected as we still want them to count as one.                                                               // 57
  if (typeof Meteor !== "undefined") {                                                                                // 58
    if (Meteor._suppressed_log_expected()) {                                                                          // 59
      Meteor._suppress_log(messagesLength - 1);                                                                       // 60
    }                                                                                                                 // 61
  }                                                                                                                   // 62
};                                                                                                                    // 63
                                                                                                                      // 64
var _throwOrLog = function (from, e) {                                                                                // 65
  if (throwFirstError) {                                                                                              // 66
    throw e;                                                                                                          // 67
  } else {                                                                                                            // 68
    var printArgs = ["Exception from Tracker " + from + " function:"];                                                // 69
    if (e.stack && e.message && e.name) {                                                                             // 70
      var idx = e.stack.indexOf(e.message);                                                                           // 71
      if (idx < 0 || idx > e.name.length + 2) { // check for "Error: "                                                // 72
        // message is not part of the stack                                                                           // 73
        var message = e.name + ": " + e.message;                                                                      // 74
        printArgs.push(message);                                                                                      // 75
      }                                                                                                               // 76
    }                                                                                                                 // 77
    printArgs.push(e.stack);                                                                                          // 78
    _maybeSuppressMoreLogs(printArgs.length);                                                                         // 79
                                                                                                                      // 80
    for (var i = 0; i < printArgs.length; i++) {                                                                      // 81
      _debugFunc()(printArgs[i]);                                                                                     // 82
    }                                                                                                                 // 83
  }                                                                                                                   // 84
};                                                                                                                    // 85
                                                                                                                      // 86
// Takes a function `f`, and wraps it in a `Meteor._noYieldsAllowed`                                                  // 87
// block if we are running on the server. On the client, returns the                                                  // 88
// original function (since `Meteor._noYieldsAllowed` is a                                                            // 89
// no-op). This has the benefit of not adding an unnecessary stack                                                    // 90
// frame on the client.                                                                                               // 91
var withNoYieldsAllowed = function (f) {                                                                              // 92
  if ((typeof Meteor === 'undefined') || Meteor.isClient) {                                                           // 93
    return f;                                                                                                         // 94
  } else {                                                                                                            // 95
    return function () {                                                                                              // 96
      var args = arguments;                                                                                           // 97
      Meteor._noYieldsAllowed(function () {                                                                           // 98
        f.apply(null, args);                                                                                          // 99
      });                                                                                                             // 100
    };                                                                                                                // 101
  }                                                                                                                   // 102
};                                                                                                                    // 103
                                                                                                                      // 104
var nextId = 1;                                                                                                       // 105
// computations whose callbacks we should call at flush time                                                          // 106
var pendingComputations = [];                                                                                         // 107
// `true` if a Tracker.flush is scheduled, or if we are in Tracker.flush now                                          // 108
var willFlush = false;                                                                                                // 109
// `true` if we are in Tracker.flush now                                                                              // 110
var inFlush = false;                                                                                                  // 111
// `true` if we are computing a computation now, either first time                                                    // 112
// or recompute.  This matches Tracker.active unless we are inside                                                    // 113
// Tracker.nonreactive, which nullfies currentComputation even though                                                 // 114
// an enclosing computation may still be running.                                                                     // 115
var inCompute = false;                                                                                                // 116
// `true` if the `_throwFirstError` option was passed in to the call                                                  // 117
// to Tracker.flush that we are in. When set, throw rather than log the                                               // 118
// first error encountered while flushing. Before throwing the error,                                                 // 119
// finish flushing (from a finally block), logging any subsequent                                                     // 120
// errors.                                                                                                            // 121
var throwFirstError = false;                                                                                          // 122
                                                                                                                      // 123
var afterFlushCallbacks = [];                                                                                         // 124
                                                                                                                      // 125
var requireFlush = function () {                                                                                      // 126
  if (! willFlush) {                                                                                                  // 127
    // We want this code to work without Meteor, see debugFunc above                                                  // 128
    if (typeof Meteor !== "undefined")                                                                                // 129
      Meteor._setImmediate(Tracker._runFlush);                                                                        // 130
    else                                                                                                              // 131
      setTimeout(Tracker._runFlush, 0);                                                                               // 132
    willFlush = true;                                                                                                 // 133
  }                                                                                                                   // 134
};                                                                                                                    // 135
                                                                                                                      // 136
// Tracker.Computation constructor is visible but private                                                             // 137
// (throws an error if you try to call it)                                                                            // 138
var constructingComputation = false;                                                                                  // 139
                                                                                                                      // 140
//                                                                                                                    // 141
// http://docs.meteor.com/#tracker_computation                                                                        // 142
                                                                                                                      // 143
/**                                                                                                                   // 144
 * @summary A Computation object represents code that is repeatedly rerun                                             // 145
 * in response to                                                                                                     // 146
 * reactive data changes. Computations don't have return values; they just                                            // 147
 * perform actions, such as rerendering a template on the screen. Computations                                        // 148
 * are created using Tracker.autorun. Use stop to prevent further rerunning of a                                      // 149
 * computation.                                                                                                       // 150
 * @instancename computation                                                                                          // 151
 */                                                                                                                   // 152
Tracker.Computation = function (f, parent, onError) {                                                                 // 153
  if (! constructingComputation)                                                                                      // 154
    throw new Error(                                                                                                  // 155
      "Tracker.Computation constructor is private; use Tracker.autorun");                                             // 156
  constructingComputation = false;                                                                                    // 157
                                                                                                                      // 158
  var self = this;                                                                                                    // 159
                                                                                                                      // 160
  // http://docs.meteor.com/#computation_stopped                                                                      // 161
                                                                                                                      // 162
  /**                                                                                                                 // 163
   * @summary True if this computation has been stopped.                                                              // 164
   * @locus Client                                                                                                    // 165
   * @memberOf Tracker.Computation                                                                                    // 166
   * @instance                                                                                                        // 167
   * @name  stopped                                                                                                   // 168
   */                                                                                                                 // 169
  self.stopped = false;                                                                                               // 170
                                                                                                                      // 171
  // http://docs.meteor.com/#computation_invalidated                                                                  // 172
                                                                                                                      // 173
  /**                                                                                                                 // 174
   * @summary True if this computation has been invalidated (and not yet rerun), or if it has been stopped.           // 175
   * @locus Client                                                                                                    // 176
   * @memberOf Tracker.Computation                                                                                    // 177
   * @instance                                                                                                        // 178
   * @name  invalidated                                                                                               // 179
   * @type {Boolean}                                                                                                  // 180
   */                                                                                                                 // 181
  self.invalidated = false;                                                                                           // 182
                                                                                                                      // 183
  // http://docs.meteor.com/#computation_firstrun                                                                     // 184
                                                                                                                      // 185
  /**                                                                                                                 // 186
   * @summary True during the initial run of the computation at the time `Tracker.autorun` is called, and false on subsequent reruns and at other times.
   * @locus Client                                                                                                    // 188
   * @memberOf Tracker.Computation                                                                                    // 189
   * @instance                                                                                                        // 190
   * @name  firstRun                                                                                                  // 191
   * @type {Boolean}                                                                                                  // 192
   */                                                                                                                 // 193
  self.firstRun = true;                                                                                               // 194
                                                                                                                      // 195
  self._id = nextId++;                                                                                                // 196
  self._onInvalidateCallbacks = [];                                                                                   // 197
  self._onStopCallbacks = [];                                                                                         // 198
  // the plan is at some point to use the parent relation                                                             // 199
  // to constrain the order that computations are processed                                                           // 200
  self._parent = parent;                                                                                              // 201
  self._func = f;                                                                                                     // 202
  self._onError = onError;                                                                                            // 203
  self._recomputing = false;                                                                                          // 204
                                                                                                                      // 205
  // Register the computation within the global Tracker.                                                              // 206
  Tracker._computations[self._id] = self;                                                                             // 207
                                                                                                                      // 208
  var errored = true;                                                                                                 // 209
  try {                                                                                                               // 210
    self._compute();                                                                                                  // 211
    errored = false;                                                                                                  // 212
  } finally {                                                                                                         // 213
    self.firstRun = false;                                                                                            // 214
    if (errored)                                                                                                      // 215
      self.stop();                                                                                                    // 216
  }                                                                                                                   // 217
};                                                                                                                    // 218
                                                                                                                      // 219
// http://docs.meteor.com/#computation_oninvalidate                                                                   // 220
                                                                                                                      // 221
/**                                                                                                                   // 222
 * @summary Registers `callback` to run when this computation is next invalidated, or runs it immediately if the computation is already invalidated.  The callback is run exactly once and not upon future invalidations unless `onInvalidate` is called again after the computation becomes valid again.
 * @locus Client                                                                                                      // 224
 * @param {Function} callback Function to be called on invalidation. Receives one argument, the computation that was invalidated.
 */                                                                                                                   // 226
Tracker.Computation.prototype.onInvalidate = function (f) {                                                           // 227
  var self = this;                                                                                                    // 228
                                                                                                                      // 229
  if (typeof f !== 'function')                                                                                        // 230
    throw new Error("onInvalidate requires a function");                                                              // 231
                                                                                                                      // 232
  if (self.invalidated) {                                                                                             // 233
    Tracker.nonreactive(function () {                                                                                 // 234
      withNoYieldsAllowed(f)(self);                                                                                   // 235
    });                                                                                                               // 236
  } else {                                                                                                            // 237
    self._onInvalidateCallbacks.push(f);                                                                              // 238
  }                                                                                                                   // 239
};                                                                                                                    // 240
                                                                                                                      // 241
/**                                                                                                                   // 242
 * @summary Registers `callback` to run when this computation is stopped, or runs it immediately if the computation is already stopped.  The callback is run after any `onInvalidate` callbacks.
 * @locus Client                                                                                                      // 244
 * @param {Function} callback Function to be called on stop. Receives one argument, the computation that was stopped.
 */                                                                                                                   // 246
Tracker.Computation.prototype.onStop = function (f) {                                                                 // 247
  var self = this;                                                                                                    // 248
                                                                                                                      // 249
  if (typeof f !== 'function')                                                                                        // 250
    throw new Error("onStop requires a function");                                                                    // 251
                                                                                                                      // 252
  if (self.stopped) {                                                                                                 // 253
    Tracker.nonreactive(function () {                                                                                 // 254
      withNoYieldsAllowed(f)(self);                                                                                   // 255
    });                                                                                                               // 256
  } else {                                                                                                            // 257
    self._onStopCallbacks.push(f);                                                                                    // 258
  }                                                                                                                   // 259
};                                                                                                                    // 260
                                                                                                                      // 261
// http://docs.meteor.com/#computation_invalidate                                                                     // 262
                                                                                                                      // 263
/**                                                                                                                   // 264
 * @summary Invalidates this computation so that it will be rerun.                                                    // 265
 * @locus Client                                                                                                      // 266
 */                                                                                                                   // 267
Tracker.Computation.prototype.invalidate = function () {                                                              // 268
  var self = this;                                                                                                    // 269
  if (! self.invalidated) {                                                                                           // 270
    // if we're currently in _recompute(), don't enqueue                                                              // 271
    // ourselves, since we'll rerun immediately anyway.                                                               // 272
    if (! self._recomputing && ! self.stopped) {                                                                      // 273
      requireFlush();                                                                                                 // 274
      pendingComputations.push(this);                                                                                 // 275
    }                                                                                                                 // 276
                                                                                                                      // 277
    self.invalidated = true;                                                                                          // 278
                                                                                                                      // 279
    // callbacks can't add callbacks, because                                                                         // 280
    // self.invalidated === true.                                                                                     // 281
    for(var i = 0, f; f = self._onInvalidateCallbacks[i]; i++) {                                                      // 282
      Tracker.nonreactive(function () {                                                                               // 283
        withNoYieldsAllowed(f)(self);                                                                                 // 284
      });                                                                                                             // 285
    }                                                                                                                 // 286
    self._onInvalidateCallbacks = [];                                                                                 // 287
  }                                                                                                                   // 288
};                                                                                                                    // 289
                                                                                                                      // 290
// http://docs.meteor.com/#computation_stop                                                                           // 291
                                                                                                                      // 292
/**                                                                                                                   // 293
 * @summary Prevents this computation from rerunning.                                                                 // 294
 * @locus Client                                                                                                      // 295
 */                                                                                                                   // 296
Tracker.Computation.prototype.stop = function () {                                                                    // 297
  var self = this;                                                                                                    // 298
                                                                                                                      // 299
  if (! self.stopped) {                                                                                               // 300
    self.stopped = true;                                                                                              // 301
    self.invalidate();                                                                                                // 302
    // Unregister from global Tracker.                                                                                // 303
    delete Tracker._computations[self._id];                                                                           // 304
    for(var i = 0, f; f = self._onStopCallbacks[i]; i++) {                                                            // 305
      Tracker.nonreactive(function () {                                                                               // 306
        withNoYieldsAllowed(f)(self);                                                                                 // 307
      });                                                                                                             // 308
    }                                                                                                                 // 309
    self._onStopCallbacks = [];                                                                                       // 310
  }                                                                                                                   // 311
};                                                                                                                    // 312
                                                                                                                      // 313
Tracker.Computation.prototype._compute = function () {                                                                // 314
  var self = this;                                                                                                    // 315
  self.invalidated = false;                                                                                           // 316
                                                                                                                      // 317
  var previous = Tracker.currentComputation;                                                                          // 318
  setCurrentComputation(self);                                                                                        // 319
  var previousInCompute = inCompute;                                                                                  // 320
  inCompute = true;                                                                                                   // 321
  try {                                                                                                               // 322
    withNoYieldsAllowed(self._func)(self);                                                                            // 323
  } finally {                                                                                                         // 324
    setCurrentComputation(previous);                                                                                  // 325
    inCompute = previousInCompute;                                                                                    // 326
  }                                                                                                                   // 327
};                                                                                                                    // 328
                                                                                                                      // 329
Tracker.Computation.prototype._needsRecompute = function () {                                                         // 330
  var self = this;                                                                                                    // 331
  return self.invalidated && ! self.stopped;                                                                          // 332
};                                                                                                                    // 333
                                                                                                                      // 334
Tracker.Computation.prototype._recompute = function () {                                                              // 335
  var self = this;                                                                                                    // 336
                                                                                                                      // 337
  self._recomputing = true;                                                                                           // 338
  try {                                                                                                               // 339
    if (self._needsRecompute()) {                                                                                     // 340
      try {                                                                                                           // 341
        self._compute();                                                                                              // 342
      } catch (e) {                                                                                                   // 343
        if (self._onError) {                                                                                          // 344
          self._onError(e);                                                                                           // 345
        } else {                                                                                                      // 346
          _throwOrLog("recompute", e);                                                                                // 347
        }                                                                                                             // 348
      }                                                                                                               // 349
    }                                                                                                                 // 350
  } finally {                                                                                                         // 351
    self._recomputing = false;                                                                                        // 352
  }                                                                                                                   // 353
};                                                                                                                    // 354
                                                                                                                      // 355
/**                                                                                                                   // 356
 * @summary Process the reactive updates for this computation immediately                                             // 357
 * and ensure that the computation is rerun. The computation is rerun only                                            // 358
 * if it is invalidated.                                                                                              // 359
 * @locus Client                                                                                                      // 360
 */                                                                                                                   // 361
Tracker.Computation.prototype.flush = function () {                                                                   // 362
  var self = this;                                                                                                    // 363
                                                                                                                      // 364
  if (self._recomputing)                                                                                              // 365
    return;                                                                                                           // 366
                                                                                                                      // 367
  self._recompute();                                                                                                  // 368
};                                                                                                                    // 369
                                                                                                                      // 370
/**                                                                                                                   // 371
 * @summary Causes the function inside this computation to run and                                                    // 372
 * synchronously process all reactive updtes.                                                                         // 373
 * @locus Client                                                                                                      // 374
 */                                                                                                                   // 375
Tracker.Computation.prototype.run = function () {                                                                     // 376
  var self = this;                                                                                                    // 377
  self.invalidate();                                                                                                  // 378
  self.flush();                                                                                                       // 379
};                                                                                                                    // 380
                                                                                                                      // 381
//                                                                                                                    // 382
// http://docs.meteor.com/#tracker_dependency                                                                         // 383
                                                                                                                      // 384
/**                                                                                                                   // 385
 * @summary A Dependency represents an atomic unit of reactive data that a                                            // 386
 * computation might depend on. Reactive data sources such as Session or                                              // 387
 * Minimongo internally create different Dependency objects for different                                             // 388
 * pieces of data, each of which may be depended on by multiple computations.                                         // 389
 * When the data changes, the computations are invalidated.                                                           // 390
 * @class                                                                                                             // 391
 * @instanceName dependency                                                                                           // 392
 */                                                                                                                   // 393
Tracker.Dependency = function () {                                                                                    // 394
  this._dependentsById = {};                                                                                          // 395
};                                                                                                                    // 396
                                                                                                                      // 397
// http://docs.meteor.com/#dependency_depend                                                                          // 398
//                                                                                                                    // 399
// Adds `computation` to this set if it is not already                                                                // 400
// present.  Returns true if `computation` is a new member of the set.                                                // 401
// If no argument, defaults to currentComputation, or does nothing                                                    // 402
// if there is no currentComputation.                                                                                 // 403
                                                                                                                      // 404
/**                                                                                                                   // 405
 * @summary Declares that the current computation (or `fromComputation` if given) depends on `dependency`.  The computation will be invalidated the next time `dependency` changes.
                                                                                                                      // 407
If there is no current computation and `depend()` is called with no arguments, it does nothing and returns false.     // 408
                                                                                                                      // 409
Returns true if the computation is a new dependent of `dependency` rather than an existing one.                       // 410
 * @locus Client                                                                                                      // 411
 * @param {Tracker.Computation} [fromComputation] An optional computation declared to depend on `dependency` instead of the current computation.
 * @returns {Boolean}                                                                                                 // 413
 */                                                                                                                   // 414
Tracker.Dependency.prototype.depend = function (computation) {                                                        // 415
  if (! computation) {                                                                                                // 416
    if (! Tracker.active)                                                                                             // 417
      return false;                                                                                                   // 418
                                                                                                                      // 419
    computation = Tracker.currentComputation;                                                                         // 420
  }                                                                                                                   // 421
  var self = this;                                                                                                    // 422
  var id = computation._id;                                                                                           // 423
  if (! (id in self._dependentsById)) {                                                                               // 424
    self._dependentsById[id] = computation;                                                                           // 425
    computation.onInvalidate(function () {                                                                            // 426
      delete self._dependentsById[id];                                                                                // 427
    });                                                                                                               // 428
    return true;                                                                                                      // 429
  }                                                                                                                   // 430
  return false;                                                                                                       // 431
};                                                                                                                    // 432
                                                                                                                      // 433
// http://docs.meteor.com/#dependency_changed                                                                         // 434
                                                                                                                      // 435
/**                                                                                                                   // 436
 * @summary Invalidate all dependent computations immediately and remove them as dependents.                          // 437
 * @locus Client                                                                                                      // 438
 */                                                                                                                   // 439
Tracker.Dependency.prototype.changed = function () {                                                                  // 440
  var self = this;                                                                                                    // 441
  for (var id in self._dependentsById)                                                                                // 442
    self._dependentsById[id].invalidate();                                                                            // 443
};                                                                                                                    // 444
                                                                                                                      // 445
// http://docs.meteor.com/#dependency_hasdependents                                                                   // 446
                                                                                                                      // 447
/**                                                                                                                   // 448
 * @summary True if this Dependency has one or more dependent Computations, which would be invalidated if this Dependency were to change.
 * @locus Client                                                                                                      // 450
 * @returns {Boolean}                                                                                                 // 451
 */                                                                                                                   // 452
Tracker.Dependency.prototype.hasDependents = function () {                                                            // 453
  var self = this;                                                                                                    // 454
  for(var id in self._dependentsById)                                                                                 // 455
    return true;                                                                                                      // 456
  return false;                                                                                                       // 457
};                                                                                                                    // 458
                                                                                                                      // 459
// http://docs.meteor.com/#tracker_flush                                                                              // 460
                                                                                                                      // 461
/**                                                                                                                   // 462
 * @summary Process all reactive updates immediately and ensure that all invalidated computations are rerun.          // 463
 * @locus Client                                                                                                      // 464
 */                                                                                                                   // 465
Tracker.flush = function (options) {                                                                                  // 466
  Tracker._runFlush({ finishSynchronously: true,                                                                      // 467
                      throwFirstError: options && options._throwFirstError });                                        // 468
};                                                                                                                    // 469
                                                                                                                      // 470
// Run all pending computations and afterFlush callbacks.  If we were not called                                      // 471
// directly via Tracker.flush, this may return before they're all done to allow                                       // 472
// the event loop to run a little before continuing.                                                                  // 473
Tracker._runFlush = function (options) {                                                                              // 474
  // XXX What part of the comment below is still true? (We no longer                                                  // 475
  // have Spark)                                                                                                      // 476
  //                                                                                                                  // 477
  // Nested flush could plausibly happen if, say, a flush causes                                                      // 478
  // DOM mutation, which causes a "blur" event, which runs an                                                         // 479
  // app event handler that calls Tracker.flush.  At the moment                                                       // 480
  // Spark blocks event handlers during DOM mutation anyway,                                                          // 481
  // because the LiveRange tree isn't valid.  And we don't have                                                       // 482
  // any useful notion of a nested flush.                                                                             // 483
  //                                                                                                                  // 484
  // https://app.asana.com/0/159908330244/385138233856                                                                // 485
  if (inFlush)                                                                                                        // 486
    throw new Error("Can't call Tracker.flush while flushing");                                                       // 487
                                                                                                                      // 488
  if (inCompute)                                                                                                      // 489
    throw new Error("Can't flush inside Tracker.autorun");                                                            // 490
                                                                                                                      // 491
  options = options || {};                                                                                            // 492
                                                                                                                      // 493
  inFlush = true;                                                                                                     // 494
  willFlush = true;                                                                                                   // 495
  throwFirstError = !! options.throwFirstError;                                                                       // 496
                                                                                                                      // 497
  var recomputedCount = 0;                                                                                            // 498
  var finishedTry = false;                                                                                            // 499
  try {                                                                                                               // 500
    while (pendingComputations.length ||                                                                              // 501
           afterFlushCallbacks.length) {                                                                              // 502
                                                                                                                      // 503
      // recompute all pending computations                                                                           // 504
      while (pendingComputations.length) {                                                                            // 505
        var comp = pendingComputations.shift();                                                                       // 506
        comp._recompute();                                                                                            // 507
        if (comp._needsRecompute()) {                                                                                 // 508
          pendingComputations.unshift(comp);                                                                          // 509
        }                                                                                                             // 510
                                                                                                                      // 511
        if (! options.finishSynchronously && ++recomputedCount > 1000) {                                              // 512
          finishedTry = true;                                                                                         // 513
          return;                                                                                                     // 514
        }                                                                                                             // 515
      }                                                                                                               // 516
                                                                                                                      // 517
      if (afterFlushCallbacks.length) {                                                                               // 518
        // call one afterFlush callback, which may                                                                    // 519
        // invalidate more computations                                                                               // 520
        var func = afterFlushCallbacks.shift();                                                                       // 521
        try {                                                                                                         // 522
          func();                                                                                                     // 523
        } catch (e) {                                                                                                 // 524
          _throwOrLog("afterFlush", e);                                                                               // 525
        }                                                                                                             // 526
      }                                                                                                               // 527
    }                                                                                                                 // 528
    finishedTry = true;                                                                                               // 529
  } finally {                                                                                                         // 530
    if (! finishedTry) {                                                                                              // 531
      // we're erroring due to throwFirstError being true.                                                            // 532
      inFlush = false; // needed before calling `Tracker.flush()` again                                               // 533
      // finish flushing                                                                                              // 534
      Tracker._runFlush({                                                                                             // 535
        finishSynchronously: options.finishSynchronously,                                                             // 536
        throwFirstError: false                                                                                        // 537
      });                                                                                                             // 538
    }                                                                                                                 // 539
    willFlush = false;                                                                                                // 540
    inFlush = false;                                                                                                  // 541
    if (pendingComputations.length || afterFlushCallbacks.length) {                                                   // 542
      // We're yielding because we ran a bunch of computations and we aren't                                          // 543
      // required to finish synchronously, so we'd like to give the event loop a                                      // 544
      // chance. We should flush again soon.                                                                          // 545
      if (options.finishSynchronously) {                                                                              // 546
        throw new Error("still have more to do?");  // shouldn't happen                                               // 547
      }                                                                                                               // 548
      setTimeout(requireFlush, 10);                                                                                   // 549
    }                                                                                                                 // 550
  }                                                                                                                   // 551
};                                                                                                                    // 552
                                                                                                                      // 553
// http://docs.meteor.com/#tracker_autorun                                                                            // 554
//                                                                                                                    // 555
// Run f(). Record its dependencies. Rerun it whenever the                                                            // 556
// dependencies change.                                                                                               // 557
//                                                                                                                    // 558
// Returns a new Computation, which is also passed to f.                                                              // 559
//                                                                                                                    // 560
// Links the computation to the current computation                                                                   // 561
// so that it is stopped if the current computation is invalidated.                                                   // 562
                                                                                                                      // 563
/**                                                                                                                   // 564
 * @callback Tracker.ComputationFunction                                                                              // 565
 * @param {Tracker.Computation}                                                                                       // 566
 */                                                                                                                   // 567
/**                                                                                                                   // 568
 * @summary Run a function now and rerun it later whenever its dependencies                                           // 569
 * change. Returns a Computation object that can be used to stop or observe the                                       // 570
 * rerunning.                                                                                                         // 571
 * @locus Client                                                                                                      // 572
 * @param {Tracker.ComputationFunction} runFunc The function to run. It receives                                      // 573
 * one argument: the Computation object that will be returned.                                                        // 574
 * @param {Object} [options]                                                                                          // 575
 * @param {Function} options.onError Optional. The function to run when an error                                      // 576
 * happens in the Computation. The only argument it recieves is the Error                                             // 577
 * thrown. Defaults to the error being logged to the console.                                                         // 578
 * @returns {Tracker.Computation}                                                                                     // 579
 */                                                                                                                   // 580
Tracker.autorun = function (f, options) {                                                                             // 581
  if (typeof f !== 'function')                                                                                        // 582
    throw new Error('Tracker.autorun requires a function argument');                                                  // 583
                                                                                                                      // 584
  options = options || {};                                                                                            // 585
                                                                                                                      // 586
  constructingComputation = true;                                                                                     // 587
  var c = new Tracker.Computation(                                                                                    // 588
    f, Tracker.currentComputation, options.onError);                                                                  // 589
                                                                                                                      // 590
  if (Tracker.active)                                                                                                 // 591
    Tracker.onInvalidate(function () {                                                                                // 592
      c.stop();                                                                                                       // 593
    });                                                                                                               // 594
                                                                                                                      // 595
  return c;                                                                                                           // 596
};                                                                                                                    // 597
                                                                                                                      // 598
// http://docs.meteor.com/#tracker_nonreactive                                                                        // 599
//                                                                                                                    // 600
// Run `f` with no current computation, returning the return value                                                    // 601
// of `f`.  Used to turn off reactivity for the duration of `f`,                                                      // 602
// so that reactive data sources accessed by `f` will not result in any                                               // 603
// computations being invalidated.                                                                                    // 604
                                                                                                                      // 605
/**                                                                                                                   // 606
 * @summary Run a function without tracking dependencies.                                                             // 607
 * @locus Client                                                                                                      // 608
 * @param {Function} func A function to call immediately.                                                             // 609
 */                                                                                                                   // 610
Tracker.nonreactive = function (f) {                                                                                  // 611
  var previous = Tracker.currentComputation;                                                                          // 612
  setCurrentComputation(null);                                                                                        // 613
  try {                                                                                                               // 614
    return f();                                                                                                       // 615
  } finally {                                                                                                         // 616
    setCurrentComputation(previous);                                                                                  // 617
  }                                                                                                                   // 618
};                                                                                                                    // 619
                                                                                                                      // 620
// http://docs.meteor.com/#tracker_oninvalidate                                                                       // 621
                                                                                                                      // 622
/**                                                                                                                   // 623
 * @summary Registers a new [`onInvalidate`](#computation_oninvalidate) callback on the current computation (which must exist), to be called immediately when the current computation is invalidated or stopped.
 * @locus Client                                                                                                      // 625
 * @param {Function} callback A callback function that will be invoked as `func(c)`, where `c` is the computation on which the callback is registered.
 */                                                                                                                   // 627
Tracker.onInvalidate = function (f) {                                                                                 // 628
  if (! Tracker.active)                                                                                               // 629
    throw new Error("Tracker.onInvalidate requires a currentComputation");                                            // 630
                                                                                                                      // 631
  Tracker.currentComputation.onInvalidate(f);                                                                         // 632
};                                                                                                                    // 633
                                                                                                                      // 634
// http://docs.meteor.com/#tracker_afterflush                                                                         // 635
                                                                                                                      // 636
/**                                                                                                                   // 637
 * @summary Schedules a function to be called during the next flush, or later in the current flush if one is in progress, after all invalidated computations have been rerun.  The function will be run once and not on subsequent flushes unless `afterFlush` is called again.
 * @locus Client                                                                                                      // 639
 * @param {Function} callback A function to call at flush time.                                                       // 640
 */                                                                                                                   // 641
Tracker.afterFlush = function (f) {                                                                                   // 642
  afterFlushCallbacks.push(f);                                                                                        // 643
  requireFlush();                                                                                                     // 644
};                                                                                                                    // 645
                                                                                                                      // 646
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/tracker/deprecated.js                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// Deprecated functions.                                                                                              // 1
                                                                                                                      // 2
// These functions used to be on the Meteor object (and worked slightly                                               // 3
// differently).                                                                                                      // 4
// XXX COMPAT WITH 0.5.7                                                                                              // 5
Meteor.flush = Tracker.flush;                                                                                         // 6
Meteor.autorun = Tracker.autorun;                                                                                     // 7
                                                                                                                      // 8
// We used to require a special "autosubscribe" call to reactively subscribe to                                       // 9
// things. Now, it works with autorun.                                                                                // 10
// XXX COMPAT WITH 0.5.4                                                                                              // 11
Meteor.autosubscribe = Tracker.autorun;                                                                               // 12
                                                                                                                      // 13
// This Tracker API briefly existed in 0.5.8 and 0.5.9                                                                // 14
// XXX COMPAT WITH 0.5.9                                                                                              // 15
Tracker.depend = function (d) {                                                                                       // 16
  return d.depend();                                                                                                  // 17
};                                                                                                                    // 18
                                                                                                                      // 19
Deps = Tracker;                                                                                                       // 20
                                                                                                                      // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package.tracker = {}, {
  Tracker: Tracker,
  Deps: Deps
});

})();
