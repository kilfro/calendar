import { actionTypes } from './constants'
import '../prototypes'

const currentDay = new Date()

const defaultState = {
  now: currentDay,
  selected: currentDay,
  month: currentDay,
  tasksMap: {
    [new Date(2020, 7, 2).getString()]: [
      {
        from: new Date(),
        to: new Date(),
        color: 'green',
        title: 'Title',
      },
    ],
  },
}

console.log(defaultState)

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
    case actionTypes.UPDATE_NOW:
      return {
        ...state,
        now: new Date(),
      }
    default:
      return state
  }
}
