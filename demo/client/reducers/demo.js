//
// IMPORTS
//

export const SAY_HELLO = 'SAY_HELLO'
export const ADD_SCORE = 'ADD_SCORE'

//
// INITIAL STATE
//

const intialState = {
  score: []
}

//
// REDUCER
//

export default function demo (state = intialState, action) {
  switch (action.type) {

    case ADD_SCORE:
      return Object.assign({}, state, {
        score: [...state.score, action.score]
      })

    default:
      return state
  }
}

//
// EXPORT
//

export function addScore (score) {
  return {
    type: ADD_SCORE,
    score
  }
}
