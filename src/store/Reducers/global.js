import defaultState from '../States/global'

function reducer(state = defaultState, actions) {
  if(actions.type === 'set_token') {
    return {
      ...state,
      _token: actions.payload
    }
  }
  return state
}

export default reducer
