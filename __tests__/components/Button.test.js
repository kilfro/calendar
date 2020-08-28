import React from 'react'
import Button from '../../src/components/Button'

describe('Button', () => {
  test('has to use click handler', () => {
    const clickHandler = jest.fn()
    const component = shallow(
      <Button clickHandler={clickHandler}>Title</Button>
    )
    component.find('div').simulate('click')

    expect(clickHandler).toHaveBeenCalled()
  })

  test('has to render children', () => {
    const children = <div>Button title</div>
    const component = shallow(
      <Button clickHandler={() => {}}>{children}</Button>
    )

    expect(component.contains(children)).toBeTruthy()
  })

  test('does not have to have filled style', () => {
    let component = shallow(<Button clickHandler={() => {}}>Title</Button>)

    expect(component.find('div').hasClass('filled')).toBeFalsy()
  })

  test('has to have filled style', () => {
    let component = shallow(
      <Button clickHandler={() => {}} filled={true}>
        Title
      </Button>
    )

    expect(component.find('div').hasClass('filled')).toBeTruthy()
  })
})
