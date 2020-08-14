import { actionTypes } from './constants'

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

export const prevMonth = (date) => {
  let month = date.getMonth()
  const prev = new Date(date.getFullYear(), month - 1)

  return setMonth(prev)
}

export const nextMonth = (date) => {
  let month = date.getMonth()
  const prev = new Date(date.getFullYear(), month + 1)

  return setMonth(prev)
}

export const goToToday = () => {
  return {
    type: actionTypes.GO_TO_TODAY,
  }
}

export const addTask = (task) => {
  return {
    type: actionTypes.ADD_TASK,
    task: task,
  }
}
