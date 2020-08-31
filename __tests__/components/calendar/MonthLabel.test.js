import React from 'react'
import { shallow } from 'enzyme'
import { MonthLabel} from '../../../src/components/calendar/MonthLabel'

describe('MonthLabel component', () => {
    test('should render correctly', () => {
        const component = shallow(<MonthLabel month={new Date()} />)

        expect(component).toMatchSnapshot()
    })
})