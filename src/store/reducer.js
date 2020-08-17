import { actionTypes } from './constants'
import '../prototypes'

const currentDay = new Date()

const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/

const reviver = (key, value) => {
  if (typeof value === 'string' && dateFormat.test(value)) {
    return new Date(value)
  }

  return value
}

const defaultState = {
  now: currentDay,
  selected: currentDay,
  month: currentDay,
  tasksMap: localStorage.getItem('tasksMap')
    ? JSON.parse(localStorage.getItem('tasksMap'), reviver)
    : {},
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
    case actionTypes.ADD_TASK:
      const { task } = action
      const { tasksMap } = state

      if (tasksMap.hasOwnProperty(task.from.getString())) {
        tasksMap[task.from.getString()].push(task)
      } else {
        tasksMap[task.from.getString()] = [task]
      }

      localStorage.setItem('tasksMap', JSON.stringify(tasksMap))

      return {
        ...state,
        tasksMap,
      }
    default:
      return state
  }
}
