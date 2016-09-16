var require = meteorInstall({"client":{"template.main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/template.main.js                                                                                  //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
                                                                                                            // 1
Template.body.addContent((function() {                                                                      // 2
  var view = this;                                                                                          // 3
  return HTML.Raw('<div id="render-target"></div>');                                                        // 4
}));                                                                                                        // 5
Meteor.startup(Template.body.renderToDocument);                                                             // 6
                                                                                                            // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"components":{"Footer.js":["react",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/components/Footer.js                                                                              //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var React;module.import('react',{"default":function(v){React=v}});//                                        //
// IMPORTS                                                                                                  //
//                                                                                                          //
                                                                                                            // 4
                                                                                                            //
//                                                                                                          //
// COMPONENTS                                                                                               //
//                                                                                                          //
var Footer = function Footer() {                                                                            // 9
  return React.createElement(                                                                               // 10
    'b',                                                                                                    // 11
    null,                                                                                                   //
    'footer'                                                                                                //
  );                                                                                                        // 11
};                                                                                                          // 13
                                                                                                            //
//                                                                                                          //
// EXPORT                                                                                                   //
//                                                                                                          //
module.export("default",exports.default=(Footer));                                                          // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Header.js":["react","material-ui/AppBar",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/components/Header.js                                                                              //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var React;module.import('react',{"default":function(v){React=v}});var AppBar;module.import('material-ui/AppBar',{"default":function(v){AppBar=v}});//
// IMPORTS                                                                                                  //
//                                                                                                          //
                                                                                                            //
                                                                                                            // 5
                                                                                                            // 6
                                                                                                            //
//                                                                                                          //
// COMPONENT                                                                                                //
//                                                                                                          //
                                                                                                            //
var Header = function Header() {                                                                            // 12
  return React.createElement(AppBar, {                                                                      // 13
    title: 'React-redux-meteor Boilerplate',                                                                // 15
    iconClassNameRight: 'muidocs-icon-navigation-expand-more'                                               // 16
  });                                                                                                       // 14
};                                                                                                          // 19
                                                                                                            //
//                                                                                                          //
// EXPORT                                                                                                   //
//                                                                                                          //
                                                                                                            //
module.export("default",exports.default=(Header));                                                          // 25
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"containers":{"HelloStream.js":["react","react-redux",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/containers/HelloStream.js                                                                         //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var React;module.import('react',{"default":function(v){React=v}});var connect;module.import('react-redux',{"connect":function(v){connect=v}});//
// IMPORTS                                                                                                  //
//                                                                                                          //
                                                                                                            // 4
                                                                                                            // 5
                                                                                                            //
//                                                                                                          //
// COMPONENT                                                                                                //
//                                                                                                          //
var HelloStream = function HelloStream(_ref) {                                                              // 10
  var hellos = _ref.hellos;                                                                                 // 10
                                                                                                            //
  return React.createElement(                                                                               // 11
    'ul',                                                                                                   // 12
    null,                                                                                                   //
    hellos.map(function (hello, index) {                                                                    //
      return React.createElement(                                                                           // 15
        'li',                                                                                               // 16
        { key: index },                                                                                     //
        hello                                                                                               //
      );                                                                                                    // 16
    })                                                                                                      // 18
  );                                                                                                        // 12
};                                                                                                          // 22
                                                                                                            //
//                                                                                                          //
// CONNECT                                                                                                  //
//                                                                                                          //
function mapStateToProps(_ref2) {                                                                           // 27
  var hellos = _ref2.appReducer.hellos;                                                                     // 27
                                                                                                            //
  console.log(hellos);                                                                                      // 28
  return { hellos: hellos };                                                                                // 29
}                                                                                                           // 30
module.export("default",exports.default=(connect(mapStateToProps, null)(HelloStream)));                     // 31
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Index.js":["react","react-redux","../components/Footer","../components/Header","./HelloStream","material-ui/styles/MuiThemeProvider","react-tap-event-plugin",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/containers/Index.js                                                                               //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var React;module.import('react',{"default":function(v){React=v}});var connect;module.import('react-redux',{"connect":function(v){connect=v}});var Footer;module.import('../components/Footer',{"default":function(v){Footer=v}});var Header;module.import('../components/Header',{"default":function(v){Header=v}});var HelloStream;module.import('./HelloStream',{"default":function(v){HelloStream=v}});var MuiThemeProvider;module.import('material-ui/styles/MuiThemeProvider',{"default":function(v){MuiThemeProvider=v}});var injectTapEventPlugin;module.import('react-tap-event-plugin',{"default":function(v){injectTapEventPlugin=v}});//
// IMPORTS                                                                                                  //
//                                                                                                          //
                                                                                                            //
                                                                                                            // 5
                                                                                                            // 6
                                                                                                            // 7
                                                                                                            // 8
                                                                                                            // 9
                                                                                                            // 10
                                                                                                            // 11
injectTapEventPlugin();                                                                                     // 12
                                                                                                            //
//                                                                                                          //
// COMPONENT                                                                                                //
//                                                                                                          //
                                                                                                            //
var Index = function Index() {                                                                              // 18
  var styles = {                                                                                            // 19
    header: {                                                                                               // 20
      height: '10vh'                                                                                        // 21
    },                                                                                                      // 20
    body: {                                                                                                 // 23
      height: '85vh'                                                                                        // 24
    },                                                                                                      // 23
    footer: {                                                                                               // 26
      height: '5vh'                                                                                         // 27
    }                                                                                                       // 26
  };                                                                                                        // 19
  return React.createElement(                                                                               // 30
    MuiThemeProvider,                                                                                       // 31
    null,                                                                                                   //
    React.createElement(                                                                                    //
      'div',                                                                                                // 32
      null,                                                                                                 //
      React.createElement(                                                                                  //
        'div',                                                                                              // 33
        { className: 'row' },                                                                               //
        React.createElement(                                                                                //
          'div',                                                                                            // 34
          { style: styles.header, className: 'col-xs-12 col-sm-12 col-md-12 col-lg-12' },                   //
          React.createElement(Header, null)                                                                 //
        )                                                                                                   // 34
      ),                                                                                                    // 33
      React.createElement(                                                                                  //
        'div',                                                                                              // 38
        { className: 'row' },                                                                               //
        React.createElement(                                                                                //
          'div',                                                                                            // 39
          { style: styles.body, className: 'col-xs-12 col-sm-12 col-md-12 col-lg-12' },                     //
          React.createElement(                                                                              //
            'h1',                                                                                           // 40
            null,                                                                                           //
            'BODY'                                                                                          //
          )                                                                                                 // 40
        ),                                                                                                  // 39
        React.createElement(                                                                                //
          'div',                                                                                            // 42
          { style: styles.body, className: 'col-xs-12 col-sm-12 col-md-12 col-lg-12' },                     //
          React.createElement(                                                                              //
            'p',                                                                                            // 43
            null,                                                                                           //
            'Hello Stream'                                                                                  //
          ),                                                                                                // 43
          React.createElement(HelloStream, null)                                                            //
        )                                                                                                   // 42
      ),                                                                                                    // 38
      React.createElement(                                                                                  //
        'div',                                                                                              // 47
        { className: 'row' },                                                                               //
        React.createElement(                                                                                //
          'div',                                                                                            // 48
          { style: styles.footer, className: 'col-xs-12 col-sm-12 col-md-12 col-lg-12' },                   //
          React.createElement(Footer, null)                                                                 //
        )                                                                                                   // 48
      )                                                                                                     // 47
    )                                                                                                       // 32
  );                                                                                                        // 31
};                                                                                                          // 55
                                                                                                            //
//                                                                                                          //
// EXPORT                                                                                                   //
//                                                                                                          //
                                                                                                            //
module.export("default",exports.default=(connect()(Index)));                                                // 61
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Root.js":["react","react-redux","react-router","./Index",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/containers/Root.js                                                                                //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var React;module.import('react',{"default":function(v){React=v}});var Provider;module.import('react-redux',{"Provider":function(v){Provider=v}});var Router,Route,browserHistory;module.import('react-router',{"Router":function(v){Router=v},"Route":function(v){Route=v},"browserHistory":function(v){browserHistory=v}});var Index;module.import('./Index',{"default":function(v){Index=v}});//
// IMPORTS                                                                                                  //
//                                                                                                          //
                                                                                                            //
                                                                                                            // 5
                                                                                                            // 6
                                                                                                            // 7
                                                                                                            // 8
                                                                                                            //
//                                                                                                          //
// COMPONENT                                                                                                //
//                                                                                                          //
                                                                                                            //
var Root = function Root(_ref) {                                                                            // 14
  var store = _ref.store;                                                                                   // 14
  return React.createElement(                                                                               // 14
    Provider,                                                                                               // 15
    { store: store },                                                                                       //
    React.createElement(                                                                                    //
      Router,                                                                                               // 16
      { history: browserHistory },                                                                          //
      React.createElement(Route, { path: '/', component: Index }),                                          //
      React.createElement(Route, { path: '*', component: Index })                                           //
    )                                                                                                       // 16
  );                                                                                                        // 15
};                                                                                                          // 14
                                                                                                            //
//                                                                                                          //
// EXPORT                                                                                                   //
//                                                                                                          //
                                                                                                            //
module.export("default",exports.default=(Root));                                                            // 27
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"reducers":{"data.js":["babel-runtime/helpers/toConsumableArray",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/reducers/data.js                                                                                  //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
module.export({SAY_HELLO:function(){return SAY_HELLO},default:function(){return data},sayHello:function(){return sayHello}});var _toConsumableArray;module.import('babel-runtime/helpers/toConsumableArray',{"default":function(v){_toConsumableArray=v}});
//                                                                                                          //
// IMPORTS                                                                                                  //
//                                                                                                          //
                                                                                                            //
var SAY_HELLO = 'SAY_HELLO';                                                                                // 5
                                                                                                            //
//                                                                                                          //
// INITIAL STATE                                                                                            //
//                                                                                                          //
                                                                                                            //
var intialState = {                                                                                         // 11
  hellos: []                                                                                                // 12
};                                                                                                          // 11
                                                                                                            //
//                                                                                                          //
// REDUCER                                                                                                  //
//                                                                                                          //
                                                                                                            //
function data() {                                                                                           // 19
  var state = arguments.length <= 0 || arguments[0] === undefined ? intialState : arguments[0];             // 19
  var action = arguments[1];                                                                                // 19
                                                                                                            //
  switch (action.type) {                                                                                    // 20
                                                                                                            //
    case SAY_HELLO:                                                                                         // 22
      console.log('pouette');                                                                               // 23
      return Object.assign({}, state, {                                                                     // 24
        hellos: [].concat(_toConsumableArray(state.hellos), [action.hello])                                 // 25
      });                                                                                                   // 24
                                                                                                            //
    default:                                                                                                // 28
      return state;                                                                                         // 29
  }                                                                                                         // 20
}                                                                                                           // 31
                                                                                                            //
//                                                                                                          //
// EXPORT                                                                                                   //
//                                                                                                          //
                                                                                                            //
function sayHello(hello) {                                                                                  // 37
  return {                                                                                                  // 38
    type: SAY_HELLO,                                                                                        // 39
    hello: hello                                                                                            // 40
  };                                                                                                        // 38
}                                                                                                           // 42
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"index.js":["redux","./data",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/reducers/index.js                                                                                 //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var combineReducers;module.import('redux',{"combineReducers":function(v){combineReducers=v}});var data;module.import('./data',{"default":function(v){data=v}});//
// IMPORTS                                                                                                  //
//                                                                                                          //
                                                                                                            //
                                                                                                            // 5
                                                                                                            // 6
                                                                                                            //
//                                                                                                          //
// REDUCER                                                                                                  //
//                                                                                                          //
                                                                                                            //
var rootReducer = combineReducers({                                                                         // 12
  data: data                                                                                                // 13
});                                                                                                         // 12
                                                                                                            //
//                                                                                                          //
// EXPORT                                                                                                   //
//                                                                                                          //
                                                                                                            //
module.export("default",exports.default=(rootReducer));                                                     // 20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"sagas":{"index.js":["babel-runtime/regenerator","redux-saga/effects","redux-saga",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/sagas/index.js                                                                                    //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
module.export({default:function(){return rootSaga}});var _regeneratorRuntime;module.import('babel-runtime/regenerator',{"default":function(v){_regeneratorRuntime=v}});var call,fork,put,race,select,take;module.import('redux-saga/effects',{"call":function(v){call=v},"fork":function(v){fork=v},"put":function(v){put=v},"race":function(v){race=v},"select":function(v){select=v},"take":function(v){take=v}});var takeEvery;module.import('redux-saga',{"takeEvery":function(v){takeEvery=v}});
                                                                                                            //
var _marked = [rootSaga].map(_regeneratorRuntime.mark);                                                     //
                                                                                                            //
                                                                                                            // 1
                                                                                                            // 2
                                                                                                            //
// function * fetchAvailableDate () {                                                                       //
//   yield put({type: FETCH_AVAILABLES_LOG_DATES})                                                          //
//   const { user } = yield select(state => state.settings)                                                 //
//   const dates = yield call(fetchDates, user)                                                             //
//   if (dates) {                                                                                           //
//     yield put(setAvailablesLogDates(dates))                                                              //
//   }                                                                                                      //
// }                                                                                                        //
                                                                                                            //
// function * watchUpdateAvailableDates () {                                                                //
//   yield * takeEvery(SET_USER, fetchAvailableDate)                                                        //
// }                                                                                                        //
                                                                                                            //
function rootSaga() {                                                                                       // 17
  return _regeneratorRuntime.wrap(function () {                                                             // 17
    function rootSaga$(_context) {                                                                          // 17
      while (1) {                                                                                           // 17
        switch (_context.prev = _context.next) {                                                            // 17
          case 0:                                                                                           // 17
          case 'end':                                                                                       // 17
            return _context.stop();                                                                         // 17
        }                                                                                                   // 17
      }                                                                                                     // 17
    }                                                                                                       // 17
                                                                                                            //
    return rootSaga$;                                                                                       // 17
  }(), _marked[0], this);                                                                                   // 17
}                                                                                                           // 17
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"utils":{"api.js":["whatwg-fetch",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/utils/api.js                                                                                      //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
module.export({apiRequest:function(){return apiRequest}});// polyfills fetch on window object, if necessary
require('whatwg-fetch');                                                                                    // 2
                                                                                                            //
function apiRequest(endpoint) {                                                                             // 4
  var requestConfig = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];              // 4
  var cb = arguments[2];                                                                                    // 4
                                                                                                            //
  // NOTE: assumes all calls are JSON in this API                                                           //
  requestConfig.headers = {                                                                                 // 6
    'Accept': 'application/json',                                                                           // 7
    'Content-Type': 'application/json'                                                                      // 8
  };                                                                                                        // 6
  // NOTE: assumes body wasn't already stringified                                                          //
  if (requestConfig.body) {                                                                                 // 11
    requestConfig.body = JSON.stringify(requestConfig.body);                                                // 12
  }                                                                                                         // 13
  return window.fetch(endpoint, requestConfig).then(function (res) {                                        // 14
    return res.json();                                                                                      // 15
  }).then(function (json) {                                                                                 // 15
    if (cb) cb(json);                                                                                       // 17
    return json || {};                                                                                      // 18
  });                                                                                                       // 19
}                                                                                                           // 20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"main.jsx":["babel-polyfill","meteor/meteor","react","react-dom","redux","react-hot-loader","./react/containers/Root","./reducers","./sagas","redux-saga","./reducers/data","./utils/api",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/main.jsx                                                                                          //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
module.import('babel-polyfill');var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var React;module.import('react',{"default":function(v){React=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var applyMiddleware,compose,createStore;module.import('redux',{"applyMiddleware":function(v){applyMiddleware=v},"compose":function(v){compose=v},"createStore":function(v){createStore=v}});var AppContainer;module.import('react-hot-loader',{"AppContainer":function(v){AppContainer=v}});var Root;module.import('./react/containers/Root',{"default":function(v){Root=v}});var rootReducer;module.import('./reducers',{"default":function(v){rootReducer=v}});var rootSaga;module.import('./sagas',{"default":function(v){rootSaga=v}});var createSagaMiddleware;module.import('redux-saga',{"default":function(v){createSagaMiddleware=v}});var sayHello;module.import('./reducers/data',{"sayHello":function(v){sayHello=v}});var apiRequest;module.import('./utils/api',{"apiRequest":function(v){apiRequest=v}});//
// IMPORTS                                                                                                  //
//                                                                                                          //
 // required for generator support, for redux-saga                                                          // 4
                                                                                                            //
                                                                                                            // 6
                                                                                                            // 7
                                                                                                            // 8
                                                                                                            // 9
                                                                                                            // 10
                                                                                                            //
                                                                                                            // 12
                                                                                                            // 13
                                                                                                            //
                                                                                                            // 15
                                                                                                            // 16
                                                                                                            //
                                                                                                            // 18
                                                                                                            // 19
                                                                                                            //
//                                                                                                          //
// SAGA                                                                                                     //
//                                                                                                          //
                                                                                                            //
var sagaMiddleware = createSagaMiddleware();                                                                // 25
                                                                                                            //
//                                                                                                          //
// STORE                                                                                                    //
//                                                                                                          //
                                                                                                            //
var store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;                                                                                                 // 37
}));                                                                                                        // 37
sagaMiddleware.run(rootSaga);                                                                               // 40
                                                                                                            //
// APP                                                                                                      //
Meteor.startup(function () {                                                                                // 43
  // api demo                                                                                               //
  apiRequest('/hello');                                                                                     // 45
  Streamy.on('hello', function (hello) {                                                                    // 46
    // sayHello(hello.hello)                                                                                //
  });                                                                                                       // 48
  // actual render app                                                                                      //
  var reactDivElement = document.getElementById('render-target');                                           // 50
  if (reactDivElement) {                                                                                    // 51
    ReactDOM.render(React.createElement(                                                                    // 52
      AppContainer,                                                                                         // 53
      null,                                                                                                 //
      React.createElement(Root, { store: store })                                                           //
    ), reactDivElement);                                                                                    // 53
  }                                                                                                         // 57
});                                                                                                         // 58
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css",".jsx"]});
require("./client/template.main.js");
require("./client/components/Footer.js");
require("./client/components/Header.js");
require("./client/containers/HelloStream.js");
require("./client/containers/Index.js");
require("./client/containers/Root.js");
require("./client/reducers/data.js");
require("./client/reducers/index.js");
require("./client/sagas/index.js");
require("./client/utils/api.js");
require("./client/main.jsx");