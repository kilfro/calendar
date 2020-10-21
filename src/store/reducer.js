import '../prototypes'

import { actionTypes } from './constants'

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
  tasksMap: {},
}

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
      const filteredTasks = tasks[selected.getString()].filter(
        (task) => task.uid !== uid
      )

      if (filteredTasks.length === 0) {
        delete task[selected.getString()]
      } else {
        tasks[selected.getString()] = filteredTasks
      }

      return {
        ...state,
        tasksMap: tasks,
      }
    case actionTypes.EDIT_TASK:
      const editedTask = action.task
      const tasksToEdit = { ...state.tasksMap }
      const editedTasks = tasksToEdit[selected.getString()].map((task) =>
        task.uid === editedTask.uid ? editedTask : task
      )

      tasksToEdit[selected.getString()] = editedTasks
      localStorage.setItem('tasksMap', JSON.stringify(tasksToEdit))

      return {
        ...state,
        tasksMap: tasksToEdit,
      }
    case actionTypes.PUT_TASKS:
      const loadedTasks = JSON.parse(action.tasks, reviver)
      const newTasksMap = {}

      loadedTasks.forEach((task) => {
        if (newTasksMap.hasOwnProperty(task.from.getString())) {
          newTasksMap[task.from.getString()].push(task)
        } else {
          newTasksMap[task.from.getString()] = [task]
        }
      })

      return {
        ...state,
        tasksMap: newTasksMap,
      }
    default:
      return state
  }
}
