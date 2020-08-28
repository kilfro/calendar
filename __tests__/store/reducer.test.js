import { reducer } from '../../src/store/reducer'
import * as actionCreator from '../../src/store/actions'
import '../../src/prototypes'

describe('Reducer', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('has to return default state', () => {
    const { now, selected, month, tasksMap } = reducer(undefined, {})

    expect(now).not.toBeUndefined()
    expect(selected).not.toBeUndefined()
    expect(month).not.toBeUndefined()
    expect(tasksMap).not.toBeUndefined()
  })

  test("has to update 'selected'", () => {
    const date = new Date(2020, 2, 20)
    const { selected } = reducer(undefined, actionCreator.selectDate(date))

    expect(selected).toEqual(date)
  })

  test("has to update 'month'", () => {
    const date = new Date(2020, 2)
    const { month } = reducer(undefined, actionCreator.setMonth(date))

    expect(month).toEqual(date)
  })

  test("has to change 'month' and 'selected' to today", () => {
    const state = {
      selected: new Date(1970, 0, 1),
      month: new Date(1970, 1, 1),
    }
    const today = new Date()
    const { month, selected } = reducer(state, actionCreator.goToToday())

    expect(month.getString()).toEqual(today.getString())
    expect(selected.getString()).toEqual(today.getString())
  })

  test("has to update 'now'", () => {
    const state = {
      now: new Date(2020, 5, 1),
    }
    const { now } = reducer(state, actionCreator.updateNow())

    expect(now.getString()).toEqual(new Date().getString())
  })

  test('has to add new task', () => {
    const task = {
      uid: 'UID',
      title: 'New task',
      from: new Date(2020, 4, 22, 10, 0),
      to: new Date(2020, 4, 22, 10, 15),
    }
    const selected = new Date(2020, 4, 22)
    const oldState = {
      selected,
      tasksMap: {},
    }
    const { tasksMap } = reducer(oldState, actionCreator.addTask(task))

    expect(tasksMap.hasOwnProperty(selected.getString())).toBeTruthy()
    expect(tasksMap[selected.getString()][0]).toEqual(task)
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'tasksMap',
      JSON.stringify(tasksMap)
    )
  })

  test('has to add new task into existed date', () => {
    const task = {
      uid: 'UID',
      title: 'New task',
      from: new Date(2020, 4, 22, 10, 0),
      to: new Date(2020, 4, 22, 10, 15),
    }
    const selected = new Date(2020, 4, 22)
    const oldState = {
      selected,
      tasksMap: {
        '2020-5-22': [
          {
            uid: 'Existed task',
            title: 'Existed task',
            from: new Date(2020, 4, 22, 9, 45),
            to: new Date(2020, 4, 22, 10, 0),
          },
        ],
      },
    }
    const { tasksMap } = reducer(oldState, actionCreator.addTask(task))

    expect(tasksMap[selected.getString()].length).toEqual(2)
    expect(tasksMap[selected.getString()].includes(task)).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'tasksMap',
      JSON.stringify(tasksMap)
    )
  })

  test('has to remove task correctly', () => {
    const uidToRemove = 'REMOVE_IT'
    const selected = new Date(2020, 4, 22)
    const state = {
      selected,
      tasksMap: {
        '2020-5-22': [
          {
            uid: '1',
            title: 'One',
          },
          {
            uid: uidToRemove,
            title: 'Task to remove',
          },
        ],
      },
    }
    const { tasksMap } = reducer(state, actionCreator.removeTask(uidToRemove))

    expect(tasksMap[selected.getString()].length).toEqual(1)
    expect(tasksMap[selected.getString()][0].uid).toEqual('1')
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'tasksMap',
      JSON.stringify(tasksMap)
    )
  })

  test('has to edit task correctly', () => {
    const uidToEdit = 'EDIT_IT'
    const selected = new Date(2020, 4, 22)
    const state = {
      selected,
      tasksMap: {
        '2020-5-22': [
          {
            uid: '1',
            title: 'One',
          },
          {
            uid: uidToEdit,
            title: 'Task to edit',
          },
        ],
      },
    }
    const { tasksMap } = reducer(
      state,
      actionCreator.editTask({ uid: uidToEdit, title: 'Task was edited' })
    )
    const filteredTasks = tasksMap[selected.getString()].filter(
      (task) => task.uid === uidToEdit
    )

    expect(filteredTasks.length).toEqual(1)
    expect(filteredTasks[0].title).toEqual('Task was edited')
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'tasksMap',
      JSON.stringify(tasksMap)
    )
  })
})
