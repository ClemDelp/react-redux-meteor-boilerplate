// IMPORT
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Meteor } from 'meteor/meteor'
import {rootReducer} from './reducers'
// import {sayHello} from './reducers/data'
import Root from './containers/Root'
import ReactDOM from 'react-dom'
import {apiRequest} from './utils/api'

// CREATE REDUX SOTRE
const store = createStore(
  rootReducer, {}, window.devToolsExtension ? window.devToolsExtension() : undefined
)

// APP
Meteor.startup(() => {
  apiRequest('/hello')
  Streamy.on('hello', (hello) => {
    // sayHello(hello.hello)
  })
	const reactDivElement = document.getElementById('render-target')
	if (reactDivElement) {
		ReactDOM.render(<Root store={store} />, reactDivElement)
	}
})
