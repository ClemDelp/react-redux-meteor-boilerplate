import { call, fork, put, race, select, take } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

import {
  SAY_HELLO
} from '../reducers/data'

function * sayHelloSagas (action) {
  console.log('say hello from sagas: ', action.hello)
}

function * watchSayHelloFromStream () {
  yield * takeEvery(SAY_HELLO, sayHelloSagas)
}

export default function * rootSaga () {
  yield [
    fork(watchSayHelloFromStream)
  ]
}
