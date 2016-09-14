import { call, fork, put, race, select, take } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

import {
  ADD_SCORE
} from '../reducers/demo'

function * sayHelloSagas (action) {
  console.log('say hello from sagas: ', action.score)
}

function * watchScoreStream () {
  yield * takeEvery(ADD_SCORE, sayHelloSagas)
}

export default function * rootSaga () {
  yield [
    fork(watchScoreStream)
  ]
}
