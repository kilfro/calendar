import React from 'react'
import { shallow } from 'enzyme'
<<<<<<< HEAD
import { MonthLabel} from '../../../src/components/calendar/MonthLabel'

describe('MonthLabel component', () => {
    test('should render correctly', () => {
        const component = shallow(<MonthLabel month={new Date()} />)

        expect(component).toMatchSnapshot()
    })
})
=======
import { MonthLabel } from '../../../src/components/calendar/MonthLabel'

describe('MonthLabel component', () => {
  test('should render correctly', () => {
    const component = shallow(<MonthLabel month={new Date(2020, 7, 31)} />)

    expect(component).toMatchSnapshot()
  })
})
>>>>>>> 0db6c544274a79f31327e45c545155621041b7fc
