import { actionTypes } from './constants'
import { v4 as getUidV4 } from 'uuid'

export const selectDate = (date) => {
  return {
    type: actionTypes.SELECT_DATE,
    date,
  }
}

export const setMonth = (month) => {
  return {
    type: actionTypes.SET_MONTH,
    month,
  }
}

export const updateNow = () => {
  return {
    type: actionTypes.UPDATE_NOW,
  }
}

export const prevMonth = (date) => ({
  type: actionTypes.PREV_MONTH,
  date,
})

export const nextMonth = (date) => ({
  type: actionTypes.NEXT_MONTH,
  date,
})

export const goToToday = () => {
  return {
    type: actionTypes.GO_TO_TODAY,
  }
}

export const createTask = (task) => ({
  type: actionTypes.CREATE_TASK,
  task: {
    ...task,
    uid: getUidV4(),
  },
})

export const addTask = (task) => {
  return {
    type: actionTypes.ADD_TASK,
    task,
  }
}

export const removeTask = (uid) => {
  return {
    type: actionTypes.REMOVE_TASK,
    uid,
  }
}

export const deleteTask = (uid) => ({
  type: actionTypes.DELETE_TASK,
  uid,
})

export const editTask = (task) => {
  return {
    type: actionTypes.EDIT_TASK,
    task,
  }
}

export const putTasks = (tasks) => ({
  type: actionTypes.PUT_TASKS,
  tasks,
})
