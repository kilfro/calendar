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

const tasksMap = localStorage.getItem('tasksMap')
  ? JSON.parse(localStorage.getItem('tasksMap'), reviver)
  : {}

const defaultState = {
  now: currentDay,
  selected: currentDay,
  month: currentDay,
  tasksMap,
}

console.log(defaultState)

export const reducer = (state = defaultState, action) => {
  const { selected } = state

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
      const tasksMap = { ...state.tasksMap }

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
    case actionTypes.REMOVE_TASK:
      const { uid } = action
      const tasks = { ...state.tasksMap }
      const filteredTasks = tasks[selected.getString()].filter(task => task.uid !== uid)

      tasks[selected.getString()] = filteredTasks
      localStorage.setItem('tasksMap', JSON.stringify(tasks))

      return {
        ...state,
        tasksMap: tasks,
      }
    case actionTypes.EDIT_TASK:
      const editedTask = action.task
      const tasksToEdit = { ...state.tasksMap }
      const editedTasks = tasksToEdit[selected.getString()].map(task => task.uid === editedTask.uid ? editedTask : task)

      tasksToEdit[selected.getString()] = editedTask
      localStorage.setItem('tasksMap', JSON.stringify(tasksToEdit))

      return {
        ...state,
        tasksMap: tasksToEdit,
      }
    default:
      return state
  }
}
