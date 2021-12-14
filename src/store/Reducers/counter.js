import defaultState from '../States/counter'

function reducer(state = defaultState, actions) {
  if (actions.type === 'add') {
    return {
      ...state,
      count: state.count + actions.payload
    }
  }
  if (actions.type === 'del') {
    return {
      ...state,
      count: state.count - actions.payload,
    }
  }
  return state
}

export default reducer