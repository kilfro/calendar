import { all, call, put, takeLatest } from 'redux-saga/effects'
import { putTasks, removeTask, selectDate, setMonth } from './actions'

import { Http } from '../http'
import { actionTypes } from './constants'

function* watchChangeMonth() {
  yield takeLatest(
    [actionTypes.PREV_MONTH, actionTypes.GO_TO_TODAY, actionTypes.NEXT_MONTH],
    loadTasksAndSetNewMonth
  )
}

function* loadTasksAndSetNewMonth(action) {
  const { type, date } = action
  let newMonth

  switch (type) {
    case actionTypes.PREV_MONTH:
      newMonth = new Date(date.getFullYear(), date.getMonth() - 1)
      break
    case actionTypes.NEXT_MONTH:
      newMonth = new Date(date.getFullYear(), date.getMonth() + 1)
      break
    case actionTypes.GO_TO_TODAY:
      newMonth = new Date()
      yield put(selectDate(newMonth))
    default:
      break
  }

  const url = `http://127.0.0.1:4500/api/tasks?year=${newMonth.getFullYear()}&month=${
    newMonth.getMonth() + 1
  }`
  const tasks = yield call(Http.get, url)
  yield put(putTasks(tasks))
  yield put(setMonth(newMonth))
}

function* watchDeleteTask() {
  yield takeLatest(actionTypes.DELETE_TASK, function* (action) {
    yield call(Http.delete, `http://127.0.0.1:4500/api/tasks/${action.uid}`)
    yield put(removeTask(action.uid))
  })
}

export function* rootSaga() {
  yield all([watchChangeMonth(), watchDeleteTask()])
}
