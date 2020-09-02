import React from 'react'
import { EditWindow } from '../../../src/components/tasklist/EditWindow.jsx'
import { mount } from 'enzyme'

describe('EditWindow', () => {
  const getComponent = (specific) => {
    const props = {
      show: true,
      task: {
        from: new Date(2020, 4, 22),
        to: new Date(2020, 4, 22),
        color: 'green',
      },
      toggleFunction: () => {},
      editTask: () => {},
      ...specific,
    }

    return mount(<EditWindow {...props} />)
  }
  test('should close itself', () => {
    const closeFunc = jest.fn()
    const component = getComponent({ toggleFunction: closeFunc })

    component.find('.close').simulate('click')
    expect(closeFunc).toHaveBeenCalled()

    component.find('div[children="Отменить"]').simulate('click')
    expect(closeFunc).toHaveBeenCalledTimes(2)
  })

  test('should save edited task', () => {
    const saveFunc = jest.fn()
    const component = getComponent({ editTask: saveFunc })
    component.find('div[children="Сохранить"]').simulate('click')

    expect(saveFunc).toHaveBeenCalled()
  })
})
