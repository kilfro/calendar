import React from 'react'
import { Provider } from 'react-redux'
import Month from '../../../src/components/calendar/Month'
import configureStore from 'redux-mock-store'
import Week from '../../../src/components/calendar/Week'

describe('Month component', () => {
    test('should render weeks', () => {
        const month = new Date(2020, 4, 22)
        const state = {
            now: month,
            selected: month,
            month: month,
            tasksMap: {}
        }
        const store = configureStore([])(state)
        const component = mount(
            <Provider store={store}>
                <Month />
            </Provider>
        )

        expect(component.find(Week).length).toEqual(5)
    })
})