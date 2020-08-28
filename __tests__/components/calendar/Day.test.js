import React from 'react'
import { Day } from '../../../src/components/calendar/Day'
import { shallow } from 'enzyme'
import '../../../src/prototypes'

describe('Day component', () => {
  const getComponent = (props) => {
    const now = new Date()
    return shallow(
      <Day date={now} now={now} selected={now} tasksMap={{}} {...props} />
    )
  }

  test('has to have only one class', () => {
    const component = getComponent({ date: new Date(2020, 7, 27) })

    expect(component.find('div').prop('className')).toEqual('day')
  })

  test("has to have class 'selected'", () => {
    const component = getComponent({ now: new Date(1970, 0, 1) })

    expect(component.find('div').prop('className')).toEqual('day selected')
  })

  test("has to have class 'today'", () => {
    const component = getComponent({ selected: new Date(1970, 0, 1) })

    expect(component.find('div').prop('className')).toEqual('day today')
  })

  test("has to have class 'weekend'", () => {
    const component = getComponent({ date: new Date(2020, 7, 22) })

    expect(component.find('div').prop('className')).toEqual('day weekend')
  })

  test("has to have class 'has-task'", () => {
    const component = getComponent({
      now: new Date(1970, 0, 1),
      selected: new Date(1970, 0, 1),
      tasksMap: {
        [new Date().getString()]: [],
      },
    })

    expect(component.find('div').prop('className')).toEqual('day has-task')
  })

  test('has to render date', () => {
    const component = getComponent({ date: new Date(2020, 8, 28) })

    expect(component.contains(28)).toBeTruthy()
  })

  test('has to call select day function by click', () => {
    const selectDate = jest.fn()
    const component = getComponent({ selectDate })
    component.find('.day').simulate('click')

    expect(selectDate).toHaveBeenCalled()
  })
})
