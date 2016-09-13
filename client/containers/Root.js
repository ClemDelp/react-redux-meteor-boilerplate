//
// IMPORTS
//

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import Index from './Index'

//
// COMPONENT
//

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Index} />
      <Route path='*' component={Index} />
    </Router>
  </Provider>
)

//
// EXPORT
//

export default Root
