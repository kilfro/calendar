import React from 'react'
import Week from '../../../src/components/calendar/Week'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { Day } from '../../../src/components/calendar/Day'

describe('Week component', () => {
  let component
  const days = [
    new Date(2020, 7, 28),
    new Date(2020, 7, 29),
    new Date(2020, 7, 30),
    new Date(2020, 7, 31),
  ]

  beforeEach(() => {
    const defaultState = {
      now: new Date(),
      selected: new Date(),
      tasksMap: {},
    }
    const mockStore = configureStore([])(defaultState)
    component = mount(
      <Provider store={mockStore}>
        <Week days={days} />
      </Provider>
    )
  })

  test('has to render days', () => {
    expect(component.find(Day).length).toEqual(days.length)
  })

  test('hat to set correct date props to Day component', () => {
    const dateProps = component.find(Day).map((day) => day.prop('date'))
    const dateSet = new Set([...days, ...dateProps])

    expect(dateProps.length).toEqual(4)
    expect(dateSet.size).toEqual(4)
  })
})
