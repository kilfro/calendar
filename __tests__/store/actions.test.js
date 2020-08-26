import * as creator from '../../src/store/actions'
import { actionTypes } from '../../src/store/constants'

describe('Action creator', () => {
  test("has to create 'select date' action correctly", () => {
    const date = new Date()
    const action = creator.selectDate(date)

    expect(action.type).toEqual(actionTypes.SELECT_DATE)
    expect(action.date).toEqual(date)
  })

  test("has to create 'set month' action correctly", () => {
    const month = new Date()
    const action = creator.setMonth(month)

    expect(action.type).toEqual(actionTypes.SET_MONTH)
    expect(action.month).toEqual(month)
  })

  test("has to create 'previous month' action correctly", () => {
    const date = new Date(2020, 5)
    const action = creator.prevMonth(date)

    expect(action.type).toEqual(actionTypes.SET_MONTH)
    expect(action.month.getMonth()).toEqual(4)
  })

  test("has to create 'next month' action correctly", () => {
    const date = new Date(2020, 5)
    const action = creator.nextMonth(date)

    expect(action.type).toEqual(actionTypes.SET_MONTH)
    expect(action.month.getMonth()).toEqual(6)
  })

  test("has to create 'go to today' action correctly", () => {
    const action = creator.goToToday()

    expect(action.type).toEqual(actionTypes.GO_TO_TODAY)
  })

  test("has to create 'add task' action correctly", () => {
    const task = {
      uid: 'UID',
      title: 'task',
    }
    const action = creator.addTask(task)

    expect(action.type).toEqual(actionTypes.ADD_TASK)
    expect(action.task).toEqual(task)
  })

  test("has to create 'remove task' action correctly", () => {
    const uid = 'UID'
    const action = creator.removeTask(uid)

    expect(action.type).toEqual(actionTypes.REMOVE_TASK)
    expect(action.uid).toEqual(uid)
  })

  test("has to create 'edit task' action correctly", () => {
    const editedTask = {
      uid: 'UID',
      title: 'task to edit',
    }
    const action = creator.editTask(editedTask)

    expect(action.type).toEqual(actionTypes.EDIT_TASK)
    expect(action.task).toEqual(editedTask)
  })
})
