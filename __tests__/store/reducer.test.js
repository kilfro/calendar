import { reducer } from '../../src/store/reducer'
import * as actionCreator from '../../src/store/actions'
import '../../src/prototypes'

describe('Reducer', () => {
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
})
