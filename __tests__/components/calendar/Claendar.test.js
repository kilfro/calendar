import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Calendar from '../../../src/components/calendar/Calendar'

describe('Calendar', () => {
    test('should render correctly', () => {
        const state = {
            now: new Date(2020, 4, 22),
            selected: new Date(2020, 4, 22),
            month: new Date(2020, 4, 22),
            tasksMap: {}
        }
        const store = configureStore([])(state)
        const component = mount(
            <Provider store={store}>
                <Calendar />
            </Provider>
        )

        expect(component).toMatchSnapshot()
    })

})
