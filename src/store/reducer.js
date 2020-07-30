import { actionTypes } from './constants'

const currentDay = new Date()

const defaultState = {
  now: currentDay,
  selected: currentDay,
  month: currentDay,
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_DATE:
      return {
        ...state,
        selected: action.date,
      }
    case actionTypes.SET_MONTH:
      return {
        ...state,
        month: action.month,
      }
    case actionTypes.GO_TO_TODAY:
      return {
        ...state,
        month: currentDay,
        selected: currentDay,
      }
    default:
      return state
  }
}
