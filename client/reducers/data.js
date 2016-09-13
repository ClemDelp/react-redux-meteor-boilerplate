//
// IMPORTS
//

export const SAY_HELLO = 'SAY_HELLO'

//
// INITIAL STATE
//

const intialState = {
  hellos: []
}

//
// REDUCER
//

export default function data (state = intialState, action) {
  switch (action.type) {

    case SAY_HELLO:
      console.log('pouette')
      return Object.assign({}, state, {
        hellos: [...state.hellos, action.hello]
      })

    default:
      return state
  }
}

//
// EXPORT
//

export function sayHello (hello) {
  return {
    type: SAY_HELLO,
    hello
  }
}
