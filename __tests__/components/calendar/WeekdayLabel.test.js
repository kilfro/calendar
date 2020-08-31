import React from 'react'
import { shallow } from 'enzyme'
import WeekdayLabel from '../../../src/components/calendar/WeekdayLabel'

describe('WeekdayLabel', () => {
    test('should render correctly', () => {
        const component = shallow(<WeekdayLabel />)

        expect(component).toMatchSnapshot()
    })
})
