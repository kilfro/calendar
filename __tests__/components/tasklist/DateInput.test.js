import React from 'react'
import DateInput from '../../../src/components/tasklist/DateInput'
import { shallow } from 'enzyme'
import '../../../src/prototypes'

describe('DateInput', () => {
    const getComponent = (props) => shallow(
        <DateInput
            value={new Date().toLocalISOString()}
            changeHandler={() => { }}
            {...props}
        />
    )

    test('should show label', () => {
        const label = 'This must be rendered'
        const component = getComponent({ label })

        expect(component.text()).toEqual(label)
    })

    test('should use value', () => {
        const value = new Date(2020, 4, 22).toLocalISOString()
        const component = getComponent({ value })

        expect(component.find('input').props().value).toEqual(value)
    })

    test('should call change handler', () => {
        const changeHandler = jest.fn()
        const component = getComponent({ changeHandler })

        component.find('input').simulate('change', { event: { value: new Date().toLocalISOString() } })
        expect(changeHandler).toHaveBeenCalled()
    })


})
