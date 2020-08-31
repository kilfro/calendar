import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Calendar from '../../../src/components/calendar/Calendar'

describe('Calendar', () => {
    test('should render correctly', () => {
        const state = {
            now: new Date(),
            selected: new Date(),
            month: new Date(),
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
