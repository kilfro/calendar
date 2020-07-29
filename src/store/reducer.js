import { actionTypes } from './constants'

const defaultState = {
  now: new Date(),
  selected: new Date(),
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_DATE:
      return {
        ...state,
        selected: action.date,
      }
    default:
      return state
  }
}
