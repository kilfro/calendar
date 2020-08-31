import React from 'react'
import ColorSelector from '../../../src/components/tasklist/ColorSelector'
import { shallow } from 'enzyme'

describe('ColorSelector', () => {
    test('should show colors to select', () => {
        const component = shallow(
            <ColorSelector value='green' changeHandler={() => { }} />
        )

        expect(component.find('.options').length).toEqual(0)
        component.find('.option').simulate('click')
        expect(component.find('.options').length).toEqual(1)
    })

    test('should change color', () => {
        const changeHandler = jest.fn()
        const component = shallow(
            <ColorSelector value='green' changeHandler={changeHandler} />
        )

        component.find('.option').simulate('click')
        component.find('.red').parent().simulate('click')

        expect(changeHandler).toHaveBeenCalled()
        expect(changeHandler).toHaveBeenCalledWith('red')
    })
})
