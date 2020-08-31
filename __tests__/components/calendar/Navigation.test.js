import React from 'react'
import { shallow, mount } from 'enzyme'
import { Navigation } from '../../../src/components/calendar/Navigation'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

describe('Navigation component', () => {
    test('should renders correctly', () => {
        const component = shallow(<Navigation />)
        
        expect(component).toMatchSnapshot()
    })

    test('should call prevMonth function', () => {
        const month = new Date()
        const prevFunc = jest.fn()
        const component = mount(
            <Navigation month={month} prevMonth={prevFunc} />
        )

        component.find(ChevronLeft).simulate('click')

        expect(prevFunc).toHaveBeenCalled()
        expect(prevFunc).toHaveBeenCalledWith(month)
    })

    test('should call nextMonth function', () => {
        const month = new Date()
        const nextFunc = jest.fn()
        const component = mount(
            <Navigation month={month} nextMonth={nextFunc} />
        )

        component.find(ChevronRight).simulate('click')

        expect(nextFunc).toHaveBeenCalled()
        expect(nextFunc).toHaveBeenCalledWith(month)
    })

    test('should call goToToday function', () => {
        const goToFunction = jest.fn()
        const component = mount(
            <Navigation goToToday={goToFunction} />
        )

        component.find('div[children="Сегодня"]').simulate('click')

        expect(goToFunction).toHaveBeenCalled()
    })
})
