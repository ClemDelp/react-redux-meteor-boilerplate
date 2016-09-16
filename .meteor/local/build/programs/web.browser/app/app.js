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
    'FOOTER'                                                                                                //
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
    title: 'Meteor react-redux boilerplate',                                                                // 15
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

}]},"containers":{"Index.js":["react","react-redux","../components/Footer","../components/Header","material-ui/styles/MuiThemeProvider","react-tap-event-plugin","../demo/",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/containers/Index.js                                                                               //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var React;module.import('react',{"default":function(v){React=v}});var connect;module.import('react-redux',{"connect":function(v){connect=v}});var Footer;module.import('../components/Footer',{"default":function(v){Footer=v}});var Header;module.import('../components/Header',{"default":function(v){Header=v}});var MuiThemeProvider;module.import('material-ui/styles/MuiThemeProvider',{"default":function(v){MuiThemeProvider=v}});var injectTapEventPlugin;module.import('react-tap-event-plugin',{"default":function(v){injectTapEventPlugin=v}});var Demo;module.import('../demo/',{"default":function(v){Demo=v}});//
// IMPORTS                                                                                                  //
//                                                                                                          //
                                                                                                            //
                                                                                                            // 5
                                                                                                            // 6
                                                                                                            // 7
                                                                                                            // 8
                                                                                                            // 9
                                                                                                            // 10
injectTapEventPlugin();                                                                                     // 11
                                                                                                            //
// To remove                                                                                                //
                                                                                                            // 14
                                                                                                            //
//                                                                                                          //
// COMPONENT                                                                                                //
//                                                                                                          //
                                                                                                            //
var Index = function Index() {                                                                              // 20
  var styles = {                                                                                            // 21
    header: {                                                                                               // 22
      height: '10vh'                                                                                        // 23
    },                                                                                                      // 22
    body: {                                                                                                 // 25
      height: '85vh',                                                                                       // 26
      overflowY: 'auto'                                                                                     // 27
    },                                                                                                      // 25
    footer: {                                                                                               // 29
      height: '5vh'                                                                                         // 30
    }                                                                                                       // 29
  };                                                                                                        // 21
  return React.createElement(                                                                               // 33
    MuiThemeProvider,                                                                                       // 34
    null,                                                                                                   //
    React.createElement(                                                                                    //
      'div',                                                                                                // 35
      null,                                                                                                 //
      React.createElement(                                                                                  //
        'div',                                                                                              // 36
        { className: 'row' },                                                                               //
        React.createElement(                                                                                //
          'div',                                                                                            // 37
          { style: styles.header, className: 'col-xs-12 col-sm-12 col-md-12 col-lg-12' },                   //
          React.createElement(Header, null)                                                                 //
        )                                                                                                   // 37
      ),                                                                                                    // 36
      React.createElement(                                                                                  //
        'div',                                                                                              // 41
        { className: 'row' },                                                                               //
        React.createElement(                                                                                //
          'div',                                                                                            // 42
          { style: styles.body, className: 'col-xs-12 col-sm-12 col-md-12 col-lg-12' },                     //
          React.createElement(Demo, null)                                                                   //
        )                                                                                                   // 42
      ),                                                                                                    // 41
      React.createElement(                                                                                  //
        'div',                                                                                              // 46
        { className: 'row' },                                                                               //
        React.createElement(                                                                                //
          'div',                                                                                            // 47
          { style: styles.footer, className: 'col-xs-12 col-sm-12 col-md-12 col-lg-12' },                   //
          React.createElement(Footer, null)                                                                 //
        )                                                                                                   // 47
      )                                                                                                     // 46
    )                                                                                                       // 35
  );                                                                                                        // 34
};                                                                                                          // 54
                                                                                                            //
//                                                                                                          //
// CONNECT                                                                                                  //
//                                                                                                          //
                                                                                                            //
function mapStateToProps(_ref) {                                                                            // 60
  var hellos = _ref.demo.hellos;                                                                            // 60
                                                                                                            //
  return { hellos: hellos };                                                                                // 61
}                                                                                                           // 62
                                                                                                            //
module.export("default",exports.default=(connect(mapStateToProps, null)(Index)));                           // 64
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
                                                                                                            //
                                                                                                            // 9
                                                                                                            //
//                                                                                                          //
// COMPONENT                                                                                                //
//                                                                                                          //
                                                                                                            //
var Root = function Root(_ref) {                                                                            // 15
  var store = _ref.store;                                                                                   // 15
  return React.createElement(                                                                               // 15
    Provider,                                                                                               // 16
    { store: store },                                                                                       //
    React.createElement(                                                                                    //
      Router,                                                                                               // 17
      { history: browserHistory },                                                                          //
      React.createElement(Route, { path: '/', component: Index }),                                          //
      React.createElement(Route, { path: '*', component: Index })                                           //
    )                                                                                                       // 17
  );                                                                                                        // 16
};                                                                                                          // 15
                                                                                                            //
//                                                                                                          //
// EXPORT                                                                                                   //
//                                                                                                          //
                                                                                                            //
module.export("default",exports.default=(Root));                                                            // 28
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"demo":{"Plotly.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/demo/Plotly.js                                                                                    //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React;module.import('react',{"default":function(v){React=v}});
                                                                                                            //
                                                                                                            //
// MODULE                                                                                                   //
                                                                                                            //
                                                                                                            // 3
                                                                                                            //
// COMPONENT                                                                                                //
                                                                                                            //
var PlotlyChart = function (_React$Component) {                                                             //
  _inherits(PlotlyChart, _React$Component);                                                                 //
                                                                                                            //
  function PlotlyChart(props) {                                                                             // 7
    _classCallCheck(this, PlotlyChart);                                                                     // 7
                                                                                                            //
    return _possibleConstructorReturn(this, _React$Component.call(this, props));                            // 7
  }                                                                                                         // 9
                                                                                                            //
  // first time                                                                                             //
                                                                                                            //
                                                                                                            //
  PlotlyChart.prototype.componentDidMount = function () {                                                   //
    function componentDidMount() {                                                                          //
      var y = this.props.y;                                                                                 // 13
      var trace = {                                                                                         // 14
        name: 'data',                                                                                       // 15
        x: this.props.x,                                                                                    // 16
        y: y,                                                                                               // 17
        type: 'scatter',                                                                                    // 18
        opacity: 0.75,                                                                                      // 19
        marker: { color: this.props.color }                                                                 // 20
      };                                                                                                    // 14
      var data = [trace];                                                                                   // 22
      var layout = {                                                                                        // 23
        title: this.props.name,                                                                             // 24
        showlegend: true,                                                                                   // 25
        xaxis: {                                                                                            // 26
          autorange: true                                                                                   // 27
        },                                                                                                  // 26
        yaxis: {                                                                                            // 29
          autorange: true                                                                                   // 30
        }                                                                                                   // 29
      };                                                                                                    // 23
      if (this.props.type) {                                                                                // 33
        layout.xaxis.type = this.props.type;                                                                // 34
        layout.yaxis.type = this.props.type;                                                                // 35
      }                                                                                                     // 36
      Plotly.newPlot(this.refs.graphViz, data, layout);                                                     // 37
    }                                                                                                       // 38
                                                                                                            //
    return componentDidMount;                                                                               //
  }();                                                                                                      //
                                                                                                            //
  PlotlyChart.prototype.range = function () {                                                               //
    function range(start, end) {                                                                            //
      var foo = [];                                                                                         // 41
      for (var i = start; i < end; i++) {                                                                   // 42
        foo.push(i);                                                                                        // 43
      }                                                                                                     // 44
      return foo;                                                                                           // 45
    }                                                                                                       // 46
                                                                                                            //
    return range;                                                                                           //
  }();                                                                                                      //
  // after first time                                                                                       //
                                                                                                            //
                                                                                                            //
  PlotlyChart.prototype.componentDidUpdate = function () {                                                  //
    function componentDidUpdate() {                                                                         //
      console.log('props', this.props);                                                                     // 49
      var index = this.props.y.length;                                                                      // 50
      var x = this.props.x[index - 1];                                                                      // 51
      var y = this.props.y[index - 1];                                                                      // 52
      this.refs.graphViz.data[0].x.push(x);                                                                 // 53
      this.refs.graphViz.data[0].y.push(y);                                                                 // 54
      Plotly.redraw(this.refs.graphViz);                                                                    // 55
    }                                                                                                       // 56
                                                                                                            //
    return componentDidUpdate;                                                                              //
  }();                                                                                                      //
                                                                                                            //
  PlotlyChart.prototype.render = function () {                                                              //
    function render() {                                                                                     //
      return React.createElement('div', { ref: 'graphViz' });                                               // 59
    }                                                                                                       // 62
                                                                                                            //
    return render;                                                                                          //
  }();                                                                                                      //
                                                                                                            //
  return PlotlyChart;                                                                                       //
}(React.Component);                                                                                         //
                                                                                                            //
module.export("default",exports.default=(PlotlyChart));                                                     //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ScoreStream.js":["react","react-redux",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/demo/ScoreStream.js                                                                               //
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
var ScoreStream = function ScoreStream(_ref) {                                                              // 10
  var score = _ref.score;                                                                                   // 10
                                                                                                            //
  return React.createElement(                                                                               // 11
    'ul',                                                                                                   // 12
    null,                                                                                                   //
    score.map(function (score, index) {                                                                     //
      return React.createElement(                                                                           // 15
        'li',                                                                                               // 16
        { key: index },                                                                                     //
        score.y,                                                                                            //
        ' - ',                                                                                              //
        score.date                                                                                          //
      );                                                                                                    // 16
    })                                                                                                      // 18
  );                                                                                                        // 12
};                                                                                                          // 22
                                                                                                            //
//                                                                                                          //
// CONNECT                                                                                                  //
//                                                                                                          //
                                                                                                            //
function mapStateToProps(_ref2) {                                                                           // 28
  var score = _ref2.demo.score;                                                                             // 28
                                                                                                            //
  return { score: score };                                                                                  // 29
}                                                                                                           // 30
                                                                                                            //
module.export("default",exports.default=(connect(mapStateToProps, null)(ScoreStream)));                     // 32
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"index.js":["react","react-redux","./ScoreStream","./Plotly","../utils/api",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/demo/index.js                                                                                     //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var React;module.import('react',{"default":function(v){React=v}});var connect;module.import('react-redux',{"connect":function(v){connect=v}});var ScoreStream;module.import('./ScoreStream',{"default":function(v){ScoreStream=v}});var PlotlyChart;module.import('./Plotly',{"default":function(v){PlotlyChart=v}});var apiRequest;module.import('../utils/api',{"apiRequest":function(v){apiRequest=v}});//
// IMPORTS                                                                                                  //
//                                                                                                          //
                                                                                                            //
                                                                                                            // 5
                                                                                                            // 6
                                                                                                            // 7
                                                                                                            // 8
                                                                                                            // 9
                                                                                                            //
//                                                                                                          //
// COMPONENT                                                                                                //
//                                                                                                          //
                                                                                                            //
var Demo = function Demo(_ref) {                                                                            // 15
  var y = _ref.y;                                                                                           // 15
  var x = _ref.x;                                                                                           // 15
                                                                                                            //
  return React.createElement(                                                                               // 16
    'div',                                                                                                  // 17
    { style: { width: '100%' } },                                                                           //
    React.createElement(                                                                                    //
      'div',                                                                                                // 18
      { className: 'row' },                                                                                 //
      React.createElement(                                                                                  //
        'div',                                                                                              // 19
        { className: 'col-xs-3 col-sm-3 col-md-3 col-lg-3' },                                               //
        React.createElement(                                                                                //
          'p',                                                                                              // 20
          null,                                                                                             //
          'Score Stream'                                                                                    //
        ),                                                                                                  // 20
        React.createElement(                                                                                //
          'button',                                                                                         // 21
          { onClick: function () {                                                                          //
              function onClick() {                                                                          // 21
                // test api route and stream connection                                                     //
                apiRequest('/getScoreInRealTime');                                                          // 23
              }                                                                                             // 24
                                                                                                            //
              return onClick;                                                                               // 21
            }() },                                                                                          // 21
          'Test the stream'                                                                                 //
        ),                                                                                                  // 21
        React.createElement(ScoreStream, null)                                                              //
      ),                                                                                                    // 19
      React.createElement(                                                                                  //
        'div',                                                                                              // 27
        { className: 'col-xs-9 col-sm-9 col-md-9 col-lg-9' },                                               //
        React.createElement(PlotlyChart, {                                                                  //
          x: x,                                                                                             // 29
          y: y,                                                                                             // 30
          name: 'Score',                                                                                    // 31
          type: 'log',                                                                                      // 32
          color: '#0000ff'                                                                                  // 33
        })                                                                                                  // 28
      )                                                                                                     // 27
    )                                                                                                       // 18
  );                                                                                                        // 17
};                                                                                                          // 39
                                                                                                            //
//                                                                                                          //
// CONNECT                                                                                                  //
//                                                                                                          //
                                                                                                            //
function mapStateToProps(_ref2) {                                                                           // 45
  var score = _ref2.demo.score;                                                                             // 45
                                                                                                            //
  var x = [0];                                                                                              // 46
  if (score.length > 1) {                                                                                   // 47
    for (var i = 1; i < score.length; i++) {                                                                // 48
      x.push(i);                                                                                            // 49
    }                                                                                                       // 50
  }                                                                                                         // 51
  var y = score.map(function (s) {                                                                          // 52
    return s.y;                                                                                             // 52
  });                                                                                                       // 52
  return { y: y, x: x };                                                                                    // 53
}                                                                                                           // 54
                                                                                                            //
module.export("default",exports.default=(connect(mapStateToProps, null)(Demo)));                            // 56
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"reducers":{"demo.js":["babel-runtime/helpers/toConsumableArray",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/reducers/demo.js                                                                                  //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
module.export({SAY_HELLO:function(){return SAY_HELLO},ADD_SCORE:function(){return ADD_SCORE},default:function(){return demo},addScore:function(){return addScore}});var _toConsumableArray;module.import('babel-runtime/helpers/toConsumableArray',{"default":function(v){_toConsumableArray=v}});
//                                                                                                          //
// IMPORTS                                                                                                  //
//                                                                                                          //
                                                                                                            //
var SAY_HELLO = 'SAY_HELLO';                                                                                // 5
var ADD_SCORE = 'ADD_SCORE';                                                                                // 6
                                                                                                            //
//                                                                                                          //
// INITIAL STATE                                                                                            //
//                                                                                                          //
                                                                                                            //
var intialState = {                                                                                         // 12
  score: []                                                                                                 // 13
};                                                                                                          // 12
                                                                                                            //
//                                                                                                          //
// REDUCER                                                                                                  //
//                                                                                                          //
                                                                                                            //
function demo() {                                                                                           // 20
  var state = arguments.length <= 0 || arguments[0] === undefined ? intialState : arguments[0];             // 20
  var action = arguments[1];                                                                                // 20
                                                                                                            //
  switch (action.type) {                                                                                    // 21
                                                                                                            //
    case ADD_SCORE:                                                                                         // 23
      return Object.assign({}, state, {                                                                     // 24
        score: [].concat(_toConsumableArray(state.score), [action.score])                                   // 25
      });                                                                                                   // 24
                                                                                                            //
    default:                                                                                                // 28
      return state;                                                                                         // 29
  }                                                                                                         // 21
}                                                                                                           // 31
                                                                                                            //
//                                                                                                          //
// EXPORT                                                                                                   //
//                                                                                                          //
                                                                                                            //
function addScore(score) {                                                                                  // 37
  return {                                                                                                  // 38
    type: ADD_SCORE,                                                                                        // 39
    score: score                                                                                            // 40
  };                                                                                                        // 38
}                                                                                                           // 42
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"index.js":["redux","./demo",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/reducers/index.js                                                                                 //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var combineReducers;module.import('redux',{"combineReducers":function(v){combineReducers=v}});var demo;module.import('./demo',{"default":function(v){demo=v}});//
// IMPORTS                                                                                                  //
//                                                                                                          //
                                                                                                            //
                                                                                                            // 5
                                                                                                            // 6
                                                                                                            //
//                                                                                                          //
// COMBINE                                                                                                  //
//                                                                                                          //
                                                                                                            //
var rootReducer = combineReducers({                                                                         // 12
  demo: demo                                                                                                // 13
});                                                                                                         // 12
                                                                                                            //
//                                                                                                          //
// EXPORT                                                                                                   //
//                                                                                                          //
module.export("default",exports.default=(rootReducer));                                                     // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"sagas":{"index.js":["babel-runtime/regenerator","redux-saga/effects","redux-saga","../reducers/demo",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/sagas/index.js                                                                                    //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
module.export({default:function(){return rootSaga}});var _regeneratorRuntime;module.import('babel-runtime/regenerator',{"default":function(v){_regeneratorRuntime=v}});var call,fork,put,race,select,take;module.import('redux-saga/effects',{"call":function(v){call=v},"fork":function(v){fork=v},"put":function(v){put=v},"race":function(v){race=v},"select":function(v){select=v},"take":function(v){take=v}});var takeEvery;module.import('redux-saga',{"takeEvery":function(v){takeEvery=v}});var ADD_SCORE;module.import('../reducers/demo',{"ADD_SCORE":function(v){ADD_SCORE=v}});
                                                                                                            //
var _marked = [sayHelloSagas, watchScoreStream, rootSaga].map(_regeneratorRuntime.mark);                    //
                                                                                                            //
                                                                                                            // 1
                                                                                                            // 2
                                                                                                            //
                                                                                                            // 4
                                                                                                            //
function sayHelloSagas(action) {                                                                            // 8
  return _regeneratorRuntime.wrap(function () {                                                             // 8
    function sayHelloSagas$(_context) {                                                                     // 8
      while (1) {                                                                                           // 8
        switch (_context.prev = _context.next) {                                                            // 8
          case 0:                                                                                           // 8
            console.log('say hello from sagas: ', action.score);                                            // 9
                                                                                                            //
          case 1:                                                                                           // 8
          case 'end':                                                                                       // 8
            return _context.stop();                                                                         // 8
        }                                                                                                   // 8
      }                                                                                                     // 8
    }                                                                                                       // 8
                                                                                                            //
    return sayHelloSagas$;                                                                                  // 8
  }(), _marked[0], this);                                                                                   // 8
}                                                                                                           // 8
                                                                                                            //
function watchScoreStream() {                                                                               // 12
  return _regeneratorRuntime.wrap(function () {                                                             // 12
    function watchScoreStream$(_context2) {                                                                 // 12
      while (1) {                                                                                           // 12
        switch (_context2.prev = _context2.next) {                                                          // 12
          case 0:                                                                                           // 12
            return _context2.delegateYield(takeEvery(ADD_SCORE, sayHelloSagas), 't0', 1);                   // 12
                                                                                                            //
          case 1:                                                                                           // 12
          case 'end':                                                                                       // 12
            return _context2.stop();                                                                        // 12
        }                                                                                                   // 12
      }                                                                                                     // 12
    }                                                                                                       // 12
                                                                                                            //
    return watchScoreStream$;                                                                               // 12
  }(), _marked[1], this);                                                                                   // 12
}                                                                                                           // 12
                                                                                                            //
function rootSaga() {                                                                                       // 16
  return _regeneratorRuntime.wrap(function () {                                                             // 16
    function rootSaga$(_context3) {                                                                         // 16
      while (1) {                                                                                           // 16
        switch (_context3.prev = _context3.next) {                                                          // 16
          case 0:                                                                                           // 16
            _context3.next = 2;                                                                             // 16
            return [fork(watchScoreStream)];                                                                // 16
                                                                                                            //
          case 2:                                                                                           // 16
          case 'end':                                                                                       // 16
            return _context3.stop();                                                                        // 16
        }                                                                                                   // 16
      }                                                                                                     // 16
    }                                                                                                       // 16
                                                                                                            //
    return rootSaga$;                                                                                       // 16
  }(), _marked[2], this);                                                                                   // 16
}                                                                                                           // 16
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

}]},"main.jsx":["babel-polyfill","react","redux","meteor/meteor","./reducers","./containers/Root","react-dom","./reducers/demo","./sagas","redux-saga",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/main.jsx                                                                                          //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
module.import('babel-polyfill');var React;module.import('react',{"default":function(v){React=v}});var applyMiddleware,compose,createStore;module.import('redux',{"applyMiddleware":function(v){applyMiddleware=v},"compose":function(v){compose=v},"createStore":function(v){createStore=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var rootReducer;module.import('./reducers',{"default":function(v){rootReducer=v}});var Root;module.import('./containers/Root',{"default":function(v){Root=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var addScore;module.import('./reducers/demo',{"addScore":function(v){addScore=v}});var rootSaga;module.import('./sagas',{"default":function(v){rootSaga=v}});var createSagaMiddleware;module.import('redux-saga',{"default":function(v){createSagaMiddleware=v}});// IMPORT
                                                                                                            // 2
                                                                                                            // 3
                                                                                                            // 4
                                                                                                            // 5
                                                                                                            // 6
                                                                                                            // 7
                                                                                                            // 8
                                                                                                            // 9
                                                                                                            //
//                                                                                                          //
// SAGA                                                                                                     //
//                                                                                                          //
                                                                                                            // 14
                                                                                                            // 15
var sagaMiddleware = createSagaMiddleware();                                                                // 16
                                                                                                            //
//                                                                                                          //
// STORE                                                                                                    //
//                                                                                                          //
                                                                                                            //
var store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;                                                                                                 // 28
}));                                                                                                        // 28
sagaMiddleware.run(rootSaga);                                                                               // 31
                                                                                                            //
//                                                                                                          //
// APP                                                                                                      //
//                                                                                                          //
                                                                                                            //
Meteor.startup(function () {                                                                                // 37
  // mount app                                                                                              //
  var reactDivElement = document.getElementById('render-target');                                           // 39
  if (reactDivElement) {                                                                                    // 40
    ReactDOM.render(React.createElement(Root, { store: store }), reactDivElement);                          // 41
  }                                                                                                         // 42
});                                                                                                         // 43
                                                                                                            //
//                                                                                                          //
// STREAMS                                                                                                  //
//                                                                                                          //
                                                                                                            //
Streamy.on('scoreStream', function (score) {                                                                // 49
  store.dispatch(addScore(score));                                                                          // 50
});                                                                                                         // 51
                                                                                                            //
//                                                                                                          //
// DEBUGS                                                                                                   //
// Since we don't want all those debug messages                                                             //
Meteor._debug = function (super_meteor_debug) {                                                             // 56
  return function (error, info) {                                                                           // 57
    if (!(info && _.has(info, 'msg'))) super_meteor_debug(error, info);                                     // 58
  };                                                                                                        // 60
}(Meteor._debug);                                                                                           // 61
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css",".jsx"]});
require("./client/template.main.js");
require("./client/components/Footer.js");
require("./client/components/Header.js");
require("./client/containers/Index.js");
require("./client/containers/Root.js");
require("./client/demo/Plotly.js");
require("./client/demo/ScoreStream.js");
require("./client/demo/index.js");
require("./client/reducers/demo.js");
require("./client/reducers/index.js");
require("./client/sagas/index.js");
require("./client/utils/api.js");
require("./client/main.jsx");