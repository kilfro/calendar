import React from 'react'
import { TaskCreator } from '../../../src/components/tasklist/TaskCreator'

describe('TaskCreator', () => {
  test('should call save function', () => {
    const saveFunc = jest.fn()
    const component = mount(
      <TaskCreator addTask={saveFunc} selected={new Date(2020, 4, 4)} />
    )

    component.find('div[children="Сохранить"]').simulate('click')

    expect(saveFunc).toHaveBeenCalled()
  })
})
