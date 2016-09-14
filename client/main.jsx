// IMPORT
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import { Meteor } from 'meteor/meteor'
import rootReducer from './reducers'
import Root from './containers/Root'
import ReactDOM from 'react-dom'
import {sayHello} from './reducers/data'

//
// SAGA
//
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

//
// STORE
//
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
  )
)
sagaMiddleware.run(rootSaga)

// APP

Meteor.startup(() => {
  // STREAMS
  Streamy.on('hello', function (json) {
    store.dispatch(sayHello(json.data))
  })

  // mount app
	const reactDivElement = document.getElementById('render-target')
	if (reactDivElement) {
		ReactDOM.render(<Root store={store} />, reactDivElement)
	}
})

// Since we don't want all those debug messages
Meteor._debug = (function (super_meteor_debug) {
  return function (error, info) {
    if (!(info && _.has(info, 'msg')))
      super_meteor_debug(error, info)
  }
})(Meteor._debug);
